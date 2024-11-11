import React, { useState, useEffect } from "react";
import "../styles/TeacherSchedule.css";
import TeacherAvailabiltyForm from "../../formHandler/TeacherForm/TeacherAvailabiltyForm";

const TeacherSchedule = () => {
  const { teacherAvailabilty, handleChange, handleSubmit } =
    TeacherAvailabiltyForm();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="teacher-schedule">
      <h3 className="right_box_heading">Set Your Availability</h3>
      <div className="availability-form">
        <div className="slots">
          <div className="day-slot">
            <label>Timing</label>
            <div className="input_box">
              <input
                type="time"
                name="start"
                onChange={handleChange}
                value={teacherAvailabilty.start}
              />
              <span>to</span>
              <input
                type="time"
                name="end"
                onChange={handleChange}
                value={teacherAvailabilty.end}
              />
            </div>
          </div>
        </div>
        <button onClick={handleFormSubmit}>Save Availability</button>
      </div>
    </div>
  );
};

export default TeacherSchedule;
