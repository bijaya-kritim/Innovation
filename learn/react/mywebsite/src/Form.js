import React from 'react'
import { useState } from 'react'


export default function Form() {
    // const[ value , setValue] = useState(0)
    // const increasevalue = () => {
    //     setValue(value + 1)
    // }
    //   const decreasevalue = () => {
    //     setValue(value - 1)
    // }

    const [name,setname] = useState("")
    console.log(name)
    const handleChange = (e) => {
        setname(e.target.value)
    }
  return (
    <div className="form">
      <form>
        <input type="text" id="name" name="name" required  onChange ={(e) => { handleChange(e)}} />
      </form>
    </div>
//     <div> 
//         <h1>  value: {value} </h1>
//   < button onClick={increasevalue}>increase</button>
//   < button onClick={decreasevalue}>decrease</button>
//     </div>
   

  )
}
