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

  const studentRequest = [
    {
      name: "Mehroz Farooq",
      address: "Mian Channu",
      offered_price: "20",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt accusamus adipisci repellat voluptatum. Illum animi cumque beatae voluptas quasi aperiam et aliquam. Facilis fugit quis libero cum hic atque exercitationem?",
      required_service: "online",
      start_time: "4:00PM",
      end_time: "7:00PM",
      image: Img1,
      status: "rejected",
      subject: "English",
    },
    {
      name: "Sara Khan",
      address: "Lahore",
      offered_price: "25",
      message:
        "I am looking for a tutor who can help me with math and science subjects. Online classes preferred during the evening.",
      required_service: "center",
      start_time: "5:00PM",
      end_time: "8:00PM",
      image: Img2,
      status: "accepted",
      subject: "Science",
    },
    {
      name: "Ali Ahmed",
      address: "Islamabad",
      offered_price: "15",
      message:
        "Need assistance with English literature. I prefer in-person tutoring at my home in the afternoon.",
      required_service: "home",
      start_time: "2:00PM",
      end_time: "5:00PM",
      image: Img3,
      status: "finished",
      subject: "Math",
    },
    {
      name: "Ali Raza",
      address: "Karachi",
      offered_price: "25",
      message:
        "Need assistance with English literature. I prefer in-person tutoring at my home in the afternoon.",
      required_service: "home",
      start_time: "3:00PM",
      end_time: "5:00PM",
      image: Img3,
      status: "pending",
      subject: "English",
    },
  ];
  useEffect(() => {
    console.log(invitations);
    if (invitations) {
      setStudentRequestData(invitations);
      setFilteredData(invitations); // Show all data initially
    }
  }, [isLoading]);

  useEffect(() => {
    // console.log(activeLink)

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
            <li className={`${activeLink === "finished" ? "active" : ""}`}>
              <Link onClick={() => setActiveLink("finished")}>Finished</Link>
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
