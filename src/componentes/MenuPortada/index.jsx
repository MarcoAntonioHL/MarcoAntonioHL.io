import React, { useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './menuPortada.module.css'
import { MdOutlineMenuOpen } from "react-icons/md";
import styled from 'styled-components';
export default function MenuPortada() {
  const refMenu=useRef()
  
  const [click,setClick]=useState(false)
  const dropdownOpen=()=>{
    setClick(!click)
      //refMenu.current.style.display='none'
  }
  
  return (
    <>
    <nav className={styles.portadaMenu}>
      
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
        <MdOutlineMenuOpen className={styles.barras} onClick={dropdownOpen}/>
    </nav>
    <Outlet/>
    </>
  )
}
