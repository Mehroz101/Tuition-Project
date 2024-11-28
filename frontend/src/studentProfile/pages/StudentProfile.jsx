import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Img from "../../assets/teacher-1.jpg";
import { useAuth } from "../../context/AuthContext";

const StudentProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  const { logout } = useAuth();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle button click to trigger file input
  const handleUploadClick = () => {
    document.getElementById("imageInput").click();
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (!image) return alert("Please select an image.");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", "Uploaded Image");

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Image uploaded successfully!");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Image upload failed.");
    }
  };

  const logoutUser = () => {
    logout();
  };

  return (
    <>
      <Navbar />
      <div className="student_profile">
        <div className="profile">
          <div className="profile_left_nav">
            <div className="profile_left_nav_img">
              <div className="left_img">
                <img src={preview || Img} alt="Profile Preview" />
              </div>
              <div className="upload_btn">
                {/* Hidden file input */}
                <input
                  type="file"
                  id="imageInput"
                  name="imagebtn"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {/* Upload button */}
                <button
                  type="button"
                  onClick={handleUploadClick} // Opens the file selector
                >
                  Select Image
                </button>
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
                <li className={activeLink === "tuition" ? "active" : ""}>
                  <i className="fa-solid fa-hand-point-up"></i>{" "}
                  <Link to="tuitions" onClick={() => setActiveLink("tuition")}>
                    Tuition Request
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <Link to="/" onClick={logoutUser}>
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
      </div>
    </>
  );
};

export default StudentProfile;
