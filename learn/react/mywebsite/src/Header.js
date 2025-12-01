import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
       <header>
        <div class="header_container">
            <div class="res1">
                <Link to='/'> Home</Link>
                <Link to='/About'> About</Link>
                <Link to='/Contact'> Contact</Link>
            </div>
        </div>

    </header>
  )
}
