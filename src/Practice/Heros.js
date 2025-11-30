import React from 'react'
import { Link } from 'react-router-dom'

export default function Heros() {
        const message = "hellofromhomepage"


  return (
    <>
  <div>Heros</div>
     <Link to={`/about/${message}`} >Aboutus</Link>
    <br />
    <Link to="/contact">Contact</Link>
</>
    
  )
}
