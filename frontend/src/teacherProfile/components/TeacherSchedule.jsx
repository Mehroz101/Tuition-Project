import React, { useState, useEffect } from "react";
import "../styles/TeacherSchedule.css";
import TeacherAvailabiltyForm from "../../formHandler/TeacherForm/TeacherAvailabiltyForm";
import { GetTeacherAvailabilty } from "../../services/TeacherServices/TeacherAvailabiltyService";
import { useQuery } from "@tanstack/react-query";
import { pushNotify } from "../../errorHandler/Notify";

const TeacherSchedule = () => {
  const {
    teacherAvailabilty,
    setTeacherAvailabilty,
    handleChange,
    handleSubmit,
  } = TeacherAvailabiltyForm();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetTeacherAvailabilty,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error fetching student profile:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {
      console.log("fetching student profile");
    },
  });

  useEffect(() => {
    if (data) {
      setTeacherAvailabilty({
        start: data.start || "",
        end: data.end || "",
      });
    }
  }, [data, setTeacherAvailabilty]);

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
