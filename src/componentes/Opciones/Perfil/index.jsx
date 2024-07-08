import React from 'react'
import styles from './perfil.module.css'

export default function Perfil() {
  return (
    <>
      <div id='Perfil' className={styles.cardPerfil}>
        <h3 className={styles.titulo}>Perfil</h3>
        <div className={styles.card}>
          <p>Soy Bachiller en ingenieria informatica y de sistemas, autodidacta con capacidades interpersonales para el trabajo en equipo, solución de problemas 
            y buen manejo de palabras, abierto a obtener nuevos conocimientos y habilidades e innovar en el área de la tecnología. 
          </p>
        </div>
      </div>
    </>
  )
}
