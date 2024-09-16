import React from "react";
import { Link } from "react-router-dom";

const ICanTeach = () => {
  return (
    <>
      <div className="icanteach_information">
        <div className="icanteach_information_top">
          <h3>Education information</h3>
          <Link to="/profile/icanteach/addnew">Add new</Link>
        </div>
        <div className="icanteach_container">
          <div className="subjects">
            <div className="subject">
              <span className="title">Mathamatics</span>
              <span className="level">Beginner</span>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="subject">
              <span className="title">Computer Science</span>
              <span className="level">Intermediate</span>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="subject">
              <span className="title">Physics</span>
              <span className="level">Advanced</span>
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div className="subject">
              <span className="title">English</span>
              <span className="level">Beginner</span>
              <i class="fa-solid fa-xmark"></i>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICanTeach;
