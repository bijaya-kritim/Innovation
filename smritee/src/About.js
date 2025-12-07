import React from 'react'
import {Link, useParams } from 'react-router-dom';


export default function About() {
  return (
    <div>
       <Link to="/">Home</Link>
       <Link to={`/about/:message`}>About</Link>
       <Link to="/contact">Contact</Link> 
       <Link to="/form">Form</Link>
       <Link to="/useEffect">UseEffect</Link>
       <Link to="/user">User</Link>
       
    </div>
   
  )
}
