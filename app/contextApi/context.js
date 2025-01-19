"use client"
import { createContext, useState } from "react";

export const BioContext = createContext();

export const BioProvider = ({children})=>{
    const [toggle, setToggle] = useState(false)
    
    return (
        <BioContext.Provider value={{toggle, setToggle}}>
            {children}
        </BioContext.Provider>
    )
}