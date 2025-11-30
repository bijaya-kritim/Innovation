import React from "react";
import "./Projects.css";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Projects() {
  return (
    <>
    <Navbar/>

      <section id="projects">
        <div class="container">
          <h2 class="section-title">My Projects</h2>

          <div class="projects-grid">
            <div class="project-card">
              <div class="project-img">
                <img src="./images/portfolio.avif"></img>
              </div>
              <div class="project-content">
                <h3>Portfolio Website</h3>
                <p>
                  A responsive portfolio website built with HTML, CSS to
                  showcase projects and skills in a clean, modern design.
                </p>
                <div class="project-tech">
                  <span class="tech-tag">HTML</span>
                  <span class="tech-tag">CSS</span>
                  <span class="tech-tag">Responsive Design</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" class="project-link">
                    <i class="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-img">
                <img src="./images/food donor.avif"></img>
              </div>
              <div class="project-content">
                <h3>Food Donor App</h3>
                <p>
                  A platform connecting food donors with collection centers to
                  reduce food waste and help those in need.
                </p>
                <div class="project-tech">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">MongoDB</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" class="project-link">
                    <i class="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>

            <div class="project-card">
              <div class="project-img">
                <img src="./images/ecommerce.avif"></img>
              </div>
              <div class="project-content">
                <h3>E-commerce Website</h3>
                <p>
                  A fully responsive e-commerce platform with product filtering,
                  cart functionality, and checkout process.
                </p>
                <div class="project-tech">
                  <span class="tech-tag">React</span>
                  <span class="tech-tag">Firebase</span>
                  <span class="tech-tag">Stripe API</span>
                </div>
                <div class="project-links">
                  <a href="#" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href="#" class="project-link">
                    <i class="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
