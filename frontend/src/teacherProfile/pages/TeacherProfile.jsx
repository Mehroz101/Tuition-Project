import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Img from "../../assets/teacher-1.jpg";
import "../styles/TeacherProfile.css";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfile } from "../../services/TeacherServices/TeacherProfileService";
import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;
const TeacherProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  const { user, logout } = useAuth();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      console.log("called");
      // Automatically upload the image after selecting
      const formData = new FormData();
      formData.append("image", file);
      formData.append("studentId", user?.id); // Attach student ID dynamically

      try {
        const token = localStorage.getItem("usertoken");
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        };
        const response = await axios.post(
          `${API_URL}/upload`,
          formData,
          config
        );
        refetchdetail();
        pushNotify(response.status, "Image", response.data.message);
        setPreview(response.data.imageUrl || null); // Update preview with uploaded image
        setImage(null);
      } catch (error) {
        console.error(error);
        pushNotify(error.response.status, "Image", error.response.data.message);

        alert("Image upload failed.");
      }
    }
  };
  const {
    data,
    isLoading,
    isError,
    refetch: refetchdetail,
  } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetTeacherProfile,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {
      console.log("fetching student profile");
    },
  });
  useEffect(() => {
    if (data) {
      console.log(data.image);
      setImage(data?.image);
      setPreview(data?.image); // Update preview with uploaded image
    }
  }, [data]);

  // Handle button click to trigger file input
  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  const logoutUser = () => {
    logout();
  };
  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile_left_nav">
          <div className="profile_left_nav_img">
            <div className="left_img">
              {/* Display preview image or default */}
              <img
                src={`http://localhost:5000/uploads/${image}`}
                alt="Profile Preview"
              />
            </div>
            <div className="upload_btn">
              {/* Hidden file input */}
              <input
                type="file"
                id="imageInput"
                name="imagebtn"
                style={{ display: "none" }}
                onChange={handleFileChange} // Handle file change and upload
              />
              {/* Single button for selecting and uploading */}
              <button type="button" onClick={handleButtonClick}>
                Select & Upload Image
              </button>
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
              {/* <li className={activeLink === "payment" ? "active" : ""}>
                <i className="fa-solid fa-money-check-dollar"></i>{" "}
                <Link to="payment" onClick={() => setActiveLink("payment")}>
                  Payments
                </Link>
              </li> */}
              <li className={activeLink === "review" ? "active" : ""}>
                <i className="fa-solid fa-comments"></i>{" "}
                <Link to="reviews" onClick={() => setActiveLink("review")}>
                  Reviews
                </Link>
              </li>
              {/* <li className={activeLink === "message" ? "active" : ""}>
                <i className="fa-solid fa-comment"></i>{" "}
                <Link to="messages" onClick={() => setActiveLink("message")}>
                  Messages
                </Link>
              </li> */}
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
