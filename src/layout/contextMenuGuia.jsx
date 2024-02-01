import React, { createContext, useContext, useEffect, useState } from "react";

const DatosContext=createContext()

const ContextMenuGuia=({children})=>{
    const[posicion,setPosicion]=useState("")
    console.log("esta es la posicion",posicion)
    
    return(
        <DatosContext.Provider value={{posicion,setPosicion}}>
            {children}
        </DatosContext.Provider>
    )
}
export default ContextMenuGuia;
export const DataContext=()=>{
    return useContext(DatosContext)
}