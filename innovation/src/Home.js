import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const message = "hellofromhomepage"
  return (
    <>
    <div>Home</div>
    <Link to={`/about/${message}`} >Aboutus</Link>
    <br />
    <Link to="/contact">Contact</Link>
    </>
  )
}
