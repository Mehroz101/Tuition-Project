import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ICanTeach = () => {
  const [subject, setSubject] = useState();
  useEffect(() => {
    const SubjectITeach = [
      {
        subject: "Math",
        level: "Beginner",
      },
      {
        subject: "English",
        level: "Advanced",
      },
      {
        subject: "Science",
        level: "Beginner",
      },
      {
        subject: "Database",
        level: "Intermediate",
      },
    ];
    setSubject(SubjectITeach);
  }, []);
  return (
    <>
      <div className="icanteach_information">
        <div className="icanteach_information_top">
          <h3>Education information</h3>
          <Link to="/profile/icanteach/addnew">Add new</Link>
        </div>
        <div className="icanteach_container">
          <div className="subjects">
            {subject?.map((sub, index) => (
              <div className="subject" key={index}>
                <span className="title">{sub.subject}</span>
                <span className="level">{sub.level}</span>
                <i class="fa-solid fa-xmark"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ICanTeach;
