import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


function App() {
  const [isMenuOpen, SetIsMenuOpen] = useState(false);
  return (

    // <>
    // <div className='flex justify-center bg-green-300 gap-20 p-5  '>
    //   <p>Home</p>
    //   <p>About</p>
    //   <p>Contact</p>
    //   <p>Services</p>
    // </div>

    // <div className='flex justify-center'>
    //   <div className='w-1/4 bg-white border-2 shadow-xl m-10 p-5'>
    //     <h1 className='font-bold text-2xl md:3xl text-center'>
    //       Welcome ! Aadim Innovation
    //     </h1>
    //     <h3 className='text-center'>
    //       good to see you
    //     </h3>
    //     <button className='bg-blue-500 rounded-lg p-2 text-white hover:bg-blue-700 mx-auto block'>
    //       click here
    //     </button>
    //   </div>
    // </div>

    //   </>









    <>
      <header className='bg-green-300 p-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl sm:text-2xl md:text-3xl text-white font-bold'> Aadim Innovation</h1>
          <div className=' hidden md:flex gap-5'>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Home </p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Contact Us </p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>About Us</p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Our Blog</p>

          </div>
          <button onClick={() => SetIsMenuOpen(!isMenuOpen)} className='md:hidden text-white'>
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className='flex flex-col  mt-3 gap-4'>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Home </p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Contact Us </p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>About Us</p>
            <p className='text-white cursor-pointer hover:text-gray-200 '>Our Blog</p>
          </div>
        )}
      </header>
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 gap-5'>
        <div className='bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300 '>  Card 1 </div>
        <div className='bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300 '>  Card 2 </div>
        <div className='bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300 '>  Card 3 </div>
        <div className='bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300 '>  Card 4 </div>
   
      </div>
    </>






  );
}



export default App;

