
"use client"
import React, { useContext } from 'react';
import { IoIosVideocam } from 'react-icons/io';
import { CallContext } from '../Context/Globalcontext';

const VideoCall = ({expactedFriend}) => {
        const {call , setCall} = useContext(CallContext)
        const handleCall = ()=> {
    
            // data
             const callData = {
            name: expactedFriend.name,
            type: "Video Call",
            time: new Date().toLocaleTimeString()
        };
            setCall([...call , callData])
    
            console.log("Added:", callData);
        }
    // console.log('friend' ,expactedFriend)
    return (
        <div>
             <button onClick={handleCall} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><IoIosVideocam />Video</button>
        </div>
    );
};

export default VideoCall;