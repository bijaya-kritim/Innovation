import React, { useState } from 'react'

export default function Form() {
//     const [variable, setVariable] = useState(0)

//     const increaseValue = ()=>{
//         setVariable(variable+2)
//     }
//   return (
//     <div>
        
//         <h1>Value: {variable}</h1>
//         <button onClick={increaseValue}>Increase</button>

//     </div>
//   )

const [name, setName] = useState('')
// const handleChange = (e)=>{
//     setName(e.target.value)
   
// }
console.log(name)
return(

    <>
    <form action="">
        {/* <input type="text" placeholder='input your name' onChange={(e)=>{handleChange(e)}}/> */}
        <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/>
    </form>
    </>
)
}
