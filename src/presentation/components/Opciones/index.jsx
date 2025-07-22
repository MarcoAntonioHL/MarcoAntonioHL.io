
import Experiencia from './Experiencia'
import Formacion from './Formacion'
import Intereces from './Intereces'
import Perfil from './Perfil'
import styles from './menu.module.css'
import Presentacion from '../Presentacion'
import ContextMenuGuia from '../../layout/contextMenuGuia'
import Menu from '../Menu'

export default function Opciones() {
    
  return (
    <ContextMenuGuia>
      <div className={styles.contenedorAcercaDeMi} id='About'>
      <Menu>
        <div className={styles.bloquePadre}>
                <Presentacion></Presentacion>
                <Perfil></Perfil>
                {/*<Datos></Datos>*/}
                <Formacion></Formacion>
                <Experiencia></Experiencia>
                {/*<Idiomas></Idiomas>*/}
                <Intereces></Intereces>
        </div>
        {/*<Guia>
            <div className={styles.bloquePadre}>
                <Presentacion></Presentacion>
                <Perfil></Perfil>
                {/*<Datos></Datos>}
                <Formacion></Formacion>
                <Experiencia></Experiencia>
                <Idiomas></Idiomas>
                <Intereces></Intereces>
            </div>
        </Guia>*/}
      </Menu>
      </div>
    </ContextMenuGuia>
  )
}
