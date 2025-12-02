import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [X,setX] = useState(0);
    useEffect(()=>{
        console.log("use effect")

    },[X])
    const ChangeValue = ()=>{
        setX(X+1)
    }
  return (
    <div>
        <h1>
            Value : {X} 
        </h1>
        <button onClick={ChangeValue}>Change value </button>
    </div>
  )
}
