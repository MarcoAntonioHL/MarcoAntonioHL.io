import React from 'react'
import styles from './presentacion.module.css'
import Fondo from './fondo'
import Menu from '../Menu'
import styled from 'styled-components'
import { Personaje } from '../Opciones/AnimacionImagenes'

const ImagenPersonal=styled.img 

export default function Presentacion() {
  return (
    
    <div className={styles.bloquePresentacion} id="Presentacion">
        <div className={styles.presentacionNombre}>
            <h1>Marco Antonio Huaman Lonconi<br/></h1>
            <h5>Hola! Conoce mas sobre mí {">>>"} </h5>
        </div>
        <div className={styles.imagenPersonaje}>
          {/*<img className={styles.imagenPresentacion} src="./imagenesInportadas/imagen.svg" alt="" />*/}
          
          <Personaje></Personaje>
        </div>

    </div>
    
  )
}
