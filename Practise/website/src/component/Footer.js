import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 rounded-2xl">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">

       
        <div className="text-2xl font-bold text-white">
          Diwash Karki.
        </div>

 
        <div className="flex gap-6 text-gray-300">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/Projects" className="hover:text-white transition">Projects</Link>
          <Link to="/About" className="hover:text-white transition">About</Link>
          <Link to="/Contact" className="hover:text-white transition">Contact</Link>
        </div>


        <div className="flex gap-4 text-xl">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-purple-500 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

    
      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Diwash Karki. All rights reserved.
      </div>
    </footer>
  );
}
