import React, { useContext, useEffect } from 'react'
import {DataContext} from '../../layout/contextMenuGuia'
import styles from './menu.module.css'

export default function Menu({children}) {
    const listaVista=[
        {
            name:"Presentacion"
        },
        {
            name:"Perfil"
        },
        {
            name:"Formacion"
        },
        {
            name:"Experiencia"
        },
        /*{
            name:"Idiomas"
        },*/
        {
            name:"Hobbies"
        }
    ]
    const {posicion,setPosicion}=DataContext()
    
    const select=(event)=>{
        setPosicion(event.target.innerHTML)
        
    }
    
  return (
    <>
    <nav className={styles.menu}>
        {
            listaVista.map((objeto,index)=>(
                <a key={index} href={`#${objeto.name}`} onClick={select} className={styles.items}>
                    <li  className={styles.nombreItems}>
                        {objeto.name}
                    </li>
                </a>
            ))
        }
    </nav>
    {children}
    </>
  )
}
