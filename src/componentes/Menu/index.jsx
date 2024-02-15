import React, { useContext, useEffect } from 'react'
import {DataContext} from '../../layout/contextMenuGuia'
import styles from './menu.module.css'

const listaVista=[
    {
        name:"Presentacion"
    },
    {
        
        name:"Perfil"
    },
    /*{
       
        name:"Datos"
    },*/
    {

        name:"Formacion"
    },
    {
        
        name:"Experiencia"
    },
    {
       
        name:"Idiomas"
    },
    {
       
        name:"Intereces"
    }

]

export default function Menu({children}) {

    const {posicion,setPosicion}=DataContext()
    
    const select=(event)=>{
        setPosicion(event.target.innerHTML)
        
    }
    
  return (
    <>
    <nav className={styles.menu}>
        {
            listaVista.map((objeto,index)=>(
                <li key={index} className={styles.items}>
                    <a href={`#${objeto.name}`} onClick={select} className={styles.nombreItems}>{objeto.name}</a>
                </li>
            ))
        }
    </nav>
    {children}
    </>
  )
}
