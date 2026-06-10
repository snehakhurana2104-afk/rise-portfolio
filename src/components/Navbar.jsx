import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">RISE</div>
      
      {/* Hamburger Icon (sirf mobile par dikhega) */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#next-steps" onClick={() => setIsOpen(false)}>Domains</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;