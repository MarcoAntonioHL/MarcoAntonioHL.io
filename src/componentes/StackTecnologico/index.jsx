import React from 'react'
import { SiTile } from 'react-icons/si'
import styled from 'styled-components'

const Card=styled.div`
    
    margin: 1%;
    border-radius: 3px;
`
const Titulo=styled.div`
  font-family:  Helvetica, Arial,sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
`
const ContenedorTecnologias=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const CardItem=styled.div`
  width:4em ;
  margin: 10px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const CarItemNombre=styled.h5`
  width: 100%;
  display: flex;
  justify-content: center;
`
const informacion=[
    {
        empresa:1,
        lenguajes:"Python, Material UI,Bootstrap, ",
        frameworks:"",
        BD:"",
        herramientas:"",
    }
]
export default function StackTecnologico() {
  return (
    <Card>
        <Titulo> <h2>Stack Tecnológico</h2></Titulo>
        <ContenedorTecnologias>
          <CardItem><img src={`./cshat2.svg`} alt="shart" /><CarItemNombre>c#</CarItemNombre></CardItem>
          <CardItem> <img src={`./reactsvg.svg`} alt="react" /><CarItemNombre>React</CarItemNombre></CardItem>
          <CardItem><img src={`./jssvg.svg`} alt="JS" /><CarItemNombre>JavaScript</CarItemNombre></CardItem>
          <CardItem><img src={`./css.svg`} alt="css" /><CarItemNombre>Css</CarItemNombre></CardItem>
          <CardItem><img src={`./htmlSvg.svg`} alt="html" /><CarItemNombre>Html</CarItemNombre></CardItem>
          <CardItem><img src={`./sqlsvg.svg`} alt="sql" /><CarItemNombre>SqlServer</CarItemNombre></CardItem>
          <CardItem><img src={`./git.svg`} alt="git" /><CarItemNombre>Git</CarItemNombre></CardItem>
          <CardItem><img src={`./github.svg`} alt="github" /><CarItemNombre>GitHub</CarItemNombre></CardItem>
          <CardItem><img src={`./netcore.svg`} alt="netcore" /><CarItemNombre>.Net</CarItemNombre></CardItem>
          <CardItem><img src={`./camunda-logo.png`} alt="camunda" /><CarItemNombre>Camunda</CarItemNombre></CardItem>
          <CardItem><img src={`./bizagi-logo.png`} alt="bizagi" /><CarItemNombre>Bizagi</CarItemNombre></CardItem>

            <h6>{informacion[0].frameworks}</h6>
            <h6>{informacion[0].BD}</h6>
            <h6>{informacion[0].herramientas}</h6>
        </ContenedorTecnologias>
    </Card>
  )
}
