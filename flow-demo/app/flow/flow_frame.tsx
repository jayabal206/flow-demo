import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Panel,
  useReactFlow,
  MiniMap,
  Controls,
  Background,
  Connection,
  Edge,
} from 'reactflow';
import 'reactflow/dist/base.css';

// import './flow.module.css';

// import '../tailwind.config.js';
import FlowTextNode from './flow_textnode';
import FlowSidebarLeft from './flow_sidebar_left';
import FlowSidebarRight from './flow_sidebar_right';

// Key for local storage
const flowKey = 'flow-key';

const list = [
  { id: 1, name: 'restaurant', type: 'String' },
  { id: 2, name: 'address', type: 'String' },
  { id: 3, name: 'phone_number', type: 'Numeric' },
  { id: 4, name: 'location', type: 'Boolean' },
  { id: 5, name: 'timing', type: 'Numeric' },
];
// Initial node setup
const initialNodes = [
  {
    id: '1',
    type: 'textnode',
    data: { label: 'mergent', list },
    position: { x: 350, y: 250 },
  },
];

let id = 0;
const defaultViewport = { x: 0, y: 0, zoom: 1 };

// Function for generating unique IDs for nodes
const getId = () => `node_${id++}`;

const FlowFrame = () => {
  // Define custom node types
  const nodeTypes = useMemo(
    () => ({
      textnode: FlowTextNode,
    }),
    []
  );

  // States and hooks setup
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedElements, setSelectedElements] = useState([]);
  const [nodeName, setNodeName] = useState('mergent');

  // Update nodes data when nodeName or selectedElements changes
  useEffect(() => {
    console.log('node deatils', nodes);
    if (selectedElements.length > 0) {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedElements[0]['id']) {
            node.data = {
              ...node.data,
              label: nodeName,
            };
          }
          return node;
        })
      );
    } else {
      setNodeName(''); // Clear nodeName when no node is selected
    }
  }, [nodeName, selectedElements, setNodes]);

  // Handle node click
  const onNodeClick = useCallback(
    (
      event: any,
      node: { data: { label: React.SetStateAction<string> }; id: string }
    ) => {
      setSelectedElements([node]);
      setNodeName(node.data.label);
      setNodes((nodes) =>
        nodes.map((n) => ({
          ...n,
          selected: n.id === node.id,
        }))
      );
    },
    []
  );

  // Setup viewport
  const { setViewport } = useReactFlow();

  // Check for empty target handles
  const checkEmptyTargetHandles = () => {
    let emptyTargetHandles = 0;
    edges.forEach((edge) => {
      if (!edge.targetHandle) {
        emptyTargetHandles++;
      }
    });
    return emptyTargetHandles;
  };

  // Check if any node is unconnected
  const isNodeUnconnected = useCallback(() => {
    let unconnectedNodes = nodes.filter(
      (node) =>
        !edges.find(
          (edge) => edge.source === node.id || edge.target === node.id
        )
    );

    return unconnectedNodes.length > 0;
  }, [nodes, edges]);

  // Save flow to local storage
  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const emptyTargetHandles = checkEmptyTargetHandles();

      if (nodes.length > 1 && (emptyTargetHandles > 1 || isNodeUnconnected())) {
        alert(
          'Error: More than one node has an empty target handle or there are unconnected nodes.'
        );
      } else {
        const flow = reactFlowInstance['toObject()'];
        localStorage.setItem(flowKey, JSON.stringify(flow));
        alert('Save successful!'); // Provide feedback when save is successful
      }
    }
  }, [reactFlowInstance, nodes, isNodeUnconnected]);

  // Restore flow from local storage
  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage['getItem(flowKey)']);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  // Handle edge connection
  const onConnect = useCallback(
    (params: Connection | Edge) => {
      console.log('Edge created: ', params);
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  // Enable drop effect on drag over
  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    []
  );

  // Handle drop event to add a new node
  const onDrop = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { getData: (arg0: string) => any };
      clientX: number;
      clientY: number;
    }) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        // data: { label: `${type}` },
        data: { label: 'mergent', list },
      };

      console.log('Node created: ', newNode);
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const rfStyle = {
    backgroundColor: '#ffffff',
  };

  return (
    <div className='flex flex-row min-h-screen lg:flex-row'>
      <FlowSidebarLeft
        nodeName={nodeName}
        setNodeName={setNodeName}
        selectedNode={selectedElements[0]}
        setSelectedElements={setSelectedElements}
      />
      <div className='flex-grow h-screen' ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          style={rfStyle}
          onNodeClick={onNodeClick}
          onPaneClick={() => {
            setSelectedElements([]); // Reset selected elements when clicking on pane
            setNodes((nodes) =>
              nodes.map((n) => ({
                ...n,
                selected: false, // Reset selected state of nodes when clicking on pane
              }))
            );
          }}
          // fitView
          defaultViewport={defaultViewport}
        >
          <Background variant='dots' gap={12} size={1} />
          <Controls />
        </ReactFlow>
      </div>
      <FlowSidebarRight />
    </div>
  );
};

// Wrap App with ReactFlowProvider
function FlowWithProvider() {
  return (
    <ReactFlowProvider>
      <FlowFrame />
    </ReactFlowProvider>
  );
}

export default FlowWithProvider;
