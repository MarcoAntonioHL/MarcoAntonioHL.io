import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './menuPortada.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import styled from 'styled-components';
export default function MenuPortada() {

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
          
          <img src="./list.svg" alt="" className={styles.imgSandwich} onClick={dropdownOpen} />
          {/*<MdOutlineMenuOpen className={styles.barras} onClick={dropdownOpen}/> */}
          <div  className={`${click? styles.itemsMenuActive:styles.itemsSandwich}`}> 
              <li>
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
              </li>
            </div>
          </>
          :
            <div  className={`${click? styles.itemsMenu:styles.itemsMenuActive}`}> 
              <li>
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
              </li>
            </div>
          
        }
      </nav>
    </div>
    <Outlet/>
    </>
  )
}
