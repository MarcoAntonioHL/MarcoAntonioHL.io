import React from 'react'
import styles from "./contacto.module.css"
export default function Contact() {
  return (
    <>
      <div>Contactame</div>
      <input input type='text' placeholder="ingrese mensaje"></input>
      <input type='button' value="Enviar" className="btn btn-primary" ></input>
    </>
    
  )
}
