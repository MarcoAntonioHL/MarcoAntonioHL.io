import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './menuPortada.module.css'

export default function MenuPortada() {
  return (
    <>
    <nav className={styles.portadaMenu}>
    
        <li>
            <Link to='/About'className={styles.Link}>Acerca de mi</Link>
        </li>
        <li>
            <Link to='/Proyects'className={styles.Link}>Proyectos</Link>
        </li>
        <li>
            <Link to='/Contact'className={styles.Link}>Contacto</Link>
        </li>
    
    </nav>
    <Outlet/>
    </>
  )
}
