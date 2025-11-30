import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
        <div className='header-inner'>
            <h2 className='logo'>Dechen</h2>
            <nav className='main-nav'>

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>


            </nav>
        </div>
    </header>
  )
}
