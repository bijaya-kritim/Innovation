import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Navbar from './Navbar'
export default function Login() {
  return (
   <>
   <Navbar/>
    <div className="login-main">
      <div className="login">
        <fieldset>
          <legend>Login Here</legend>
          <form id="login-form" action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Here"
            />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password Here"
            /><br /><br />

            <div className="buttons">
              <button id="login" class="btn3"><Link to="#">LOG IN</Link></button>
              <p className="acc_link">
                Don't have an account ?
                <button className="signup">
                  <Link to="/Signup"> Sign Up</Link>
                </button>
              </p>
            </div>
          </form>
        </fieldset>
      </div>
    </div>

   </>
  )
}
