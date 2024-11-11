import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import Img from "../../assets/teacher-1.jpg";

const StudentProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");

  return (
    <>
      <Navbar />
      <div className="student_profile">
        <div className="profile">
          <div className="profile_left_nav">
            <div className="profile_left_nav_img">
              <div className="left_img">
                <img src={Img} alt="" />
                <i className="fa-solid fa-camera"></i>
              </div>
              <div className="upload_btn">
                <button>Upload Image</button>
              </div>
            </div>
            <div className="profile_left_nav_items">
              <ul>
                <li
                  className={
                    activeLink === "personalinformation" ? "active" : ""
                  }
                >
                  <i className="fa-solid fa-user"></i>
                  <Link
                    to="profileInformation"
                    onClick={() => setActiveLink("personalinformation")}
                  >
                    Personal details
                  </Link>
                </li>
                <li className={activeLink === "message" ? "active" : ""}>
                  <i className="fa-solid fa-comment"></i>{" "}
                  <Link to="messages" onClick={() => setActiveLink("message")}>
                    Messages
                  </Link>
                </li>
                <li className={activeLink === "tuition" ? "active" : ""}>
                  <i className="fa-solid fa-hand-point-up"></i>{" "}
                  <Link to="tuitions" onClick={() => setActiveLink("tuition")}>
                    Tuition Request
                  </Link>
                </li>
                <li>
                <i className="fa-solid fa-right-from-bracket"></i>
                  <Link to="logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="profile_right_form">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
