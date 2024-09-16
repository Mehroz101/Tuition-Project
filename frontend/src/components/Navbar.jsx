import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Img from "../assets/teacher-1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Tutor</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Listing</Link>
        </li>
        <li>
          <Link to="/teacherdetail">Teacher Detail Page</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/profile" className="profile_btn">
            <img src={Img} alt="" />
            <span className="name">mehrozfarooq</span>
          </Link>
        </li>
      </ul>
      {/* <div className="login-btn">
        <Link to="/login"><button>Login</button></Link>
      </div> */}

      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
