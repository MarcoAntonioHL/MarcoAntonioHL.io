import Opciones from './presentation/components/Opciones'
import Portada from './presentation/components/Portada'
import { Route, Routes } from 'react-router-dom'
import Proyects from './presentation/components/Proyectos'
import Contact from './presentation/components/Contacto'
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
      <Route path='/' element={<Portada/>}>
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
