// TeacherCard.js

import React, { useEffect, useState } from "react";
import "../styles/TeacherCard.css"; // Importing CSS for the component
import teacherImg from "../assets/images.jpg";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const TeacherCard = ({ key, teacher }) => {
  const [ImgUrl, setImgUrl] = useState(teacherImg);
  useEffect(() => {
    if (teacher?.image) {
      setImgUrl(`${API_BASE_URL}/${teacher?.image}`);
    } else {
      setImgUrl(
        "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
      );
    }
  }, [teacher]);
  return (
    <div className="teacher-card" key={key}>
      {/* Top Row: Left and Right Parts */}
      <div className="teacher-card-top">
        {/* Left Part */}
        <div className="teacher-card-left">
          <img src={ImgUrl} className="teacher-image" />
          <div className="teacher-info">
            <h3>
              {teacher?.fName} {teacher?.lName}
            </h3>
            <div className="rating_location">
              <p className="teacher-reviews">
                <span className="rating">{teacher?.rating?.toFixed(1)}</span>
                <i className="fa-solid fa-star"></i>
                <span className="total_review_count">
                  ({teacher?.ratingCount})
                </span>
              </p>
              <p className="teacher-location">
                <i className="fa-solid fa-location-dot"></i>
                <address>{teacher?.city}</address>
              </p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="teacher-card-right">
          <h4>Starting at</h4>
          <p className="teacher-price">${teacher?.fee}/hr</p>
        </div>
      </div>

      {/* Middle Row: Description and Action Buttons */}
      <div className="teacher-card-middle">
        <p>{teacher?.description}</p>
        <div className="teacher-offers">
          <p>You can get teacher service direct at</p>
          <div className="offers">
            {teacher?.online ? (
              <span>
                <i className="fa-solid fa-video online"></i> Online
              </span>
            ) : (
              ""
            )}
            {teacher?.studentHome ? (
              <span>
                <i className="fa-solid fa-location-dot location"></i>Student
                Home
              </span>
            ) : (
              ""
            )}
            {teacher?.teacherHome ? (
              <span>
                <i className="fa-solid fa-house home"></i> My Home
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      {/* Bottom Row: Let's Chat and View Profile Buttons */}
      <div className="teacher-card-bottom">
        {/* <button className="chat-button">
          <i className="fa-solid fa-comment-dots"></i> Let's Chat
        </button> */}
        <Link to={`/teacherdetail/${teacher?._id}`}>
          <button className="profile-button">View Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
