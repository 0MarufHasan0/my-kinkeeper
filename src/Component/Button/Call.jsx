"use client"

import React, { useContext } from 'react';
import { VscCallOutgoing } from 'react-icons/vsc';
import { CallContext } from '../Context/Globalcontext';

const Call = ({expactedFriend}) => {
    const {call , setCall} = useContext(CallContext)
    const handleCall = ()=> {

        // data
         const callData = {
        name: expactedFriend.name,
        type: "Call",
        time: new Date().toLocaleTimeString()
    };
        setCall([...call , callData])

        console.log("Added:", callData);
    }
    
    return (
        <div>
            <button onClick={handleCall} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> <VscCallOutgoing /> Call</button>
        </div>
    );
};

export default Call;