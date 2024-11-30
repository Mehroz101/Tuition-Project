import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Img from "../../assets/teacher-1.jpg";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { pushNotify } from "../../errorHandler/Notify";
import { GetStudentProfile } from "../../services/StudentServices/StudentProfileService";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/student`;
const StudentProfile = () => {
  const [activeLink, setActiveLink] = useState("personalinformation");
  const { logout, user } = useAuth(); // Assuming `user` provides logged-in user data
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle file input change
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
console.log("called")
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
        refetchdetail()
        pushNotify(response.status,"Image",response.data.message)
        setPreview(response.data.imageUrl || null); // Update preview with uploaded image
        setImage(null);
      } catch (error) {
        console.error(error);
        pushNotify(error.response.status,"Image",error.response.data.message)

        alert("Image upload failed.");
      }
    }
  };
  const { data, isLoading, isError, refetch:refetchdetail } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetStudentProfile,
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
useEffect(()=>{
  if(data){
    console.log(data.image)
    setImage(data?.image)
    setPreview(data?.image); // Update preview with uploaded image

  }
},[data])

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
      <div className="student_profile">
        <div className="profile">
          <div className="profile_left_nav">
            <div className="profile_left_nav_img">
              <div className="left_img">
                {/* Display preview image or default */}
                <img src={`http://localhost:5000/uploads/${image}`} alt="Profile Preview" />
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
