import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("username = ", username);
    console.log("password =", password);

    if (username === "" || password === "") {
      alert("ramro sanga bhar ta form");
    } else {
      alert("logged in successfully");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-main">
        <div className="login">
          <fieldset>
            <legend>Login Here</legend>
            <form id="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username Here"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password Here"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />

              <div className="buttons">
                <button id="login" className="btn3">
                  Log In
                </button>
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
  );
}
