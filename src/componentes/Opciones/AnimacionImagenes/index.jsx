import React from "react";
import styles from "./animacion.module.css"

export const Personaje=()=>
{
    return(
        <>
            <img className={styles.grafo} src={`${import.meta.env.BASE_URL}grafo.png`} alt="" />
           
        </>
    )
}