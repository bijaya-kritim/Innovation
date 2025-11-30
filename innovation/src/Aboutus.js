import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Aboutus() {
  const { message } = useParams();
  console.log(message);
  return (
    <div>
      <h1>we are at about us page</h1>
      <h1>{message}</h1>

      <Link to="/">Back to home page</Link>
      <br />
      <Link to="/contact">Contact page</Link>
    </div>
  );
}
