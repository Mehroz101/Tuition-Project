import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Img from "../assets/teacher-1.jpg";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [localStorage]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Tutor</Link>
      </div>
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

        {role === "teacher" && (
          <li>
            <Link to="/profile" className="profile_btn">
              <img src={Img} alt="" />
              <span className="name">teacher</span>
            </Link>
          </li>
        )}
        {role === "student" && (
          <li>
            {/* <img src={Img} alt="" /> */}
            <Link to="/studentProfile" className="profile_btn">
              <img src={Img} alt="" />
              <span className="name">student</span>
            </Link>
          </li>
        )}
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
