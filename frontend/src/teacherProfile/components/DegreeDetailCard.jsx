import React from "react";

const DegreeDetailCard = ({ degree }) => {
  return (
    <>
      <div className="education_detail">
        <h2 className="degree_name">{degree.degreeName}</h2>
        <div className="degree_detail_btn">
          <div className="degree_detail">
            <div className="institute_name">
              <i className="fa-solid fa-building"></i>
              <span>{degree.universityName}</span>
            </div>
            <div className="institute_location">
              <i className="fa-solid fa-location-dot"></i>
              <span>{degree.location}</span>
            </div>
            <div className="institute_date">
              <i className="fa-solid fa-calendar-days"></i>
              <span>
                {degree.startDate} - {degree.endDate}
              </span>
            </div>
          </div>
          <div className="degree_btn">
            <div className="edit">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="delete">
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
