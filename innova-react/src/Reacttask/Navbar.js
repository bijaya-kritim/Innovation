import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">WEB PAGE</div>

    <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Service'>Service</Link></li>
        <li><Link to='/Design'>Design</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
    </ul>
</nav>
  )
}
