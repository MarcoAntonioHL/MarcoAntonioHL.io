
import React from "react";

export const ButtonSimple=(props)=>{

  return (
  <button className={`btn btn-${props.tipo}`}> 
    {props.text}
  </button>
  )
}
