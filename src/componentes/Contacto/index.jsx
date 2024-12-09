import React from 'react'
import styles from "./contacto.module.css"
import { FaInstagram,FaFacebook,FaGithub,FaWhatsapp,FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
const enlaces=[
  {
    logo:FaFacebook,
    name:'Facebook',
    referencia:'https://web.facebook.com/marcoantonio.huamanlonconi/',
  },
  {
    logo:FaInstagram,
    name:'Instagram',
    referencia:'https://www.instagram.com/marcohlantonio/',
  },
  {
    logo:FaGithub,
    name:'Github',
    referencia:'https://github.com/MarcoAntonioHL',
  },
  {
    logo:FaWhatsapp,
    name:'whatsaap',
    referencia:'https://wa.me/928751897/?text=urlencodedtext',
  },
  {
    logo:FaLinkedin,
    name:'Linkedin',
    referencia:'https://www.linkedin.com/in/marco-antonio-huaman-lonconi-2a31a7270/',
  },
  {
    logo:MdEmail,
    name:'Correo',
    referencia:'marco.hl9antonio@gmail.com',
  }
]

export default function Contact() {
  return (
    <div className={styles.ContenedorContactos}>
      <div>
        <h2 className={styles.tituloContactos}>Contactame</h2>
      </div>
      <div className={styles.bodyContactos}>
        <div className={styles.imagen}>
          <img src="./imagenesInportadas/perfil2.svg" alt="imagen"/>
        </div>
        <div className={styles.contenedorCards}>
          {
            enlaces.map((item,index)=>
              <div className={styles.cardContactos} key={index}>
                <div className={styles.cardLogo}>
                    <a href={item.referencia}><item.logo className={styles.customLogo}/></a>
                </div>
                <div className={styles.cardDescripcion}>
                    <a href={item.referencia}>{item.name}</a>
                </div>
              </div>
            )
          }
        </div>
        
        {/*<div className={styles.contenedorMensaje}>
          <input input type='text' placeholder="ingrese mensaje"className={styles.texto} ></input>
        </div>
        <div className={styles.button}>
         <input type='button' value="Enviar"></input>
        </div>*/}
        
      </div>
    </div>
    
  )
}
