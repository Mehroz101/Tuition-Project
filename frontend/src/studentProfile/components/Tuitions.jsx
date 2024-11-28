import React, { useEffect, useState } from "react";
import "../styles/tuitions.css"; // Add styles here for a better Material UI-like design
import { Link } from "react-router-dom";
import { pushNotify } from "../../errorHandler/Notify";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  cancelInvitation,
  getInvitation,
} from "../../services/StudentServices/SendInvitationService";

const Tuitions = () => {
  const [activeLink, setActiveLink] = useState("all");
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const { data, refetch: refetchRequests } = useQuery({
    queryKey: ["requests"],
    queryFn: () => getInvitation(),

    onSuccess: (data) => {},
    onError: (error) => {
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {},
  });
  const requestsList = [
    {
      id: 1,
      studentName: "John Doe",
      teacherName: "Mr. Alan Smith",
      subject: "Mathematics",
      typeOfTuition: "Online",
      offeredPrice: 50,
      startTime: "2024-10-10T16:00:00Z",
      endTime: "2024-10-10T17:30:00Z",
      status: "Pending",
      requestedAt: "2024-10-01T14:30:00Z",
    },
    {
      id: 2,
      studentName: "Jane Doe",
      teacherName: "Ms. Laura Johnson",
      subject: "Physics",
      typeOfTuition: "Teacher's Home",
      offeredPrice: 60,
      startTime: "2024-10-15T09:00:00Z",
      endTime: "2024-10-15T10:30:00Z",
      status: "Accepted",
      requestedAt: "2024-09-28T08:45:00Z",
    },
    {
      id: 3,
      studentName: "Michael Brown",
      teacherName: "Dr. Emily Turner",
      subject: "Chemistry",
      typeOfTuition: "Student's Home",
      offeredPrice: 55,
      startTime: "2024-10-12T11:00:00Z",
      endTime: "2024-10-12T12:30:00Z",
      status: "Rejected",
      requestedAt: "2024-09-25T16:00:00Z",
    },
    {
      id: 4,
      studentName: "Michael Brown",
      teacherName: "Dr. Emily Turner",
      subject: "Chemistry",
      typeOfTuition: "Student's Home",
      offeredPrice: 55,
      startTime: "2024-10-12T11:00:00Z",
      endTime: "2024-10-12T12:30:00Z",
      status: "Finished",
      requestedAt: "2024-09-25T16:00:00Z",
    },
  ];
  const handleCancelRequest = (requestId) => {
    cancelMutation.mutate(requestId);
  };
  const cancelMutation = useMutation({
    mutationFn: cancelInvitation,
    onSuccess: () => {
      refetchRequests();
    },
    onError: (error) => {
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
  });

  useEffect(() => {
    if (data) {
      setRequests(data);
      const updateData = () => {
        if (activeLink === "all") {
          setFilteredRequests(data);
        } else {
          const filtered = data.filter(
            (req) => req.status.toLowerCase() === activeLink
          );
          setFilteredRequests(filtered);
        }
      };
      updateData();
    }
  }, [activeLink, data]);

  return (
    <div className="tuitions">
      <div className="tuition_top">
        <h3>Tuition Requests</h3>
      </div>
      <div className="request_filter">
        <ul>
          <li className={`${activeLink === "all" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("all")}>All</Link>
          </li>
          <li className={`${activeLink === "pending" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("pending")}>Pending</Link>
          </li>
          <li className={`${activeLink === "accepted" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("accepted")}>Accepted</Link>
          </li>
          <li className={`${activeLink === "rejected" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("rejected")}>Rejected</Link>
          </li>
          <li className={`${activeLink === "finished" ? "active" : ""}`}>
            <Link onClick={() => setActiveLink("finished")}>Finished</Link>
          </li>
        </ul>
      </div>
      <div className="tuitions_list">
        {filteredRequests?.length === 0 ? (
          <p>No tuition requests found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="requests-table">
              <thead>
                <tr>
                  <th>S no.</th>
                  <th>Teacher Name</th>
                  <th>Subject</th>
                  <th>Type of Tuition</th>
                  <th>Offered Price</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Status</th>
                  <th>Requested At</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests?.map((request, index) => (
                  <tr key={request?._id}>
                    <td>{index + 1}</td>
                    <td>{request?.teacherId?.teacherId?.fName}</td>
                    <td>{request?.subject}</td>
                    <td>{request?.tuitionType}</td>
                    <td>${request?.offeredPrice}</td>
                    <td>{request?.from}</td>
                    <td>{request?.to}</td>
                    <td>
                      <span
                        className={`status ${request?.status.toLowerCase()}`}
                      >
                        {request?.status}
                      </span>
                    </td>
                    <td>{new Date(request?.createdAt).toLocaleDateString()}</td>
                    <td className="action_btn">
                      {/* <Link> */}
                      {/* <i className="fa-solid fa-comment messageicon"></i> */}
                      {/* </Link> */}
                      {/* <Link> */}
                      <i
                        className="fa-solid fa-xmark cancel"
                        onClick={() => handleCancelRequest(request?._id)}
                      ></i>
                      {/* </Link> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tuitions;
