import React from "react";
import './Home.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
        <Navbar/>
  <section id="home">
    <div class="container">
      <div class="hero">
        <div class="hero-content">
          <h1>Hello, I'm <span>Dechen</span></h1>
          <p class="lead">BCA Student & Aspiring Web Developer</p>
          <p>I create clean, functional websites and continuously expand my skills in front-end development. Passionate about turning ideas into digital reality.</p>
          <div class="hero-btns">
            <Link to='/projects' className="btn">View my work </Link>
            <Link to='/about' className="btn btn-secondary">Learn more</Link>

          </div>
        </div>
        <div class="hero-image">
          <img src="./images/dd.avif"></img>
        </div>
      </div>
      
      <div class="stats">
        <div class="stat-item">
          <span class="stat-number">2+</span>
          <span class="stat-text">Years of Learning</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-text">Projects Completed</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">5+</span>
          <span class="stat-text">Technologies</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">100%</span>
          <span class="stat-text">Passionate</span>
        </div>
      </div>
    </div>
  </section>
     <About/>
     <Projects/>
    <Footer/>

        </>

  );
}
