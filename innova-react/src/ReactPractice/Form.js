import React, { useState } from 'react'

export default function Form() {
    // const [variable,setVariable] = useState(0)

    // const increaseValue = () =>{
    //     setVariable(variable+1);
    // }
    // <div>
    //     <h1>Value:{variable}</h1>
    //     <button onClick={increaseValue}>increaseValue</button>
    // </div>

const [name, setName]=useState('')
const handleChange =(e)=>{
    setName(e.target.value)
    console.log(name)
}

    return (
        <>
        <form action="">
            <input type="text" placeholder='input your name' onChange={(e)=>{handleChange(e)}}/>
            {/* <input type="text" placeholder='input your name' onChange={(e)=>setName(e.target.value)}/> */}
        </form>
        </>

  )
}
