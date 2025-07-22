import styled from "styled-components";
import { FaGithub,FaInstagram,FaFacebook,FaWhatsapp, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

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
const LogoCustom=styled.div`
  color:white;
  &:hover{
    color:#B37729;
    transform:scale(1.5)
  }
`
const NombreRedSocial=styled.a`

  margin: 1%;
  color: rgba(255,255,255,0.30);
  text-decoration: none;

`
const CajaNombre=styled.div`
  width:100%;
  & :hover{
    color: #B37729 ;
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
const RedesSocialesModule = () => {
  return (
  <div>
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
    </div>
  )
}
export default RedesSocialesModule;