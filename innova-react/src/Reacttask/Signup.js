import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Navbar from './Navbar'

export default function Signup() {
  return (
   <>
   <Navbar/>
    <div className="sign-main">
      <form id="myForm">
        <fieldset>
          <legend>Sign Up Form</legend>

          <label for="name">Name :</label>
          <input type="text" id="name" />
          <br /><br />

          <label for="email">Email :</label>
          <input type="email" id="email" />
          <br /><br />

          <label for="phn">Phone Number :</label>
          <input type="tel" id="phn" />
          <br /><br />

          <label>Gender</label><br />
          <input type="radio" name="gender" id="male" value="Male" /> Male<br />
          <input type="radio" name="gender" id="female" value="Female" /> Female
          <br /><br />

          <label>Reason For Visit :</label><br />
          <input type="checkbox" name="reason" id="friend" /> Friend <br />
          <input type="checkbox" name="reason" id="social" /> Social Media<br />
          <input type="checkbox" name="reason" id="relative" />
          Relative<br /><br />

          <label for="msg">Message</label><br />
          <textarea
            id="msg"
            rows="3"
            placeholder="Write a message..."
          ></textarea>
          <br /><br />

          <button id="submit" type="submit"> <Link to='/Home'>Submit</Link></button>
        </fieldset>
      </form>
    </div>

   </>
  )
}
