import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaInstagram,FaFacebook,FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { ButtonSimple } from '../../utils';
import Opciones from '../Opciones';
import Proyects from '../Proyectos';
import Contact from '../Contacto';
import StackTecnologico from '../StackTecnologico';
import MenuPortada from '../MenuPortada';
import ContextMenuGuia from '../../layout/contextMenuGuia';
const Contenedor=styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 30% 20%;
    /*grid-template-columns: repeat(auto-fill,minmax(300px,1fr));*/
    align-items: flex-start;
    @media(max-width: 600px){
      grid-template-columns: 100% ;
      
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
   
`
const RedesSociales=styled.li`
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
const CustomNombreRedSocial=styled.h5`
  
  :hover{
    color: #B37729;
  }
`
const LogoCustom=styled.div`
  color:white;
  &:hover{
    color:#B37729;
    transform:scale(1.5)
  }
`
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
export default function Portada() {
  let subnombre="<./>"
  return (
    <ContextMenuGuia>
      <MenuPortada>
        
        <Contenedor>
          <div id='Inicio'>
            <Nombre>Marco Antonio Huaman Lonconi </Nombre>
            <SubNombre>Developer {subnombre}</SubNombre>
          </div>
          <ImagenPersonal src={`./imagenesInportadas/perfil2.svg`} alt="imagen"></ImagenPersonal>
          <RedesSociales>
            {
              enlaces.map((items,index)=>(
                <Items key={index}>
                  <SubItem>
                    <ReferenciaRedSocial href={items.referencia}><LogoCustom ><items.logo/></LogoCustom></ReferenciaRedSocial>
                  </SubItem>
                  <CajaNombre>
                    <NombreRedSocial href={items.referencia}>{items.name}</NombreRedSocial>
                  </CajaNombre> 
                </Items>
              ))
            }
          </RedesSociales>
        </Contenedor>
        
        <Opciones></Opciones>
        <StackTecnologico></StackTecnologico>
        <Proyects></Proyects>
        <Contact></Contact>
        
      </MenuPortada>
    </ContextMenuGuia>
  )
}
