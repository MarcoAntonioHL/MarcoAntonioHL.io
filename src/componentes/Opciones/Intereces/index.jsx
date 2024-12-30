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

const Hobbies=[{disiplina:"Football",link:"pngFutbol.png"}
  ,{ disiplina:"BasketBall",link:"pngbasket.png"}
  ,{disiplina:"Musica",link:"pngMusica.png"}
  ,{disiplina:"Lectura",link:"pnglibro.png"}
]
export default function Intereces() {
  return (
    <div className={styles.bloqueIntereces} id='Hobbies'>
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
      <div className={styles.contenedor}>
        <h3 className={styles.tituloHobbies}>Hobbies</h3>
        {
          Hobbies.map((items,index)=>(
            <div key={index} className={styles.targeta}>
              <div className={styles.imgHobbiesContenedor}>
                <img src={`./${items.link}`} alt="" 
                   className={styles.imgHobbies}
                />
              </div>
              {items.disiplina}
            </div>
          ))
        }
        <p>Me gusta participar de actividades deportivas y/o reacreativas 
          que ayudan a mi desarrollo personal.
        </p>
      </div>
      
    </div>

  )
}
