import React from 'react'
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';


export default function About() {
  return (
    <>
    <Navbar/>

    <section id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-container">
        <div class="about-img">
          <img src='./images/aboutme.avif'></img>
        </div>
        <div class="about-content">
          <h2>Passionate About Web Development</h2>
          <p>I'm a BCA student with a strong interest in web development and technology. I enjoy building websites and learning new skills to enhance my capabilities.</p>
          <p>Currently studying at Aadim National College, I'm focused on mastering front-end technologies while exploring back-end development to become a full-stack developer.</p>
          
          <div class="skills-container">
            <div class="skill">
              <div class="skill-info">
                <span>HTML & CSS</span>
                <span>90%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress html"></div>
              </div>
            </div>
            
            <div class="skill">
              <div class="skill-info">
                <span>JavaScript</span>
                <span>75%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress js"></div>
              </div>
            </div>
            
            <div class="skill">
              <div class="skill-info">
                <span>React</span>
                <span>70%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress react"></div>
              </div>
            </div>
            
            <div class="skill">
              <div class="skill-info">
                <span>Git & GitHub</span>
                <span>80%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress git"></div>
              </div>
            </div>
          </div>
          
          <div class="education">
            <h3>Education</h3>
            <div class="education-item">
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <p>Aadim National College | 2022 - Present</p>
            </div>
            <div class="education-item">
              <h4>High School (Science) (+2)</h4>
              <p>Bouddha International School | 2020 - 2022</p>
            </div>
          </div>
          
          <div class="hobbies">
            <div class="hobby">
              <i class="fas fa-music"></i>
              <span>Singing</span>
            </div>
            <div class="hobby">
              <i class="fas fa-book"></i>
              <span>Reading</span>
            </div>
            <div class="hobby">
              <i class="fas fa-plane"></i>
              <span>Traveling</span>
            </div>
            <div class="hobby">
              <i class="fas fa-dancing"></i>
              <span>Dancing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
  
  )
}
