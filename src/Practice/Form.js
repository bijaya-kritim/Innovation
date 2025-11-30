import React, {useState} from 'react'

export default function 
() {
//     const [variable, setVariable] = useState(0)
//     const increaseValue = ()=>{
//         setVariable('hiyalo');

//     }
//   return (
//     <div>
//    <h1>Value:{variable}</h1>
//    <button onClick={increaseValue}>Increase</button>
//     </div>
//   )
const [name, setName] = useState('')
const handleChange = (e) =>{
    setName(e.target.value)
    console.log(name)

}
return(
    <form action="">
        <input type='text' placeholder='input your name ' onChange={(e)=>{handleChange(e)}}></input>
        

    </form>
)
}
