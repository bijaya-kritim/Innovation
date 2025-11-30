import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
<footer id="footer" class="site-footer">
    <div class="footer-inner">
      <div>
        <h3>Contact</h3>
        <p>Phone: 9749424049</p>
        <p>Email: pemalama@aadimcollege.np</p>
        <p>GitHub: <a href="https://github.com/Pemadechen0" target="_blank">github.com/Pemadechen0</a></p>
      </div>
      <div class="small-note">
        <p>© <span id="year"></span> Pema Dechen Lama</p>
      </div>
    </div>
</footer>
  )
}
