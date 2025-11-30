import React from 'react'
import './Design.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Design() {
  return (
    <>
    <Navbar/>
      <div className="design-hero">
        <h1>Our Designs</h1>
      </div>

      <div className="design-container">
        <h2>Creative Work</h2>
        <p className="design-intro">
          Explore our modern and professional designs crafted with precision and
          creativity.
        </p>

        <div className="design-grid">
          <div className="design-box">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60"
              alt=""
            />
            <h3>Website UI Design</h3>
            <p>Modern and responsive website interface layouts.</p>
          </div>

          <div className="design-box">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=60"
              alt=""
            />
            <h3>Dashboard Design</h3>
            <p>Clean admin dashboards with professional data visuals.</p>
          </div>

          <div className="design-box">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=60"
              alt=""
            />
            <h3>Poster & Graphics</h3>
            <p>High-quality posters, banners, and promotional designs.</p>
          </div>

          <div className="design-box">
            <img
              src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=60"
              alt=""
            />
            <h3>Mobile App UI</h3>
            <p>Sleek and user-friendly mobile app designs.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}