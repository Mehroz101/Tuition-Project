import React, { useState } from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Tutor</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link >Home</Link></li>
        <li><Link >About</Link></li>
        <li><Link >Services</Link></li>
        <li><Link >Contact</Link></li>
      </ul>
      <div className="login-btn">
        <Link to="/login"><button>Login</button></Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
