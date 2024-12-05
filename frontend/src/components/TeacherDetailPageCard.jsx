import React from "react";
import teacherImg from "../assets/teacher-1.jpg";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

const TeacherDetailPageCard = ({ teacher }) => {
  const ImgUrl = `${API_BASE_URL}/${teacher?.image}` || teacherImg;

  const teacher_id = 123;
  return (
    <>
      {/* Top Row: Left and Right Parts */}
      <div className="teacher-card-top">
        {/* Left Part */}
        <div className="teacher-card-left">
          <img src={ImgUrl} className="teacher-image" />
          <div className="teacher-info">
            <h3>
              {teacher?.fName} {teacher?.lName}
            </h3>
            <p>{teacher?.tagline}</p>
            <div className="rating_location">
              <p className="teacher-reviews">
                <span className="rating">5.0</span>
                <i className="fa-solid fa-star"></i>
                <span className="total_review_count">(453)</span>
              </p>
              <p className="teacher-satisfaction">
                <i className="fa-solid fa-clock"></i>
                <span className="satisfaction_rate">
                  {/* <span className="rate">95%</span> Job Satisfaction */}
                  {teacher?.availability[0]?.start} -
                  {teacher?.availability[0]?.end}
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
        {/* <Link className="chat-button">
          <i className="fa-solid fa-comment-dots"></i> Let's Chat
        </Link> */}
        <Link
          className="profile-button"
          to={`/sendinvitation/${teacher?.teacherId}`}
        >
          Book a tuition
        </Link>
      </div>
    </>
  );
};

export default TeacherDetailPageCard;
