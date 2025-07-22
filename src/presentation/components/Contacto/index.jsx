import styles from "./contacto.module.css"
import RedesSocialesModule from '../../layout/redesSociales';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sentEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_rxexnfw', 'template_y9fc46n', e.target, 'Uc9vpjgPEF62roYTw')
      .then((result) => {
          alert("Mensaje enviado correctamente.");
          console.log(result.text);
      }, (error) => {
          alert("Hubo un error al enviar el mensaje.");
          console.log(error.text);
      });
    e.target.reset();
    alert("Mensaje enviado correctamente");
  }
  return (
    <div className={styles.ContenedorContactos} id='Contact'>
      <div>
        <h2 className={styles.tituloContactos}>Contactame</h2>
      </div>
      <div className={styles.bodyContactos}>
        <div className={styles.imagen}>
          <img src={`${import.meta.env.BASE_URL}imagenesInportadas/perfil2.svg`} alt="imagen"/>
        </div>
      </div>
      <div className={styles.formularioContactos}>
        <div className={styles.redesSociales}>
          <RedesSocialesModule/>
        </div>
        <form className={styles.formulario} onSubmit={sentEmail}>
          <input type="text" placeholder="Tu Nombre" name="name" required/>
          <input type="email" placeholder="Tu Email @example.com" name="email" required/>
          <input type="number" placeholder="Tu celular (opcional)" />
          <textarea name="message" placeholder="Mensaje" required></textarea>
        
          <button className={styles.botonEnviar} type="submit">Enviar correo</button>
        </form>
      </div>

    </div>
  )
}
