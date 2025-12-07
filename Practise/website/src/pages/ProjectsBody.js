import React from 'react';

export default function ProjectsBody() {

  const project = [
    { Name: "Portfolio Website", Remark: "OnGoing", image: "https://picsum.photos/seed/p1/600/400" },
    { Name: "E-commerce App", Remark: "Completed", image: "https://picsum.photos/seed/p2/600/400" },
    { Name: "Music Player UI", Remark: "OnGoing", image: "https://picsum.photos/seed/p3/600/400" },
    { Name: "Dashboard UI", Remark: "Completed", image: "https://picsum.photos/seed/p4/600/400" },
    { Name: "Blog Website", Remark: "OnGoing", image: "https://picsum.photos/seed/p5/600/400" },
    { Name: "Restaurant App", Remark: "Completed", image: "https://picsum.photos/seed/p6/600/400" },
    { Name: "Travel Landing Page", Remark: "OnGoing", image: "https://picsum.photos/seed/p7/600/400" },
    { Name: "Fitness App UI", Remark: "Completed", image: "https://picsum.photos/seed/p8/600/400" },
    { Name: "Crypto Tracker", Remark: "OnGoing", image: "https://picsum.photos/seed/p9/600/400" },
    { Name: "Clothing Store UI", Remark: "Completed", image: "https://picsum.photos/seed/p10/600/400" }
  ];

  return (
    <div className='mb-20'>
      <div className='font-bold text-[clamp(1rem,9vw,9rem)]'>
        Projects<span className='text-purple-500'>.</span>
      </div>

      <div className="mt-10 flex flex-wrap gap-10 justify-center">
        {project.map((item, index) => (
          <div 
            key={index} 
            className="
              p-5 shadow-xl rounded-2xl 
              transform transition-all duration-300 
              hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
            "
          >
            <img 
              src={item.image} 
              alt={item.Name} 
              className="w-60 h-60 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-3">{item.Name}</h2>
            <p className="text-gray-500">{item.Remark}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
