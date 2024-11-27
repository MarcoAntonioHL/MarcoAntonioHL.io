import React, { useState } from 'react'
import Lineadetiempo from './components/lineaTiempo'
import styles from './index.module.css'

const proyectos=[
  {
    imagen:'imagen1',
    descripcion:'descripcion 1',
  },
  {
    imagen:'imagen 2',
    descripcion:'descripcion2',
  }

]
export default function Proyects() {
  //marcamos la posicion de imagen dereca o imagen izquierda
  const [estilo,setStilo]=useState(0)
  return (
    <>
    <h2 className={styles.titulo}>Proyectos</h2>
    <div className={styles.Contenedor}>
      <Lineadetiempo></Lineadetiempo>
      <section className={styles.SeccionDerecha}>
        {proyectos.map((item,index)=>(index%2===0?
        <>
        <div className={styles.cartImagen}>
          {item.imagen}
        </div>
        <div className={styles.Descripcion}>
          {item.descripcion}
        </div>
        </>: <>
        <div className={styles.Descripcion}>
          {item.descripcion}
        </div>
        <div className={styles.cartImagen}>
          {item.imagen}
        </div>
        </>
        )
        )}
        
        
      </section>
    </div>
    </>
    
  )
}
