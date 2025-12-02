import React from 'react';
import './ContactBody.css';

export default function ContactBody() {
  return (
    <div className='field'>
    <fieldset >
      <legend>Form</legend>
      <form>
        <div>
          <fieldset className="field1">
            <legend>Personal Information</legend>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" placeholder="Enter your name" />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" placeholder="Enter your email" />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" placeholder="Enter your password" />
            <br />
            <label htmlFor="age">Age</label>
            <br />
            <input type="number" id="age" placeholder="Enter your age" />
            <br />
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </fieldset>
        </div>

        <div>
          <fieldset className="field1">
            <legend>Contact Information</legend>
            <label htmlFor="number">Phone Number</label>
            <br />
            <input type="tel" id="number" placeholder="Enter your phone number" />
            <br />
            <label htmlFor="address">Address</label>
            <br />
            <input type="text" id="address" placeholder="Enter your address" />
          </fieldset>
        </div>

        <div>
          <fieldset className="field1">
            <legend>Time</legend>
            <input type="datetime-local" id="date" />
          </fieldset>
        </div>

        <br />
        
      </form>
    </fieldset>
    <input type="submit" id="submit" className="submit" value="Submit" />
    </div>
  );
      
}
