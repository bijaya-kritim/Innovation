import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">LaptopStore</h2>

   
      <div
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-menu ${open ? "show" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setOpen(false)}>Products</Link></li>
        <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        <li><Link to="/cart" onClick={() => setOpen(false)}>Cart</Link></li>
      </ul>
    </nav>
  );
}
