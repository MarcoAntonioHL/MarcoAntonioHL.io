import React, { useContext, useEffect } from 'react'
import {DataContext} from '../../layout/contextMenuGuia'
import styles from './menu.module.css'

const listaVista=[
    {
        pos:0,
        name:"Presentacion"
    },
    {
        pos:1,
        name:"Perfil"
    },
    {
        pos:2,
        name:"Datos"
    },
    {
        pos:3,
        name:"Formacion"
    },
    {
        pos:4,
        name:"Experiencia"
    },
    {
        pos:5,
        name:"Idiomas"
    },
    {
        pos:6,
        name:"Intereces"
    }

]

export default function Menu() {

    const {posicion,setPosicion}=DataContext()
    
    const select=(event)=>{
        setPosicion(event.target.innerHTML)
        
    }
    
  return (
    <nav className={styles.menu}>
        {
            listaVista.map((objeto,index)=>(
                <li key={index}>
                    <a href={`#${objeto.name}`} onClick={select}>{objeto.name}</a>
                </li>
            ))
        }
    </nav>
  )
}
