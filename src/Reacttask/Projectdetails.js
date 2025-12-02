import React from 'react'
import { useParams } from 'react-router-dom'

export default function Projectdetails() {
    const {id} = useParams;
  return (
    <>
    <div style={{ padding: "50px" }}>
      <h1>Project Details Page</h1>
      <h2>Project ID: {id}</h2>

      {id === "1" && <p>This is Portfolio Website description...</p>}
      {id === "2" && <p>This is Food Donor App description...</p>}
      {id === "3" && <p>This is E-commerce Website description...</p>}
    </div>

    </>
  )
}
