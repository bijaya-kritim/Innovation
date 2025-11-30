import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
    <Navbar/>
  
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
    

      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          Feel free to reach out to us with any questions or inquiries.
        </p>

        <div className="contact-row">

          <div className="contact-info">
            <h3>Our Details</h3>
            <p><strong>Address:</strong> Kathmandu, Nepal</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Phone:</strong> +977-9876543210</p>
          </div>

          <form id="contact_form" className="contact-form">
            <input type="text" name="name" id="name" placeholder="Your Full Name" />
            <input type="email" name="email" id="email" placeholder="Your Email Address" />
            <input type="text" name="subject" id="subject" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" id="message"></textarea>
            <button type="submit" id="send">Send Message</button>
          </form>

        </div>
      </div>
      <Footer/>
    </>
  )
}