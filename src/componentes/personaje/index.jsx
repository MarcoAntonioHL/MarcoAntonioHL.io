import React, { useEffect, useState } from 'react'
import styles from './Guia.module.css'
import ImagenGuia from './imagen'
import { DataContext } from '../../layout/contextMenuGuia'


export default function Guia({children}) {
  const {posicion,setPosicion}=DataContext()
  
  const listaIds=children.props.children
  const nombres=listaIds.map((items)=>items.type.name)

  //buscamos el nombre del contexto en la lista de nombres
  const indexNombre=(element)=> element===posicion;
  const posicionIndex=nombres.findIndex(indexNombre)//obtenemos el indice del nombre del contexto
  console.log("posicion actual",posicionIndex)
  const [ID,setID]=useState('')
  const [IDback,setIDback]=useState('')
  const [pos,setPos]=useState(0)
  //console.log("posicion POS:",pos)
  const haciaDelante=()=>{
    setPos(pos+1)
    setID(nombres[pos+1])
  }

  const haciaTras=()=>{
    setPos(pos-1)
    setIDback(nombres[pos-1])
    
  }
  useEffect(()=>{
    if(posicionIndex!=-1){
      setPos(posicionIndex)
    }
    else{
      setPos(pos)
    }
    
    setID(posicion)
    setIDback(nombres[pos-1])
    //console.log(nombres[posicionIndex])
  },[posicionIndex])

  return (
    <div className={styles.ContenedorGuia}>
      {pos>=0 && pos<nombres.length-1 ?<a href={`#${ID}`} onClick={haciaDelante}>
        <ImagenGuia></ImagenGuia>
      </a>:<a href={`#${ID}`} onClick={haciaDelante}>
      </a>
        }
      {pos>=1 ? <a href={`#${IDback}`} onClick={haciaTras} >
        <ImagenGuia direction='izquierda'></ImagenGuia>
      </a>
      :
      <a href={`#${IDback}`} onClick={haciaTras}>
      </a>}
      {children}
    </div>
  )
}
