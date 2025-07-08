import React from 'react'
import styles from './experiencia.module.css'
const historial=[
  {
    fechaInicio:'febrero 2022',
    fechaFin:'abril 2022',
    tipoContrato:'Pasantia',
    company:'Gerencia Regional de educacion del cusco (GEREDU)',
    description:'Colaborador en soporte técnico de computadoras'
  },
  {
    fechaInicio:'mayo 2023',
    fechaFin:'octubre 2023',
    tipoContrato:'Contrato de practicas pre-profesionales',
    company:'Corporacion Juñuy S.A.C',
    description:'Programador web, trabajo en equipo desarrollando módulos, CRUDS frond-end utilizando React 18.2, MUI v5. Y herramientas como Git, GitHub, Postman .'
  },
  {
    fechaInicio:'marzo 2024',
    fechaFin:'Febrero 2025',
    tipoContrato:'Contrato de practicas profesionales',
    company:'Electro Sur Este S.A.A',
    description:'Empresa de comercialización de energía eléctrica en la cual desarrollé módulos web, mantenimiento de módulos de escritorio del sistema SIELSE administrativo en .Net Framework 4.8. -Utilizando herramientas Front-end como React 18.2, TypeScript 5.4, Bootstrap 5.3 y herramientas Back-end como ASP.Net core API ,SQLserver, Git, GitHub, Swagger, Postman. '

  },
  {
    fechaInicio:'marzo 2025',
    fechaFin:'julio 2025',
    tipoContrato:'RRHH',
    company:'Q-Total S.A.C',
    description:'Empresa consultora en gestión por procesos. Participé en la elaboración y/o automatización de procesos, siguiendo la metodología AS-IS, TO-BE y TO-DO, utilizando herramientas BPMN Bizagi, Camunda'

  },
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
       
      </div>
    </div>
  )
}
