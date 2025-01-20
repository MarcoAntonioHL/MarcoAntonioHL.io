import React, { useState } from 'react'
import Lineadetiempo from './components/lineaTiempo'
import styles from './index.module.css'

const proyectos=[
  {
    imagen:['./portafolio1.png'],
    descripcion:'Portafolio personal desarrollado con React 18.2 , css.',
  },
  {
    imagen:['./cursosCapacitacion1.png','./cursosCapacitacion2.png'],
    descripcion:`Modulos CRUD para que cada trabajador de la empresa Electro Sur Este pueda ver
      la informacion de los cursos de capacitacion asignados y realisar la encuesta necesaria. Desarrollado en react 18.2
      , estilos Reactrap v8, Api .Net 6 y SqlServer para las consultas.` ,
  },
  {
    imagen:['API'],
    descripcion:`API de interoperatibidad para la comunicacion entre entidades 
    dministrativas publicas,aquellas relacionadas a la empresa Electro Sur Este. Esta se implemento con 
    el objetivo de consumir servicion SOAP, Desarrollado en ASP.Net utilizando una arquitectura DDD(domain driven-design)`
  }

]
export default function Proyects() {
  //marcamos la posicion de imagen dereca o imagen izquierda
  const [estilo,setStilo]=useState(0)
  return (
    <div className={styles.ContenedorProyectos} id='Proyects'>
    <h2 className={styles.titulo}>Proyectos</h2>
    <div className={styles.Contenedor}>
      <Lineadetiempo></Lineadetiempo>
      <section className={styles.SeccionDerecha}>
        {proyectos.map((item,index)=>(index%2===0?
        
          <div key={index} className={styles.cards}>
            <div className={styles.cardImagen}>
              {
                item.imagen.map(link=>
                  (
                    <img className={styles.preImagen} src={link} alt="img" />
                  )
                )
              }
            </div>
            <div className={styles.Descripcion}>
              {item.descripcion}
            </div>
          </div>
          : 
          <div key={index} className={styles.cards}>
            <div className={styles.Descripcion}>
              {item.descripcion}
            </div>
            <div className={styles.cardImagen}>
              {
                item.imagen.map(link=>
                  (
                    <img className={styles.preImagen} src={link} alt="img" />
                    
                  )
                )
              }
            </div>
          </div>
        )
        )}
      </section>
    </div>
    </div>
    
  )
}
