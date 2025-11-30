import React from "react";
import './Home.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from 'react-router-dom'

export default function Home() {
    const message="HEllofromhomepage"
  return (
    <>
      <Navbar/>
      <section className="home-hero">
        <div className="hero-text">
          <h1>Create. Inspire. Elevate.</h1>
          <p>We design meaningful digital experiences with elegance and clarity.</p>

          <Link to="/Login" className="primary-btn">
            Join Us
          </Link>
        </div>
      </section>

      <section className="intro">
        <h2>Welcome To Our Space</h2>
        <p>
          We believe in creating designs that feel warm, modern, and human.
          Everything we build blends creativity with clean functionality.
        </p>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h3>🌿 Elegant Design</h3>
          <p>Soft, minimal, and modern aesthetics crafted with care.</p>
        </div>

        <div className="highlight-card">
          <h3>⚙ Smooth Functionality</h3>
          <p>Responsive, optimized, and future-ready development.</p>
        </div>

        <div className="highlight-card">
          <h3>🤝 Friendly Support</h3>
          <p>We guide you through every step with clarity and comfort.</p>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-box">
          <h2>Who We Are</h2>
          <p>
            A passionate team dedicated to crafting digital products that feel clean,
            seamless, and visually delightful.
          </p>
          <Link to="/About" className="secondary-btn">Learn More</Link>
        </div>
      </section>

      <section className="services-section">
        <h2 style={{marginBottom: "15px"}}>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>Website Design</h3>
            <p>Warm, aesthetic, responsive layouts.</p>
          </div>

          <div className="service-card">
            <h3>Development</h3>
            <p>Clean, structured & smooth performance.</p>
          </div>

          <div className="service-card">
            <h3>Brand Identity</h3>
            <p>Beautiful color palettes & visual systems.</p>
          </div>

        </div>
      </section>

      <Footer/>
    </>
  );
}