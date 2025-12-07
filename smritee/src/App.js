import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import User from "./User";
import UseEffect from "./UseEffect";
//responsive
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function App() {
  // const message = "Hello from Homepage"
  const [isMenuOpen, isSetMenuOpen] = useState(false);

  return (
    //   <div className="App">
    //     <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home/>}/>
    //       <Route path="/about/:message" element={<About/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
    //       <Route path="/form" element={<Form/>}/>
    //       <Route path="/useEffect" element={<UseEffect/>}/>
    //       <Route path="/user" element={<User/>}/>
    //     </Routes>
    //     </BrowserRouter>

    /* <div className='flex justify-between bg-purple-300 p-3 '>
    <p>Home</p>
    <p>About</p>
    <p>Services</p>
    <p>Contact</p>
   </div>
    <div className='flex justify-center'>
      <div className='w-1/2 bg-white m-10 p-5 border-2 shadow-xl border-red-200'>
      <h1 className='text-3xl text-white bg-red-400'>Hello</h1>
      <h1 className='font-bold text-2xl'>Welcome,Aadim Innovation</h1>
      <h3 className='text-center'>Good to see you</h3>
      <button className='bg-blue-400 rounded-lg py-2 px-6 text-white block mx-auto hover:bg-blue-500 m-5 item-center'>Click</button>
      </div> */

    <>
      <header className="bg-green-300 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl sm-text-2xl md-text-3xl text-white font-bold">
            Aadim Innovation
          </h1>
          <div className="hidden md:flex gap-5">
            <p className="text-white cursor-pointer hover:text-gray-200">
              Home
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              About
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              Services
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              Contact
            </p>
          </div>
          <button onClick={() => isSetMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col mt-3 gap-4">
            <p className="text-white cursor-pointer hover:text-gray-200">
              Home
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              About
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              Services
            </p>
            <p className="text-white cursor-pointer hover:text-gray-200">
              Contact
            </p>
          </div>
        )}
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5 gap-5">
        <div className="bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300">
          Card-1
        </div>
        <div className="bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300">
          Card-2
        </div>
        <div className="bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300">
          Card-3
        </div>
        <div className="bg-red-300 p-6 text-center hover:scale-105 transition-transform duration-300">
          Card-4
        </div>
      </div>
    </>
  );
}

export default App;
