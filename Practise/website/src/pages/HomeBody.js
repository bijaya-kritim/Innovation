import React from 'react';
import Diwash from '../img/Diwash.jpg';
import { useNavigate } from 'react-router-dom';

export default function HomeBody() {
  const navigate = useNavigate();

  return (
    <div className='p-5 flex flex-col-reverse md:flex-row h-screen items-center justify-between'>

    
      <div className='flex-1 text-center md:text-left'>
        <div className='text-[clamp(1rem,2vw,2rem)] mb-1'>
          Hey, I'm Diwash
        </div>

        <div className='font-bold text-[clamp(2rem,6vw,9rem)] leading-[1.1] mb-3'>
          <span className='text-purple-500'>Front</span>end Developer
        </div>

        <div className='text-gray-500 text-[clamp(1rem,3vw,1.6rem)] max-w-xl leading-[1.5] mx-auto md:mx-0'>
          I'm a frontend developer based in Nepal. I help you build beautiful, user-friendly websites that make an impact.
        </div>

        <div className='flex flex-wrap gap-5 justify-center md:justify-start mt-6'>
          <button
            onClick={() => navigate('/Contact')}
            className='bg-black font-bold text-white px-10 py-4 rounded-xl hover:bg-purple-500 transition-colors duration-300 text-[clamp(0.8rem,1.5vw,1.2rem)]'
          >
            Get In Touch
          </button>

          <button
            onClick={() => navigate('/Projects')}
            className='bg-gray-200 text-black font-bold px-10 py-4 rounded-xl hover:bg-gray-300 transition-colors duration-300 text-[clamp(0.8rem,1.5vw,1.2rem)]'
          >
            Browse Projects
          </button>
        </div>
      </div>

      
      <div className='flex-1 flex justify-center md:justify-end'>
        <img
          className='w-[70%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-full object-cover border-4 border-purple-300 shadow-xl'
          src={Diwash}
          alt='Diwash'
        />
      </div>

    </div>
  );
}
