import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import './handleStyle.module.css';
import FlowCard from './flow_card';

//custome node
export default function FlowTextNode({ data, selected }) {
  console.log('my children value', data);
  return (
    <>
      <div className={`shadow-md rounded-md bg-white`}>
        <div className='text-xs font-normal text-black'>
          <FlowCard selected={selected} title={data.label} list={data.list} />
        </div>

        <Handle
          id='a'
          type='target'
          position={Position.Left}
          className='rounded-full flow__handle'
        />
        <Handle
          id='b'
          type='source'
          position={Position.Right}
          className='rounded-full flow__handle'
        />
      </div>
    </>
  );
}
