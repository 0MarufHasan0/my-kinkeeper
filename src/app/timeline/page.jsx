"use client"

import { CallContext } from '@/Component/Context/Globalcontext';
import React, { useContext } from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { MdOutlineVideoCall, MdTextsms } from 'react-icons/md';


const Timeline = () => {
    const {call} =useContext(CallContext)

    return (
        <div>
         <h1 className='text-2xl text-[##244D3F] mb-20 text-bold'>Timeline</h1>
         <div >
{call.map((item, index) => {

  const getIcon = () => {
    if (item.type === "Call") return <IoCallSharp />;
    if (item.type === "Text") return <MdTextsms/>;
    return <MdOutlineVideoCall />;
  };

  const getTitle = () => {
    if (item.type === "Call") return `Call with ${item.name}`;
    if (item.type === "Text") return `Text with ${item.name}`;
    return `Video Call with ${item.name}`;
  };

  return (
    <div 
      key={index}
      className="flex items-center gap-3 p-3  border-b"
    >
      <div className="text-xl">
        {getIcon()}
      </div>

      <div>
        <p className="font-medium">{getTitle()}</p>
        <p className="text-sm text-gray-500">{item.time}</p>
      </div>

    </div>
  );
})}
         </div>
        </div>
    );
};

export default Timeline;