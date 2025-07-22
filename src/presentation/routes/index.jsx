import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Proyects from "../../components/Proyectos";
import Contact from "../../components/Contacto";

const Ruta=()=>{
    return(
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<h1>hola</h1>}/>
                <Route path='/Proyect' element={<Proyects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Ruta;