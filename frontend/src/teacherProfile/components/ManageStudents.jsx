import React, { useEffect, useState } from "react";
import "../styles/ManageStudents.css";
import { Link } from "react-router-dom";
import StudentRequestCard from "./StudentRequestCard";
import Img1 from "../../assets/teacher-1.jpg";
import Img2 from "../../assets/teacher-2.jpg";
import Img3 from "../../assets/teacher-3.jpg";
import { fetchStudentInvitations } from "../../services/TeacherServices/StudentInvitationService";
import { useQuery } from "@tanstack/react-query";

const ManageStudents = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [studentRequestData, setStudentRequestData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data

  const {
    data: invitations,
    isLoading,
    isError,
    refetch: refetchInvitations,
  } = useQuery({
    queryKey: ["teacherInvitations"],
    queryFn: () => fetchStudentInvitations(),
  });

  useEffect(() => {
    if (invitations) {
      setStudentRequestData(invitations);
      setFilteredData(invitations); // Show all data initially
    }
  }, [isLoading]);

  useEffect(() => {
    const updateData = () => {
      if (activeLink === "all") {
        setFilteredData(studentRequestData);
      } else {
        const filtered = studentRequestData.filter(
          (req) => req.status === activeLink
        );
        setFilteredData(filtered);
      }
    };
    updateData();
  }, [activeLink, studentRequestData]);

  return (
    <>
      <div className="manage_students">
        <h3 className="right_box_heading">Manage Students</h3>
        <div className="student-state-boxes">
          <div className="student-state-box">
            <h3>Total students</h3>
            <p>{studentRequestData.length}</p>
            <div className="student-state-box-bottom">
              <small>Total students I teach</small>
            </div>
          </div>

          <div className="student-state-box">
            <h3>Accepted Invitations</h3>
            <p>
              {
                studentRequestData.filter((req) => req.status === "accepted")
                  .length
              }
            </p>
            <small>Currently teaching</small>
          </div>

          <div className="student-state-box">
            <h3>Pending invitations</h3>
            <p>
              {
                studentRequestData.filter((req) => req.status === "pending")
                  .length
              }
            </p>
            <small>Need your approval</small>
          </div>
        </div>
        <div className="student_filter">
          <ul>
            <li className={`${activeLink === "all" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("all")}>All</Link>
            </li>
            <li className={`${activeLink === "accepted" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("accepted")}>Accepted</Link>
            </li>
            <li className={`${activeLink === "pending" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("pending")}>Pending</Link>
            </li>
            <li className={`${activeLink === "rejected" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("rejected")}>Rejected</Link>
            </li>
            <li className={`${activeLink === "closed" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("closed")}>Closed</Link>
            </li>
          </ul>
        </div>
        <div className="student_requests">
          {filteredData?.map((request, index) => (
            <StudentRequestCard
              request={request}
              key={index}
              refetchInvitations={refetchInvitations}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageStudents;
