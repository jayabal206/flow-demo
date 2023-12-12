import React from 'react';

export default function FlowSidebarLeft({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
}) {
  const handleInputChange = (event: { target: { value: any } }) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='border-r-2  text-sm w-64 h-screen text-black'>
      <>
        {/* <h3 className='text-xl mb-4 text-blue-900'>Nodes Panel</h3> */}
        {/* <div
          className='bg-white p-3 border-2  rounded cursor-move flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200'
          onDragStart={(event) => onDragStart(event, 'textnode')}
          draggable
        >
          + New Entity
        </div> */}
        <button
          className='btn_entity'
          draggable
          onDragStart={(event) => onDragStart(event, 'textnode')}
        >
          + New Entity
        </button>
        <input
          type='text'
          className='block w-full pt-2 px-3 pb-3 text-gray-700 border border-blue-300 rounded-lg bg-white focus:outline-none focus:border-blue-500'
          value={nodeName}
          onChange={handleInputChange}
        />
      </>
      {/* {selectedNode ? (
        //settings panel
        <div>
          <h3 className='text-xl mb-2 text-blue-900'>Update Node</h3>
          <label className='block mb-2 text-sm font-medium text-blue-900'>
            Node Name:
          </label>
          <input
            type='text'
            className='block w-full pt-2 px-3 pb-3 text-gray-700 border border-blue-300 rounded-lg bg-white focus:outline-none focus:border-blue-500'
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className='mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-600'
            onClick={() => setSelectedElements([])}
          >
            Go Back
          </button>
        </div>
      ) : (
        //node panel
        <>
          <div
            className='bg-white p-3 border-2  rounded cursor-move flex justify-center items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-200'
            onDragStart={(event) => onDragStart(event, 'textnode')}
            draggable
          >
            + New Entity
          </div>
        </>
      )} */}
    </aside>
  );
}
