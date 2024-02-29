import React from 'react'
import styled from 'styled-components'
import { FaGithub,FaInstagram,FaFacebook,FaWhatsapp  } from "react-icons/fa";

const Contenedor=styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: 50% 30% 20%;
    //grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
    align-items: center;
    justify-content: center;
    @media(max-width: 600px){
      grid-template-columns: 50% 50%;
    }
    @media (max-width:350px) {
      grid-template-columns: 100%;
    }

`
const Nombre=styled.h1`
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
  font-family: Georgia, 'Times New Roman', Times, serif;
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
    
    width: 200px;
    height: 300;
`
const RedesSociales=styled.li`
    list-style: none;
    @media (max-width:350px) {
      display: flex;
      flex-wrap: wrap;
    }
`
const Items=styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 1;

`
const ReferenciaRedSocial=styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NombreRedSocial=styled.h5`
  margin: 5%;
  color: rgba(255,255,255,0.30);
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
  }
]
export default function Portada() {
  return (
    <Contenedor>
      <div>
        <Nombre>Marco Antonio Huaman Lonconi </Nombre>
        <SubNombre>Developer junior</SubNombre>
      </div>
      <ImagenPersonal src="MarcoAntonioHL.io/public/imagenesInportadas/perfil.png" alt="imagen"></ImagenPersonal>
      <RedesSociales>
        {
          enlaces.map((items,index)=>(
            <Items key={index}>
              <ReferenciaRedSocial href={items.referencia}><items.logo/></ReferenciaRedSocial>
              <NombreRedSocial>{items.name}</NombreRedSocial>
            </Items>
          ))
        }
        <a href=""></a>
      </RedesSociales>
    </Contenedor>
  )
}
