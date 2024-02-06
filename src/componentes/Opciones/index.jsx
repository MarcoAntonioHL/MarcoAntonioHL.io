import React from 'react'
import Datos from './Datos'
import Experiencia from './Experiencia'
import Formacion from './Formacion'
import Idiomas from './Idiomas'
import Intereces from './Intereces'
import Perfil from './Perfil'
import styles from './menu.module.css'
import Presentacion from '../Presentacion'
import Guia from '../personaje'
import ContextMenuGuia from '../../layout/contextMenuGuia'
import Menu from '../Menu'

export default function Opciones() {
    
  return (
    <ContextMenuGuia>
      <Menu>
        <Guia>
            <div className={styles.bloquePadre}>
                <Presentacion></Presentacion>
                <Perfil></Perfil>
                <Datos></Datos>
                <Formacion></Formacion>
                <Experiencia></Experiencia>
                <Idiomas></Idiomas>
                <Intereces></Intereces>
            </div>
        </Guia>
      </Menu>
    </ContextMenuGuia>
  )
}
