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
        lenguajes:"JavaScript, HTML, CSS, Material UI",
        frameworks:"React",
        BD:"PostgreSQL",
        herramientas:"Postman, Xamp, Figma, Bizagi, Git, Github",
    }
]
export default function Programacion() {
  return (
    <Card >
        <h3>Experiencia en programación</h3>
        <div>
            <h4>Lenguajes de programacion</h4>
            <h6>{informacion[0].lenguajes}</h6>
            <h6>{informacion[0].frameworks}</h6>
            <h6>{informacion[0].BD}</h6>
            <h6>{informacion[0].herramientas}</h6>
        </div>
    </Card>
  )
}
