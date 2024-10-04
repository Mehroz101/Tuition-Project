import React, { useState, useEffect } from "react";
import "../styles/TeacherSchedule.css";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Sample availability data in JSON format
const initialAvailability = {
  "Monday": { start: "09:00", end: "14:00" },
  "Tuesday": { start: "10:00", end: "15:00" },
  "Wednesday": { start: "08:30", end: "12:30" },
  "Thursday": { start: "09:00", end: "16:00" },
  "Friday": { start: "09:30", end: "13:30" },
  "Saturday": { start: "10:00", end: "12:00" },
  "Sunday": { start: "", end: "" },
};

const TeacherSchedule = ({ teacherId }) => {
  const [availability, setAvailability] = useState({});

  useEffect(() => {
    // Load initial availability (could be fetched from an API instead)
    setAvailability(initialAvailability);
  }, []);

  const handleStartChange = (day, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], start: value },
    }));
  };

  const handleEndChange = (day, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: { ...prev[day], end: value },
    }));
  };

  const saveAvailability = () => {
    console.log("Availability saved:", availability);
    alert("Availability saved successfully!");
  };

  return (
    <div className="teacher-schedule">
      <h3 className="right_box_heading">Set Your Availability</h3>
      <div className="availability-form">
        <div className="slots">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-slot">
              <label>{day}</label>
              <div className="input_box">
                <input
                  type="time"
                  value={availability[day]?.start || ""}
                  onChange={(e) => handleStartChange(day, e.target.value)}
                />
                <span>to</span>
                <input
                  type="time"
                  value={availability[day]?.end || ""}
                  onChange={(e) => handleEndChange(day, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={saveAvailability}>Save Availability</button>
      </div>
    </div>
  );
};

export default TeacherSchedule;
