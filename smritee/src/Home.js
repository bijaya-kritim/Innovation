import React from 'react'
import {Link } from 'react-router-dom';
import About from './About'

export default function Home() {
      const message = "hellofromhomepage"

  return (
    <div>
       <Link to="/">Home</Link>
      <Link to={`/about/${message}`} >Aboutus</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/form">Form</Link>
       <Link to="/useEffect">UseEffect</Link>
       <Link to="/user">User</Link>
       
    </div>
  );
}
