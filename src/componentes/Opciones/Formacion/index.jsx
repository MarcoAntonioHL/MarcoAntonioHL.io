import React from 'react'
import styles from'./formacion.module.css'
import { Personaje } from '../AnimacionImagenes'
const listaformacion=[
  {
    materia:'Ingenieria Informatica y de sistemas',
    lugar:'Universidad Nacional San Antonio Abad del Cusco'
  },
  {
    materia:'Centro de idiomas',
    lugar:'Universidad Nacional San Antonio Abad del Cusco'
  },
]

export default function Formacion() {
  return (
    <div className={styles.bloqueFormacion} id='Formacion'>
      <h3 className={styles.titulo}>Formacion</h3>
      <div className={styles.formacionBody}>
        <div className={styles.card}>
        {/*listaformacion.map((item,index)=>(
          <p key={index}>{item.materia}<br/>{item.lugar}</p>
        ))*/
        }
          <div>
            <h4>Ingenieria Informatica y de sistemas</h4>
            <p>Universidad Nacional San Antonio Abad del Cusco</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h4>Idiomas</h4>
            <p>{"(CID)"} Universidad Nacional San Antonio Abad del Cusco</p>
            <div className={styles.idiomas}>
              <div>
                <img src="./eeuu.png" alt="flag" style={{width:"50px"}} />
                <p style={{fontSize:"15px",margin:"0"}}>Ingles</p>
              </div>
              <div>
                <p>Nivel Intermedio</p>

              </div>
            </div>
          </div>
        </div>
        <div className={styles.personaje}>
          <Personaje/>
        </div>
      </div>
      
    </div>
  )
}
