import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function UseEffect() {
    const [x,setX] = useState(0)
     useEffect(()=>{
            console.log("Use Effect")
        },[x]);
        const changeValue = () =>{
            setX(x+1)
        }
  return (
    <div>
       <div>
       <Link to="/">Home</Link>
       <Link to="/about" >Aboutus</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/form">Form</Link>
       <Link to="/useEffect">UseEffect</Link>
       <Link to="/user">User</Link>
       
    </div>
       <h1>Value : {x}</h1>
       <button onClick={changeValue}>Change Value</button>
    </div>
  );
}
