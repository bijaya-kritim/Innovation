import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We are dedicated to providing modern, user-friendly solutions 
            and creative designs that make a difference.
          </p>
        </div>


        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Kathmandu, Nepal</p>
          <p>Email: info@example.com</p>
          <p>Phone: +977-9876543210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 WebPage. All Rights Reserved.</p>
      </div>
    </footer>
  );
}