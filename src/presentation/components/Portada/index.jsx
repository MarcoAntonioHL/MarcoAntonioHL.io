import styled from 'styled-components'
import { FaGithub,FaInstagram,FaFacebook,FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import Opciones from '../Opciones';
import Proyects from '../Proyectos';
import Contact from '../Contacto';
import StackTecnologico from '../StackTecnologico';
import MenuPortada from '../MenuPortada';
import ContextMenuGuia from '../../layout/contextMenuGuia';
import styles from './portada.module.css';
import RedesSocialesModule from '../../layout/redesSociales';

const Contenedor=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 30% 20%;
    /*grid-template-columns: repeat(auto-fill,minmax(300px,1fr));*/
    @media(max-width: 600px){
      width: 100%;
      grid-template-columns:1fr;
    }

`
const Nombre=styled.h1`
    font-family: Helvetica,Georgia,'Times New Roman',arial, sans-serif;
    color:rgba(255,255,255,0.8);
    animation-name: nombre;
    animation-duration: 2s;
    position: relative;
    @keyframes nombre {
      0%{
        top: -8px;
        opacity: 0;
      }
      50%{
        top: -4px;
        opacity: 0;

      }
      100%{
        top: 0px;
      }
    }
`
const SubNombre=styled.h4`
  font-family: Helvetica,Georgia, 'Times New Roman', Times, sans-serif;
  color:rgba(255,255,255,0.8);
  animation-name: subnombre;
    animation-duration: 3s;
    position: relative;
    @keyframes subnombre {
      0%{
        left: -8px;
        opacity: 0;
      }
      50%{
        
        left: -4px;
        opacity: 0;

      }
      100%{
        left: 0px;
      }
    }
`
const ImagenPersonal=styled.img`

    width: 100%;
    height: 210px;
    display: flex;
    max-width: 100%;
   
`
const RedesSociales=styled.li`
    width: 100%;
    list-style: none;
    display:flex;
    flex-direction:column;
    align-items: center;

`
const Items=styled.div`

width: 50%;
    display:flex;
    flex-wrap:nowrap;
    align-items: center;
    
`
const SubItem=styled.div`

  width:20%;
  margin: 2px;
`
const ReferenciaRedSocial=styled.a`
 
  display: flex;
  align-items: center;
  justify-content: center;
`
const CajaNombre=styled.div`
  width:100%;
  & :hover{
    color: #B37729 ;
  }
`
const NombreRedSocial=styled.a`

  margin: 1%;
  color: rgba(255,255,255,0.30);
  text-decoration: none;

`
const LogoCustom=styled.div`
  color:white;
  &:hover{
    color:#B37729;
    transform:scale(1.5)
  }
`

const ButtonDescargaPDF=styled.button`
  width:30%;
  height: 40px;
  background-color: #B37729;
  color: white;
  border-radius: 10% 20% 20% 20%;
  &:hover{
    background-color: #b37729b2;
  }
  
`
export default function Portada() {
  let subnombre="<./>"
  let proyectos="+3";
  let experiencia="+1";
  let descripción=`Soy bachiller en Ingeniería Informática y de Sistemas, con un enfoque autodidacta y colaborativo.
   Me destaco por mi capacidad para adaptarme a nuevas tecnologías y resolver problemas con creatividad y criterio técnico.
  Tengo mayor experiencia desarrollando con React,.Net, pero también he trabajado en proyectos que involucran backend, bases de datos 
  y otras herramientas del ecosistema web. Siempre estoy abierto a aprender, mejorar y aportar valor a través de la tecnología`;
  return (
    <ContextMenuGuia>
      <MenuPortada>
        
        <Contenedor>
          <div id='Inicio'>
            <Nombre>Marco Antonio Huaman Lonconi </Nombre>
            <SubNombre>Developer {subnombre}</SubNombre>
            <a className={styles.download} href="https://drive.google.com/file/d/1qchg3Ym_3s9unSi0hl0EdjGsVzpa4yCB/view?usp=sharing" style={{textDecoration:"none"}}><ButtonDescargaPDF>Descargar CV .pdf</ButtonDescargaPDF></a>
            <p className={styles.descripcion}>{descripción}</p>
          </div>
          <ImagenPersonal src={`./imagenesInportadas/perfil2.svg`} alt="imagen"></ImagenPersonal>
          <div className={styles.marcadores}>
            <div name="marcadores">
              <h1>{proyectos}</h1>
              <p>Proyectos</p>
            </div>
            <div name="marcadores">
              <h1>{experiencia}</h1>
              <p>años de Experiencia</p>
            </div>
          </div>
          <RedesSocialesModule></RedesSocialesModule>
        </Contenedor>
        
        <Opciones></Opciones>
        <StackTecnologico></StackTecnologico>
        <Proyects></Proyects>
        <Contact></Contact>
        
      </MenuPortada>
    </ContextMenuGuia>
  )
}
