import React from 'react'
import { useState } from 'react';

export default function Usestate() {
    const [counter,setCounter] = useState(0);

    const handleClick=()=> setCounter(counter+1);
  return (
    <>
   <button style={{marginTop:'50px'}} onClick={handleClick}>Click me</button>
   <div style={{marginTop:'50px'}}>{counter}</div>
    </>
  )
}
