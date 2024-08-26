import React from 'react'
import styles from './presentacion.module.css'
import Fondo from './fondo'
import Menu from '../Menu'
import styled from 'styled-components'

const ImagenPersonal=styled.img 

export default function Presentacion() {
  return (
    
    <div className={styles.bloquePresentacion} id='Presentacion'>
        <div className={styles.presentacionNombre}>
            <h1>Marco Antonio Huaman Lonconi<br/></h1>
            <h5>Desarrollador</h5>
        </div>
        <div>
          <img className={styles.imagenPresentacion} src="MarcoAntonioHL.io/public/imagenesInportadas/imagen.svg" alt="" />
        </div>

    </div>
    
  )
}
