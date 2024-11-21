import React from 'react'
import styled from 'styled-components'

const Card=styled.div`
    background-color: rgba(21, 96, 109, 0.439);
    margin: 1%;
    border-radius: 3px;
`
const informacion=[
    {
        empresa:1,
        lenguajes:"JavaScript,C#,Python, HTML, CSS, Material UI,Bootstrap, ",
        frameworks:"React ,DJango, .Net",
        BD:"PostgreSQL ,SQLServer",
        herramientas:"Postman, Xamp, Figma, Bizagi, Git, Github, Colaboratory,PowerBI",
    }
]
export default function Programacion() {
  return (
    <Card >
        <h3>Experiencia en programación</h3>
        <div>
            <h4>Tecnologias</h4>

            
            <img src={`MarcoAntonioHL.io/public/cshat2.svg`} alt="shart" />
            <img src={`MarcoAntonioHL.io/public/reactsvg.svg`} alt="react" />
            <img src={`MarcoAntonioHL.io/public/jssvg.svg`} alt="JS" />
            <img src={`MarcoAntonioHL.io/public/css.svg`} alt="css" />
            <img src={`MarcoAntonioHL.io/public/htmlSvg.svg`} alt="html" />
            <img src={`MarcoAntonioHL.io/public/sqlsvg.svg`} alt="sql" />
            <img src={`MarcoAntonioHL.io/public/git.svg`} alt="sql" />
            <img src={`MarcoAntonioHL.io/public/github.svg`} alt="sql" />
            <img src={`MarcoAntonioHL.io/public/netcore.svg`} alt="sql" />


            <h6>{informacion[0].frameworks}</h6>
            <h6>{informacion[0].BD}</h6>
            <h6>{informacion[0].herramientas}</h6>
        </div>
    </Card>
  )
}
