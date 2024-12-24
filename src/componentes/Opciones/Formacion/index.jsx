import React from 'react'
import styles from'./formacion.module.css'
import { Personaje } from '../AnimacionImagenes'
const listaformacion=[
  {
    materia:'Ingenieria Informatica y de sistemas',
    lugar:'Universidad Nacional San Antonio Abad del Cusco'
  },
  {
    materia:'Centro de idiomas',
    lugar:'Universidad Nacional San Antonio Abad del Cusco'
  },
]

export default function Formacion() {
  return (
    <div className={styles.bloqueFormacion} id='Formacion'>
      <h3 className={styles.titulo}>Formacion</h3>
      <div className={styles.card}>
      {listaformacion.map((item,index)=>(
        <p key={index}>{item.materia}<br/>{item.lugar}</p>
      ))
      }
      </div>
      <div>
        <Personaje/>
      </div>
    </div>
  )
}
