import React from 'react'
import styled from 'styled-components'

const Card=styled.div`
    background-color: rgba(21, 96, 109, 0.439);
    margin: 1%;
    border-radius: 3px;
`
export default function Programacion() {
  return (
    <Card >
        <h3>Experiencia en programación</h3>
        <div>
            <h4>Lenguajes de programacion</h4>
            <p>JavaScript<br/>
            python<br/>
            HTML<br/>
            CSS , Materia UI</p>
        </div>
        <div>
            <h4>Frameworks y Librerias</h4>
            <p>React<br/>DJango</p>
        </div>
        <div>
            <h4>Base de Datos</h4>
            <p>SqlServer<br/>
            PostgreSQL
            </p>
        </div>
        <div>
            <h4>herramientas de sistemas</h4>
            <p>
            Postman<br/>
            Git<br/>
            Xamp<br/>
            PowerBI<br/>
            Figma<br/>
            Bizagi<br/>
            Colaboratory<br/>
            </p>
        </div>
    </Card>
  )
}
