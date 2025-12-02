import React from 'react'

export default function User() {
    const users = [
        {"id":101,"name":"sita",img:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {"id":102,"name":"ram",img:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {"id":103,"name":"gita",img:"https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        {"id":104,"name":"dita",img:"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        


    ]
  return (
    <>
    <div>
        <h1>List of Users</h1>
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                {
                    users.map((value, index) =>(
                        <div>
                        {/* <h1>user</h1> */}
                        <p>Id: {value.id}</p>
                        <p>Name: {value.name}</p>
                        <img src={value.img} style={{width:"100px",height:"auto"}}/>
                        </div>

                        
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}
