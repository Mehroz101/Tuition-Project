import React, { useEffect, useState } from "react";
import "../styles/StudentRequestCard.css";
import { useMutation } from "@tanstack/react-query";
import {
  acceptRequest,
  closeRequest,
  rejectRequest,
  updateLink,
} from "../../services/TeacherServices/StudentInvitationService";
import { useQueryClient } from "@tanstack/react-query";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

const StudentRequestCard = ({ request, refetchInvitations }) => {
  const [link, setLink] = useState(request?.link);
  const handleChange = (e) => {
    setLink(e.target.value);
  };
  const queryClient = useQueryClient();
  const updateLinkMutation = useMutation({
    mutationFn: updateLink,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["teacherInvitations"]);
      refetchInvitations();
    },
  });
  const acceptMutation = useMutation({
    mutationFn: acceptRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["teacherInvitations"]);
      refetchInvitations();
    },
  });
  const rejectMutation = useMutation({
    mutationFn: rejectRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["teacherInvitations"]);
      refetchInvitations();
    },
  });
  const closeMutation = useMutation({
    mutationFn: closeRequest,
    onSuccess: (data) => {
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
  const CloseRequest = async (id) => {
    closeMutation.mutate(id);
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
                  ? `${request?.studentId?.studentId?.image}`
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
                    : "User"}
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
          {request?.rating !== 0 && request?.review && (
            <>
              <div className="givenRating">
                <h3>
                  ({request?.rating}) <i className="fa-solid fa-star"></i>
                </h3>
                <p>{request?.review}</p>
              </div>
            </>
          )}
          {request?.rating === 0 && (
            <>
              <h3>Message :</h3>
              <p>{request?.description}</p>
            </>
          )}
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

        <div className="student-card-bottom">
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
          {request?.status === "accepted" && (
            <>
              <div className="linkinputbox">
                <input
                  type="text"
                  name="link"
                  onChange={handleChange}
                  value={link}
                />
                <button
                  className="Close-button"
                  onClick={() =>
                    updateLinkMutation.mutate({ id: request._id, link: link })
                  }
                >
                  update link
                </button>
              </div>
              <button
                className="Close-button"
                onClick={() => CloseRequest(request._id)}
              >
                Close Tuition
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentRequestCard;
