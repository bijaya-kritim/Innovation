import React from 'react'
import './Service.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Service() {
  return (
    <>
      <Navbar/>
      <div className="services-hero">
        <h1>Our Services</h1>
      </div>

      <div className="services-container">
        <h2>What We Offer</h2>
        <p className="service-intro">
          We provide high-quality services designed to make your experience 
          simple, fast, and effective.
        </p>

        <div className="services-row">
          <div className="service-card">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/8922/8922283.png" 
              alt=""
            />
            <h3>Quality Service</h3>
            <p>We focus on delivering the best experience with professional standards.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" 
              alt=""
            />
            <h3>Fast Delivery</h3>
            <p>We ensure quick and timely service without compromising quality.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png" 
              alt=""
            />
            <h3>24/7 Support</h3>
            <p>Our team is always available to help you whenever you need.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}