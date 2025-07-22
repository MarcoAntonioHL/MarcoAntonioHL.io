import React from 'react'
import styles from './fondo.module.css'

export default function Fondo({children}) {
  return (
    <>
    <div className={styles.fondo}>
        <img src="../../../public/imagenesInportadas/balon1.png" className={styles.star}></img>
        <img src="../../../public/imagenesInportadas/balon2.png" className={styles.star2}></img>
        <img src="../../../public/imagenesInportadas/balon1.png" className={styles.star}></img>
        <img src="../../../public/imagenesInportadas/balon1.png" className={styles.star}></img>
        <img src="../../../public/imagenesInportadas/balon1.png" className={styles.star}></img>
        <img src="../../../public/imagenesInportadas/balon1.png" className={styles.star}></img>
    </div>
    
      {children}
        
    </>
  )
}
