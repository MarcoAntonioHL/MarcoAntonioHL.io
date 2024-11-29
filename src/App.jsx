import { useEffect, useState } from 'react'

import styles from './App.module.css'
import Opciones from './componentes/Opciones'
import ContextMenuGuia from './layout/contextMenuGuia'
import Ruta from './routes'
import Menu from './componentes/Menu'
import Portada from './componentes/Portada'
import { Route, Routes } from 'react-router-dom'
import Proyects from './componentes/Proyectos'
import Contact from './componentes/Contacto'
import MenuPortada from './componentes/MenuPortada'
import "bootstrap"

function App() {
  /*useEffect(()=>{
    const hash=window.location.hash
    if(!hash || hash!=='#Presentacion'){
      window.location.replace('/#Presentacion')
    }
  },[])*/
  
  return (
    <Routes>
      <Route path='/' element={<MenuPortada/>}>
        <Route path='/' element={<Portada/>} />
        <Route path='/About' element={<Opciones/>} />
        <Route path='/Proyects' element={<Proyects/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/*' element={<Portada/>}/>
        
      </Route>

    </Routes>
  )
}

export default App
