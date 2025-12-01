import React from 'react'

export default function User() {
    const user = [
        {"id": 1678, "name": "susan" , "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLWbFAgu_0izweCxukGaT87B5Hd82Ql48HA&s"},
        {"id": 2678, "name": "suman", "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamUEndfjI8ztZi5iqQxLIK2DEtV7b93vCZw&s"},
        {"id": 3678, "name": "pemba" , "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLWbFAgu_0izweCxukGaT87B5Hd82Ql48HA&s"},
        {"id": 4678, "name": "pratigya", "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamUEndfjI8ztZi5iqQxLIK2DEtV7b93vCZw&s"},

    ]
  return (
    <div>
        <h1>List of Users</h1>
        <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
                {
                    user.map((value, index)=>(
                        <div style={{backgroundColor:"aqua", margin:"10px"}}>
                            <p>Id : {value.id}</p>
                            <p>Name: {value.name}</p>
                            <img src={value.img} style={{width:"50px", height:"50px"}} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}


// navigation,  import and export, useEffect, useState, array of object looping
// tailwind, dependecies, api (strapi => fetch )