import React, { useEffect, useRef, useState } from 'react'
import styles from './menuPortada.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
export default function MenuPortada({children}) {

  const [ancho,setAncho]=useState(window.innerWidth)

  const tamañoPantalla=()=>{
    setAncho(window.innerWidth)
  }
  const refMenu=useRef()
  
  const [click,setClick]=useState(false)
  const dropdownOpen=()=>{
    setClick(!click)
      //refMenu.current.style.display='none'
  }
  
  useEffect(
    ()=>
    {
      window.addEventListener("resize",tamañoPantalla)
      
      return ()=>{
        console.log("limpiado")
        window.removeEventListener("resize",tamañoPantalla)
      }
    }
  ,[ancho])


  return (
    <>
    <div className={styles.contenedorMenuPortada} >
      <nav className={`${click? styles.portadaMenu:styles.itemsMenuActive}`}>
        {
          ancho<600?
          <>
          
          <img src={`${import.meta.env.BASE_URL}list.svg`} alt="" className={styles.imgSandwich} onClick={dropdownOpen} />
          {/*<MdOutlineMenuOpen className={styles.barras} onClick={dropdownOpen}/> */}
          <div  className={`${click? styles.itemsMenuActive:styles.itemsSandwich}`}> 
              <li>
                  {/*<Link to='/'className={styles.Link}>Inicio</Link>*/}
                  <a href="#Inicio" className={styles.Link}>Inicio</a>
              </li>
              <li>
                  {/*<Link to='/About'className={styles.Link}>Acerca de mi</Link>*/}
                  <a href="#About" className={styles.Link}>Acerca de mi</a>
              
              </li>
              <li>
                  {/*<Link to='/Proyects'className={styles.Link}>Proyectos</Link>*/}
                  <a href="#Proyects" className={styles.Link}>Proyectos</a>
              
              </li>
              <li>
                  {/*<Link to='/Contact'className={styles.Link}>Contacto</Link>*/}
                  <a href="#Contact" className={styles.Link}>Contacto</a>
              
              </li>
            </div>
          </>
          :
            <div  className={`${click? styles.itemsMenu:styles.itemsMenuActive}`}> 
              {/*<li>
                  <Link to='/'className={styles.Link}>Inicio</Link>
              </li>
              <li>
                  <Link to='/About'className={styles.Link}>Acerca de mi</Link>
              </li>
              <li>
                  <Link to='/Proyects'className={styles.Link}>Proyectos</Link>
              </li>
              <li>
                  <Link to='/Contact'className={styles.Link}>Contacto</Link>
              </li>*/}
              
              <li>
                  {/*<Link to='/'className={styles.Link}>Inicio</Link>*/}
                  <a href="#Inicio" className={styles.Link}>Inicio</a>
              </li>
              <li>
                  {/*<Link to='/About'className={styles.Link}>Acerca de mi</Link>*/}
                  <a href="#About" className={styles.Link}>Acerca de mi</a>
              
              </li>
              <li>
                  {/*<Link to='/Proyects'className={styles.Link}>Proyectos</Link>*/}
                  <a href="#Proyects" className={styles.Link}>Proyectos</a>
              
              </li>
              <li>
                  {/*<Link to='/Contact'className={styles.Link}>Contacto</Link>*/}
                  <a href="#Contact" className={styles.Link}>Contacto</a>
              
              </li>
            </div>
          
        }
      </nav>
      {children}
    </div>
   
    </>
  )
}
