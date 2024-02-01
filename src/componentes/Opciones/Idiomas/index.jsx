import React from 'react'
import styles from './idiomas.module.css'

const listaIdiomas=[
  {
    idioma:'Español',
    nivel:'nativo',
    certificado:false,
    descripcion:''
  },
  {
    idioma:'Ingles',
    nivel:'intermedio',
    certificado:true,
    descripcion:''
  },
  
]
export default function Idiomas() {
  return (
    <div className={styles.bloqueIdiomas} id='Idiomas'>
      <div className={styles.card}>
      {
      listaIdiomas.map((items,index)=>(
        <div key={index}> 
          <h2>{items.idioma}</h2>
          <h3>{items.nivel}</h3>
          <h3>{items.descripcion}</h3>
        </div>
      ))
    }
    </div>
    </div>
     
    
  )
}
