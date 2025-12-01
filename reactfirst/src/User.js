import React from "react";

export default function User() {
  const user = [
    { id: 1, name: "himal", img: "https://images.pexels.com/photos/34973702/pexels-photo-34973702.jpeg" },
    { id: 2, name: "bhuban", img: "https://images.pexels.com/photos/24284368/pexels-photo-24284368.jpeg" },
    { id: 3, name: "pemba", img: "https://images.pexels.com/photos/31073743/pexels-photo-31073743.jpeg" },
    { id: 4, name: "bibek", img: "https://images.pexels.com/photos/33336904/pexels-photo-33336904.jpeg" }
  ];

  return (
    <div>
      <h1>List Of Users</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", margin:"20px" }}>
          {user.map((value) => (
            <div key={value.id}>
              <p>Id : {value.id}</p>
              <p>Name : {value.name}</p>
              <img src={value.img} style={{ width: "200px", height: "200px" }} alt={value.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
