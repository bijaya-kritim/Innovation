import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div>
            2025 Diwash Karki. All rights reserved. <br/>
            Designed & Developed by Diwash Karki <div className="margin-top2"> <a href="#introduction">- About me</a>
                <br/>
                <a href="#skills"> - Skills</a> <br/>
                <a href="#mission">- Mission</a> <br/>
                <a href="#language">- Langauge</a> <br/>
                <a href="#build">- Contact</a>
            </div>

        </div>
        <div>
            <div className="footerspace">
                <img src="/learn/img/facebook.png" alt=""/><a href="">Facebook</a>
            </div>
            <div className="footerspace"><img src="/learn/img/github.png" alt=""/><a href="">GitHub</a></div>

            <div className="footerspace"> <img src="/learn/img/email.png" alt=""/> <a href="mailto:diwashkrki@gmail.com">Gmail</a> </div>
        </div>




    </footer>
  )
}
