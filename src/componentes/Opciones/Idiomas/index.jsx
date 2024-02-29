import React from 'react'
import styles from './idiomas.module.css'
import styled from 'styled-components'

const ImagenIdioma=styled.img`
  width: 20%;
  height:50px;
  
`
const Descripcion=styled.div`
  width: 50%;
  margin: 2%;
  background-color: rgba(87, 115, 122, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  

`
const listaIdiomas=[
  {
    idioma:'Español',
    nivel:'nativo',
    certificado:false,
    descripcion:'writing'
  },
  {
    idioma:'Ingles',
    nivel:'intermedio',
    certificado:true,
    descripcion:''
  },
  
]
export default function Idiomas() {
  return (
    <div className={styles.bloqueIdiomas} id='Idiomas'>
      <h3 className={styles.titulo}>Idioma</h3>
          {
          listaIdiomas.map((items,index)=>(
            <div key={index} className={styles.card}>
              <ImagenIdioma >
              </ImagenIdioma>
              <Descripcion > 
                <h3>{items.idioma}</h3>
                <h4>{items.nivel}</h4>
                <h5>{items.descripcion}</h5>
              </Descripcion>
            </div>
          ))
          }

    </div>
     
    
  )
}
