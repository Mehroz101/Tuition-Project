import React from "react";
import { formatDate } from "../../utils/functions";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { DeleteEducation } from "../../services/TeacherServices/TeacherEducationService";

const DegreeDetailCard = ({ degree }) => {
  const deleteDegree = useMutation({
    mutationFn: DeleteEducation,
    onSuccess: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <div className="education_detail">
        <h2 className="degree_name">{degree.degreeName}</h2>
        <div className="degree_detail_btn">
          <div className="degree_detail">
            <div className="institute_name">
              <i className="fa-solid fa-building"></i>
              <span>{degree.instituteName}</span>
            </div>
            {/* <div className="institute_location">
              <i className="fa-solid fa-location-dot"></i>
              <span>{degree.location}</span>
            </div> */}
            <div className="institute_date">
              <i className="fa-solid fa-calendar-days"></i>
              <span>
                {formatDate(degree.startDate)} - {formatDate(degree.endDate)}
              </span>
            </div>
          </div>
          <div className="degree_btn">
            <div className="edit">
              <Link to={degree._id}>
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>
            </div>
            <div
              className="delete"
              onClick={() => {
                deleteDegree.mutate(degree._id);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
        <p className="description_text">{degree.description}</p>
      </div>
    </>
  );
};

export default DegreeDetailCard;
