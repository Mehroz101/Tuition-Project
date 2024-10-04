import React, { useEffect, useState } from "react";
import "../styles/StudentRequestCard.css";

const StudentRequestCard = ({ request }) => {
  return (
    <>
      <div className="student-card">
        {/* Top Row: Left and Right Parts */}
        <div className="student-card-top">
          {/* Left Part */}
          <div className="student-card-left">
            <img
              src={`${request.image}`}
              className="student-image"
              alt="student"
            />
            <div className="student-info">
              <div className="info_left">
                <h3>{request.name}</h3>
                <div className="location">
                  <p className="student-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <address>{request.address}</address>
                  </p>
                </div>
              </div>
              <div className={`status ${request.status}`}>{request.status}</div>
            </div>
          </div>

          {/* Right Part */}

          <div className="student-card-right">
            <h4>Offered fee</h4>
            <p className="student-price">{request.offered_price}/hr</p>
          </div>
        </div>

        {/* Middle Row: Description and Action Buttons */}
        <div className="student-card-middle">
          <h3>Message :</h3>
          <p>{request.message}</p>
          <div className="student-offers">
            <p>Required service</p>
            <div className="offers">
              <span>
                {request.required_service === "online" && (
                  <>
                    <i className="fa-solid fa-video online"></i> Online
                  </>
                )}

                {request.required_service === "center" && (
                  <>
                    <i className="fa-solid fa-home home"></i> At Tuition Center
                  </>
                )}
                {request.required_service === "home" && (
                  <>
                    <i className="fa-solid fa-location-dot student"></i> At
                    Student's Home
                  </>
                )}
              </span>

              <span>
                <i className="fa-solid fa-clock clock"></i>
                {request.start_time} to {request.end_time}
              </span>
              <span>
                <i className="fa-solid fa-book clock"></i>
                {request.subject}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Let's Chat and View Profile Buttons */}
        <div className="student-card-bottom">
          {request.status === "accepted" && (
            <>
              <button className="chat-button">
                <i className="fa-solid fa-comment-dots"></i> Discuss
              </button>
            </>
          )}

          {request.status === "pending" && (
            <>
              <button className="chat-button">
                <i className="fa-solid fa-comment-dots"></i> Discuss
              </button>
              <button className="accept-button">Accept</button>
              <button className="reject-button">Reject</button>
            </>
          )}
        </div>

        {/* <button className="accept-button">Accept</button> */}
      </div>
    </>
  );
};

export default StudentRequestCard;
