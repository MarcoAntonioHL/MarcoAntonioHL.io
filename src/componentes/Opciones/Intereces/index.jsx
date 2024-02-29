import React from 'react'
import styles from './intereces.module.css'
const voluntareado=[
  {
    description:'Miembro del grupo del circulo de estudios Wichaiman cusco',
  },
  {
    description:'Asistencia en conferencias:',
    subdescription:[
      {
        descripcion:'Cemtro de altos estudios de negocio y economia (CAENE)',
        date:'agosto 2022'
      },
      {
        descripcion:'Congreso internacional de ingenieria de sistemas',
        date:'Universidad de lima 2022'
      }
    ],
    
  }
]
export default function Intereces() {
  return (
    <div className={styles.bloqueIntereces} id='Intereces'>
      <h3 className={styles.titulo}>Voluntareado</h3>
      {
        voluntareado.map((items,index)=>(
          <div key={index} className={styles.descripcion} >
            <p>{items.description}</p>
            <div>{items.subdescription? 
            items.subdescription.map((subitem,subindex)=>(
              <p key={subindex}>{'-'+subitem.descripcion+subitem.date}</p>
            )):
            ''}</div>
          </div>
          )
      )}
    </div>

  )
}
