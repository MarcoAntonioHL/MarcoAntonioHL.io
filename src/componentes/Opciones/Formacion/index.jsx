import React from 'react'
import styles from'./formacion.module.css'
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
      <div className={styles.card}>
      <h3>Formacion</h3>
      {listaformacion.map((item,index)=>(
        <p key={index}>{item.materia}<br/>{item.lugar}</p>
      ))
      }
      </div>
    </div>
  )
}
