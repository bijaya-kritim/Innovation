import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

 
  const isContactPage = location.pathname === "/Contact";

  return (
    <header className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-black font-bold">
          Diwash Karki.
        </h1>

      
        <div className="hidden md:flex gap-5 text-2xl">
          <Link to="/" className={`font-bold ${location.pathname === "/" ? "text-purple-500" : "text-gray-500 hover:text-purple-500"}`}>Home</Link>
          <Link to="/Projects" className={`font-bold ${location.pathname === "/Projects" ? "text-purple-500" : "text-gray-500 hover:text-purple-500"}`}>Projects</Link>
          <Link to="/About" className={`font-bold ${location.pathname === "/About" ? "text-purple-500" : "text-gray-500 hover:text-purple-500"}`}>About</Link>
        </div>

        
        <div 
          className={`w-10 h-10 rounded-full flex justify-center items-center transition-all 
                      ${isContactPage ? "bg-purple-500" : "bg-purple-500 hover:bg-black"}`}
        >
          <button
            onClick={() => {
              if (window.innerWidth >= 768) {
                navigate("/Contact"); 
              } else {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
            className="text-white text-2xl"
          >
            {(isMenuOpen && window.innerWidth < 768) ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

    
      {isMenuOpen && window.innerWidth < 768 && (
        <div className="flex flex-col mt-3 gap-4 bg-purple-500 p-4 rounded-xl text-white">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200">Home</Link>
          <Link to="/Projects" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200">Projects</Link>
          <Link to="/About" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200">About</Link>
          <Link to="/Contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-200">Contact</Link>
        </div>
      )}
    </header>
  );
}
