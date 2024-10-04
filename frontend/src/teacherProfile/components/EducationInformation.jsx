import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DegreeDetailCard from "./DegreeDetailCard";

const EducationInformation = () => {
  const [education, setEducation] = useState();
  useEffect(() => {
    const educations = [
      {
        degreeName: "Bachelor of Science in Information Technology",
        universityName: "BZU University",
        location:"Multan",
        startDate: "December 2020",
        endDate: "June 2024",
        description:
          "A comprehensive four-year degree program that covers topics in software development, web technologies, databases, networking, and information security. The curriculum also includes hands-on projects and internships.",
      },
      {
        degreeName: "Master of Science in Computer Science",
        universityName: "National University of Computer and Emerging Sciences",
        location:"Karachi",
        startDate: "December 2020",
        endDate: "June 2024",
        description:
          "A two-year postgraduate program focused on advanced topics in machine learning, data science, artificial intelligence, and system architecture. The program emphasizes research and development in emerging technologies.",
      },
      {
        degreeName: "Bachelor of Business Administration",
        universityName: "Lahore School of Economics",
        location:"Lahore",
        startDate: "December 2020",
        endDate: "June 2024",
        description:
          "An undergraduate degree in business administration, covering topics in management, marketing, finance, and entrepreneurship. The program also includes case studies, group projects, and internships.",
      },
    ];
    setEducation(educations);
  }, []);
  return (
    <>
      <div className="contact_information">
        <div className="contact_information_top">
          <h3>Education information</h3>
          <Link to="/profile/educationinformation/addnew">Add new</Link>
        </div>
        <div className="education_details_container">
          {education?.map((edu,index) => (
            <DegreeDetailCard key={index} degree={edu} />
          ))}

          {/* <div className="education_detail">
            <h2 className="degree_name">Master of Computer Science</h2>
            <div className="degree_detail_btn">
              <div className="degree_detail">
                <div className="institute_name">
                  <i class="fa-solid fa-building"></i>
                  <span>Emerson Unversity Multan</span>
                </div>
                <div className="institute_location">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Multan, Pakistan</span>
                </div>
                <div className="institute_date">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>December 2020 - May 2024</span>
                </div>
              </div>
              <div className="degree_btn">
                <div className="edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="delete">
                  <i class="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
            <p className="description_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptatibus quidem, similique deleniti voluptatum voluptate
              aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut voluptatibus quidem, similique deleniti voluptatum
              voluptate aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut voluptatibus quidem, similique deleniti
              voluptatum voluptate aspernatur.
            </p>
          </div>
          <div className="education_detail">
            <h2 className="degree_name">Master of Computer Science</h2>
            <div className="degree_detail_btn">
              <div className="degree_detail">
                <div className="institute_name">
                  <i class="fa-solid fa-building"></i>
                  <span>Emerson Unversity Multan</span>
                </div>
                <div className="institute_location">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Multan, Pakistan</span>
                </div>
                <div className="institute_date">
                  <i class="fa-solid fa-calendar-days"></i>
                  <span>December 2020 - May 2024</span>
                </div>
              </div>
              <div className="degree_btn">
                <div className="edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div className="delete">
                  <i class="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
            <p className="description_text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptatibus quidem, similique deleniti voluptatum voluptate
              aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut voluptatibus quidem, similique deleniti voluptatum
              voluptate aspernatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aut voluptatibus quidem, similique deleniti
              voluptatum voluptate aspernatur.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default EducationInformation;
