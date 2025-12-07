import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    const user =[
        {"id" : 1,"name" :"ram" , img :"https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png"},
        {"id" : 2,"name" :"hari" , img :"https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png"},
        {"id" : 3,"name" :"shyam" , img :"https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png"},
        {"id" : 4,"name" :"raj" , img :"https://static.vecteezy.com/system/resources/previews/009/398/577/original/man-avatar-clipart-illustration-free-png.png"},
        {"id" : 5,"name" :"sita" , img :"https://th.bing.com/th/id/OIP.TQUsL4jqcED_dV3o6v9nKQHaJB?w=181&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"},
    ]
  return (
    <div>
         <div>
       <Link to="/">Home</Link>
       <Link to="/about" >About</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/form">Form</Link>
       <Link to="/useEffect">UseEffect</Link>
       <Link to="/user">User</Link>
       
    </div>
        <h1>List of Users</h1>
        <div style={{display:"flex"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
            {
                user.map((value,index)=>(
                    <div>
                        <p>Id :{value.id}</p>
                        <p>Name :{value.name}</p>
                        <img src={value.img} style={{width:"50px", height:"50px"}}/>
                    </div>
                    
                ))
            }
        </div>
        </div>
    </div>
  )
}
