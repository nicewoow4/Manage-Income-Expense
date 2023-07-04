import React from 'react'
import "./Button.css"
function Button(props) {
    const {symbol , color , setDatalist} = props


  return (
    <button className="btn-wrapper" style={{backgroundColor: color}} onClick={()=>setDatalist([])}>Clear</button>
  )
}

export default Button