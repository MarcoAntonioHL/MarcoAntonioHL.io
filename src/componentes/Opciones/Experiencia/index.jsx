import React from 'react'
import Programacion from './programacion'
import styles from './experiencia.module.css'
const historial=[
  {
    fechaInicio:'mayo 2023',
    fechaFin:'octubre 2023',
    tipoContrato:'Contrato de practicas pre-profesionales',
    company:'Corporacion Juñuy S.A.C',
    description:'Trabajo en equipo de desarrollo frontend para garantizar el desarrollo de un proyecto web'
  }
]
export default function Experiencia() {
  return (
    <div className={styles.bloqueExperiencia} id='Experiencia'>
      <h2 className={styles.titulo}>Historial Laboral</h2>
      <div className={styles.subBloque}>
        {historial.map((items,index)=>(
          <div key={index} className={styles.card}> 
            <h3>{items.company}</h3>
            <p>{items.fechaInicio+'-'+items.fechaFin+'('+items.tipoContrato+')'}</p>
            <p>{items.description}</p>
          </div>
        ))}
        <Programacion></Programacion>
      </div>
    </div>
  )
}
