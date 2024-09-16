import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Img from "../../assets/teacher-1.jpg";
import "../styles/TeacherProfile.css";
import { Link, Outlet } from "react-router-dom";

const TeacherProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile_left_nav">
          <div className="profile_left_nav_img">
            <div className="left_img">
              <img src={Img} alt="" />
              <i class="fa-solid fa-camera"></i>
            </div>
            <div className="upload_btn">
              <button>Upload Image</button>
            </div>
          </div>
          <div className="profile_left_nav_items">
            <ul>
              <li className={activeLink === "personalinformation" ? "active" : ""} onClick={() => setActiveLink("personalinformation")}>
                <i class="fa-solid fa-user"></i>
                <Link to="/profile/personalinformation">Personal details</Link>
              </li>
              <li className={activeLink === "education" ? "active" : ""} onClick={() => setActiveLink("education")}>
                <i class="fa-solid fa-user-graduate"></i>
                <Link to="/profile/educationinformation">Education</Link>
              </li>
              <li className={activeLink === "contactdetails" ? "active" : ""} onClick={() => setActiveLink("contactdetails")}>
                <i class="fa-solid fa-phone"></i>
                <Link to="/profile/contactdetail">Contact details</Link>
              </li>
              <li className={activeLink === "subjectiteach" ? "active" : ""} onClick={() => setActiveLink("subjectiteach")}>
                <i class="fa-solid fa-book"></i>
                <Link to="/profile/icanteach">Subject I teach</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="profile_right_form">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
