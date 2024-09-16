import React from "react";
import teacherImg from "../assets/teacher-1.jpg";

const TeacherDetailPageCard = () => {
  return (
    <>
      {/* Top Row: Left and Right Parts */}
      <div className="teacher-card-top">
        {/* Left Part */}
        <div className="teacher-card-left">
          <img src={teacherImg} className="teacher-image" />
          <div className="teacher-info">
            <h3>Mehroz Farooq</h3>
            <p>Spreading knowledge everywhere that's all I do</p>
            <div className="rating_location">
              <p className="teacher-reviews">
                <span className="rating">5.0</span>
                <i class="fa-solid fa-star"></i>
                <span className="total_review_count">(453)</span>
              </p>
              <p className="teacher-satisfaction">
                <i class="fa-solid fa-check"></i>
                <span className="satisfaction_rate">
                  <span className="rate">95%</span> Job Satisfaction
                </span>
              </p>
              <p className="teacher-location">
                <i class="fa-solid fa-location-dot"></i>
                <address>Mian Channu</address>
              </p>
            </div>
          </div>
        </div>

        {/* Right Part */}
        <div className="teacher-card-right">
          <h4>Starting at</h4>
          <p className="teacher-price">$27/hr</p>
        </div>
      </div>

      {/* Middle Row: Description and Action Buttons */}
      <div className="teacher-card-middle">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
          accusamus adipisci repellat voluptatum. Illum animi cumque beatae
          voluptas quasi aperiam et aliquam. Facilis fugit quis libero cum hic
          atque exercitationem?
        </p>
        <div className="teacher-offers">
          <p>You can get teacher service direct at</p>
          <div className="offers">
            <span>
              <i class="fa-solid fa-house home"></i> My Home
            </span>
            <span>
              <i class="fa-solid fa-location-dot location"></i>Subjects
            </span>
            <span>
              <i class="fa-solid fa-video online"></i> Online
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Let's Chat and View Profile Buttons */}
      <div className="teacher-card-bottom">
        <button className="chat-button">
          <i class="fa-solid fa-comment-dots"></i> Let's Chat
        </button>
        <button className="profile-button">Book a tuition</button>
      </div>
    </>
  );
};

export default TeacherDetailPageCard;
