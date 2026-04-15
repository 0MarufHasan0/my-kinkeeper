"use client"

import GlobalContextProvider from '@/Component/Context/Globalcontext';
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <GlobalContextProvider>

                {children}

            </GlobalContextProvider>
            
        </div>
    );
};

export default Providers;