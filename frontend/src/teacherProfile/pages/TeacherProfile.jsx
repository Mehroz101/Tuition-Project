import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherProfile } from "../../services/TeacherServices/TeacherProfileService";
import axios from "axios";
import "../styles/TeacherProfile.css";
import { pushNotify } from "../../errorHandler/Notify";

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

const TeacherProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  const { user, logout } = useAuth();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Set immediate preview
      try {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("teacherId", user?.id);

        const token = localStorage.getItem("usertoken");
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.post(
          `${API_URL}/upload`,
          formData,
          config
        );
        refetchDetails(); // Refresh profile details
        pushNotify("success", "Image", "Image uploaded successfully.");
        setPreview(`${API_BASE_URL}/${response.data.image}`); // Update preview to server URL
      } catch (error) {
        console.error("Error uploading image:", error);
        pushNotify("error", "Image", "Image upload failed.");
      }
    }
  };

  const {
    data,
    isLoading,
    isError,
    refetch: refetchDetails,
  } = useQuery({
    queryKey: ["TeacherProfile"],
    queryFn: GetTeacherProfile,
    onSuccess: (data) => {
      if (data?.image !== undefined && data?.image !== null) {
        console.log("enterd");
        const imageUrl = `${API_BASE_URL}/${data.image}`;
        setImage(imageUrl);
        setPreview(imageUrl);
      } else {
        setPreview(
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        );
      }
    },
    onError: (error) => {
      console.error("Error fetching teacher profile:", error.message);
      alert("Error fetching profile. Please try again.");
    },
  });

  const handleButtonClick = () => {
    document.getElementById("imageInput").click();
  };
  useEffect(()=>{
    if(data){
      console.log(data.image)
      setImage(data?.image)
      setPreview(data?.image); // Update preview with uploaded image
  
    }
  },[data])
  const logoutUser = () => {
    logout();
  };

  useEffect(() => {
    if (data?.image) {
      const imageUrl = `${API_BASE_URL}/${data.image}`;
      setImage(imageUrl);
      setPreview(imageUrl);
    }
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="profile_left_nav">
          <div className="profile_left_nav_img">
            <div className="left_img">
              {preview ? (
                <img src={preview} alt="Profile Preview" />
              ) : (
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              )}
            </div>
            <div className="upload_btn">
              <input
                type="file"
                id="imageInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
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
              {/* <li className={activeLink === "review" ? "active" : ""}>
                <i className="fa-solid fa-comments"></i>
                <Link to="reviews" onClick={() => setActiveLink("review")}>
                  Reviews
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
