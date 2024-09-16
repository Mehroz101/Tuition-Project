import React from "react";
import { Link } from "react-router-dom";

const EducationInformation = () => {
  return (
    <>
      <div className="contact_information">
        <div className="contact_information_top">
          <h3 >Education information</h3>
          <Link to="/profile/educationinformation/addnew">Add new</Link>
        </div>
        <div className="education_details_container">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationInformation;
