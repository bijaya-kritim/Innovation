import React from 'react'

export default function USer() {
    const user =[
        {
            "id":13,
            name:"Jenisha",
            img:"https://images.unsplash.com/photo-1631631480669-535cc43f2327?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id":24,
            name:"Nisha",
            img:"https://plus.unsplash.com/premium_vector-1720440170692-f25c2a0a5f1d?q=80&w=891&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id":32,
            name:"Isha",
            img:"https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "id":44,
            name:"Lisa",
            img:"https://plus.unsplash.com/premium_photo-1728072618100-30031ada079e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    ]
  return (
    <div>
        <h1>List of users</h1>
        <div style={{display:"flex"}}>

        <div style={{display:"flex",flexDirection:"Column"}}>
            {
                user.map((value,index)=>(
                    <div>
                        <p>Id: {value.id}</p>
                        <p>Name : {value.name}</p>
                        <img src={value.img} style={{width:"100px", height:"auto"}} alt=""/>
                     </div>
                ))
            }
        </div>
        </div>
    </div>
  )
}
