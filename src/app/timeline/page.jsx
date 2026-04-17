"use client"

import { CallContext } from '@/Component/Context/Globalcontext';
import React, { useContext } from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { MdOutlineVideoCall, MdTextsms } from 'react-icons/md';


const Timeline = () => {
    const {call , filter,setFilter} =useContext(CallContext)

    // Short filter 

    const  filtered = filter === "All" ? call : call.filter(item => item.type === filter)



    return (
<>
{/* Filter dropdown */}
    <div className='container flex justify-start mx-2  md:justify-center md:mx-50 my-5'>
        <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

    <li onClick={()=> setFilter("All")}><a>All</a></li>
    <li onClick={()=> setFilter("Call")}><a><IoCallSharp /> Call</a></li>
    <li onClick={()=> setFilter("Text")}><a><MdTextsms /> Text</a></li>
    <li onClick={()=> setFilter("Video Call")}><a><MdOutlineVideoCall /> Video Call</a></li>
  </ul>

</div>
     
    </div>
        <div>

         <h1 className='text-2xl text-[##244D3F] mb-5 text-bold'>Timeline</h1>
         <div >
{filtered.map((item, index) => {

  const getIcon = () => {
    if (item.type === "Call") 
      return <IoCallSharp />;
    if (item.type === "Text")
       return <MdTextsms/>;
    else{
      return <MdOutlineVideoCall />;
    }
   
  };

  const getTitle = () => {
    if (item.type === "Call")
       return `Call with ${item.name}`;
    if (item.type === "Text")
       return `Text with ${item.name}`;
    else{
       return `Video Call with ${item.name}`;
    }
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
        </>
    );
};

export default Timeline;