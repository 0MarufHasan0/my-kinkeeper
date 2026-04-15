"use client"
import React, { useContext } from 'react';
import { MdTextsms } from 'react-icons/md';
import { CallContext } from '../Context/Globalcontext';

const Text = ({expactedFriend}) => {

        const {call , setCall} = useContext(CallContext)
        const handleCall = ()=> {
    
            // data
             const callData = {
            name: expactedFriend.name,
            type: "Text",
            time: new Date().toLocaleTimeString()
        };
            setCall([...call , callData])
    
            console.log("Added:", callData);
        }
    return (
        <div>
                        <button onClick={handleCall} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> <MdTextsms />Text</button>
        </div>
    );
};

export default Text;