import React, { useEffect, useState } from "react";

export default function Useeffect() {
  const [x, setX] = useState(0);
  useEffect(() => {
    console.log("use effect");
  }, [x]);
  const changeValue = ()=>{
    setX(x+1)
  }
  return (
    <div>
      <h1>Value : {x}</h1>
      <button onClick={changeValue}>change value</button>
    </div>
  );
}
