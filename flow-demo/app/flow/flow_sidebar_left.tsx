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
    </aside>
  );
}
