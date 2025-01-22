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
<<<<<<< HEAD
      console.log("called")
      console.log("std",data)
      console.log("std id",data.studentId)
=======
>>>>>>> 028c8357cebcb42d4f8c8cbbdbd5e06997630f22
      const formData = new FormData();
      formData.append("image", file);
      formData.append("studentId", data.studentId); // Attach student ID dynamically
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

        pushNotify("error", "Image", "Image upload failed.");
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
    queryFn: GetStudentProfile,
  });
<<<<<<< HEAD
useEffect(()=>{
  if(data){
    console.log(data)
    console.log(data.image)
    setImage(data?.image)
    setPreview(data?.image); // Update preview with uploaded image

  }
},[data])
=======
  useEffect(() => {
    if (data?.image) {
      console.log(data.image);
      setImage(data?.image);
      setPreview(data?.image); // Update preview with uploaded image
    } else {
      setPreview(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
    }
  }, [data]);
>>>>>>> 028c8357cebcb42d4f8c8cbbdbd5e06997630f22

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
                {data?.image ? (
                  <img
                    src={`${API_BASE_URL}/${data?.image}`}
                    alt="Profile  Preview"
                  />
                ) : (
                  <img
                    src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`}
                    alt="Profile Preview"
                  />
                )}
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
