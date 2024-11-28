import React, { useEffect, useState } from "react";
import "../styles/StudentRequestCard.css";
import { useMutation } from "@tanstack/react-query";
import {
  acceptRequest,
  rejectRequest,
} from "../../services/TeacherServices/StudentInvitationService";

const StudentRequestCard = ({ request, refetchInvitations }) => {
  console.log(request?.studentId?.studentId?.fName);

  const acceptMutation = useMutation({
    mutationFn: acceptRequest,
    onSuccess: () => {
      queryClient.invalidateQueries(["teacherInvitations"]);
      refetchInvitations();
    },
  });
  const rejectMutation = useMutation({
    mutationFn: rejectRequest,
    onSuccess: () => {
      queryClient.invalidateQueries(["teacherInvitations"]);
      refetchInvitations();
    },
  });
  const AcceptRequest = async (id) => {
    acceptMutation.mutate(id);
  };
  const RejectRequest = async (id) => {
    rejectMutation.mutate(id);
  };
  return (
    <>
      <div className="student-card">
        {/* Top Row: Left and Right Parts */}
        <div className="student-card-top">
          {/* Left Part */}
          <div className="student-card-left">
            <img
              src={`${
                request?.studentId?.studentId?.image
                  ? request?.studentId?.studentId?.image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }`}
              className="student-image"
              alt="student"
            />
            <div className="student-info">
              <div className="info_left">
                <h3>
                  {request?.studentId?.studentId?.fName
                    ? request?.studentId?.studentId?.fName
                    : request?.studentId?.email.split("@")[0]}
                </h3>
                <div className="location">
                  <p className="student-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <address>
                      {request?.studentId?.studentId?.address ??
                        "Address is not  given"}
                    </address>
                  </p>
                </div>
              </div>
              <div className={`status ${request?.status}`}>
                {request?.status}
              </div>
            </div>
          </div>

          {/* Right Part */}

          <div className="student-card-right">
            <h4>Offered fee</h4>
            <p className="student-price">{request?.offeredPrice}/hr</p>
          </div>
        </div>

        {/* Middle Row: Description and Action Buttons */}
        <div className="student-card-middle">
          <h3>Message :</h3>
          <p>{request?.description}</p>
          <div className="student-offers">
            <p>Required service</p>
            <div className="offers">
              <span>
                {request?.tuitionType === "online" && (
                  <>
                    <i className="fa-solid fa-video online"></i> Online
                  </>
                )}

                {request?.tuitionType === "teacherhome" && (
                  <>
                    <i className="fa-solid fa-home home"></i> At Tuition Center
                  </>
                )}
                {request?.tuitionType === "studenthome" && (
                  <>
                    <i className="fa-solid fa-location-dot student"></i> At
                    Student's Home
                  </>
                )}
              </span>

              <span>
                <i className="fa-solid fa-clock clock"></i>
                {request?.from} to {request?.to}
              </span>
              <span>
                <i className="fa-solid fa-book clock"></i>
                {request?.subject}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Let's Chat and View Profile Buttons */}
        <div className="student-card-bottom">
          {/* {request?.status === "accepted" && (
            <>
              <button className="chat-button">
                <i className="fa-solid fa-comment-dots"></i> Discuss
              </button>
            </>
          )} */}
          {request?.studentId?.studentId?.number && (
            <button className="chat-button">
              <i className="fa-solid fa-phone "></i>
              {request?.studentId?.studentId?.number}
            </button>
          )}

          {request?.status === "pending" && (
            <>
              <button
                className="accept-button"
                onClick={() => AcceptRequest(request._id)}
              >
                Accept
              </button>
              <button
                className="reject-button"
                onClick={() => RejectRequest(request._id)}
              >
                Reject
              </button>
            </>
          )}
        </div>

        {/* <button className="accept-button">Accept</button> */}
      </div>
    </>
  );
};

export default StudentRequestCard;
