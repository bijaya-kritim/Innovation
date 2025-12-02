import React, { useState } from "react";
import "./Contactme.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contactme() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phonenumber);
    console.log("Message:", message);

    if (name === "" || email === "" || phonenumber === "" || message === "") {
      alert("please fill the form");
    } else {
      alert("Message sent!");
    }
    setName("");
    setEmail("");
    setPhonenumber("");
    setMessage("");
  };
  return (
    <>  
      <Navbar />
      <form onSubmit={handlesubmit}>
        <fieldset>
          <legend>Contact Me</legend>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"  value={name}  onChange={(e) => setName(e.target.value)} />

          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email"   value={email}  onChange={(e) => setEmail(e.target.value)} />

          <br />
          <br />

          <label htmlFor="phonenumber">Phone No:</label>
          <input type="tel" id="phonenumber"   value={phonenumber}  onChange={(e) => setPhonenumber(e.target.value)} />

          <br />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4"   value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>

          <br />
          <br />
          <button id="submit" type="submit">
            Send Message
          </button>
        </fieldset>
      </form>
      <Footer />
    </>
  );
}
