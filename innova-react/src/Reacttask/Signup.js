import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbar from "./Navbar";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    console.log("name = ", name);
    console.log("email = ", email);
    console.log("phone = ", phone);
    console.log("gender = ", gender);
    // console.log("recommended by = ",)
    console.log("message = ", message);

    if (!name||!email|| !phone || !gender || !message ) {
      alert("please kindly bhara ta");
      return;
    } 
    alert("sign up successfully");
    navigate("/Home");
  };

  return (
    <>
      <Navbar />
      <div className="sign-main">
        <form id="myForm" onSubmit={handleSignup}>
          <fieldset>
            <legend>Sign Up Form</legend>
            <label for="name">Name :</label>
            <input type="text" id="name" value={name} onChange={(e)=>setname(e.target.value)} />
            <br />
            <br />
            <label for="email">Email :</label>
            <input type="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}  />
            <br />
            <br />
            <label for="phn">Phone Number :</label>
            <input type="tel" id="phn"value={phone} onChange={(e)=>setphone(e.target.value)}  />
            <br />
            <br />
            <label>Gender</label>
            <br />
            <input type="radio" name="gender" id="male" value="Male" checked={gender==="Male"} onChange={(e)=>setgender(e.target.value)} /> Male
            <br />
            <input type="radio" name="gender" id="female" value="Female" checked={gender==="Female"} onChange={(e)=>setgender(e.target.value)} />
            Female
            <br />
            <br />
            <label>Recommended By :</label>
            <br />
            <input type="checkbox" name="reason" id="friend" /> Friend <br />
            <input type="checkbox" name="reason" id="social" /> Social Media
            <br />
            <input type="checkbox" name="reason" id="relative" />
            Relative
            <br />
            <br />
            <label for="msg">Message</label>
            <br />
            <textarea
              id="msg"
              rows="3"
              placeholder="Write a message..."
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button id="submit" type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
