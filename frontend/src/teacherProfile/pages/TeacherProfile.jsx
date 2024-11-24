import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Img from "../../assets/teacher-1.jpg";
import "../styles/TeacherProfile.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const TeacherProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  const {logout} = useAuth()
  const logoutUser = () =>{
    logout();
    }
  return (
    <>
      <Navbar />
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
                className={activeLink === "personalinformation" ? "active" : ""}
              >
                <i className="fa-solid fa-user"></i>
                <Link
                  to="personalinformation"
                  onClick={() => setActiveLink("personalinformation")}
                >
                  Personal details
                </Link>
              </li>
              <li className={activeLink === "education" ? "active" : ""}>
                <i className="fa-solid fa-user-graduate"></i>
                <Link
                  to="educationinformation"
                  onClick={() => setActiveLink("education")}
                >
                  Education
                </Link>
              </li>
              <li className={activeLink === "contactdetails" ? "active" : ""}>
                <i className="fa-solid fa-phone"></i>
                <Link
                  to="contactdetail"
                  onClick={() => setActiveLink("contactdetails")}
                >
                  Contact details
                </Link>
              </li>
              <li className={activeLink === "subjectiteach" ? "active" : ""}>
                <i className="fa-solid fa-book"></i>
                <Link
                  to="icanteach"
                  onClick={() => setActiveLink("subjectiteach")}
                >
                  Subject I teach
                </Link>
              </li>
              <li className={activeLink === "availability" ? "active" : ""}>
                <i className="fa-solid fa-business-time"></i>
                <Link
                  to="availability"
                  onClick={() => setActiveLink("availability")}
                >
                  Set Availability
                </Link>
              </li>
              <li className={activeLink === "student" ? "active" : ""}>
                <i className="fa-solid fa-user-graduate"></i>
                <Link
                  to="managestudents"
                  onClick={() => setActiveLink("student")}
                >
                  Manage Students
                </Link>
              </li>
              <li className={activeLink === "payment" ? "active" : ""}>
                <i className="fa-solid fa-money-check-dollar"></i>{" "}
                <Link to="payment" onClick={() => setActiveLink("payment")}>
                  Payments
                </Link>
              </li>
              <li className={activeLink === "review" ? "active" : ""}>
                <i className="fa-solid fa-comments"></i>{" "}
                <Link to="reviews" onClick={() => setActiveLink("review")}>
                  Reviews
                </Link>
              </li>
              <li className={activeLink === "message" ? "active" : ""}>
                <i className="fa-solid fa-comment"></i>{" "}
                <Link to="messages" onClick={() => setActiveLink("message")}>
                  Messages
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logoutUser}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  Logout
                </Link>
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
