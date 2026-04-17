"use client"

import { createContext, useState } from "react";

export const CallContext= createContext()

const GlobalContextProvider = ({children}) => {

    const [call , setCall] = useState([])
    const [filter , setFilter] = useState("All")    
    const data ={
        call,
        setCall,
        filter,
        setFilter
    }

    return (
       <CallContext.Provider value={data}>

        {children}

       </CallContext.Provider>
    );
};

export default GlobalContextProvider;