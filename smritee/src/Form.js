import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form() {
    const [value,setValue] = useState(0)
    const increaseValue = () =>{
      setValue(value+1)
    }
    const [name,setName] = useState('')
    const handleChange = (e)=>{
        setName(e.target.value)
        console.log(name)
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
 <h1>Value:{value}</h1>
<button onClick={increaseValue}>Increase</button>

<form>
<input type="text" placeholder='Name' onChange={(e)=>{handleChange(e)}}></input>
 </form>
    </div>
  )
}
