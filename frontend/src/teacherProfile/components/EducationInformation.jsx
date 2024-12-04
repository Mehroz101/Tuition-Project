import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DegreeDetailCard from "./DegreeDetailCard";
import { useQuery } from "@tanstack/react-query";
import { GetTeacherEducation } from "../../services/TeacherServices/TeacherEducationService";

const EducationInformation = () => {
  const [education, setEducation] = useState();
  const {
    data: educations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["studentProfile"],
    queryFn: GetTeacherEducation,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.error("Error fetching teacher education:", error.message);
      pushNotify(400, "SORRY", "Something went wrong. Try again later.");
    },
    onsettled: () => {
      console.log("fetching teacher detail");
    },
  });
  // useEffect(()=>{
  //   if(educations){
  //     console.log(educations)
  //     setEducation(educations)
  //     }
  // },[])

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="contact_information">
        <div className="contact_information_top">
          <h3>Education information</h3>
          <Link to="/profile/educationinformation/addnew">Add new</Link>
        </div>
        <div className="education_details_container">
          {educations?.length > 0 ? (
            educations?.map((edu, index) => (
              <DegreeDetailCard key={index} degree={edu} />
            ))
          ) : (
            <div className="no_data">No data found</div>
          )}

          {/* <div className="education_detail">
            <h2 className="degree_name">Master of Computer Science</h2>
            <div className="degree_detail_btn">
              <div className="degree_detail">
                <div className="institute_name">
                  <i className="fa-solid fa-building"></i>
                  <span>Emerson Unversity Multan</span>
                </div>
                <div className="institute_location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Multan, Pakistan</span>
                </div>
                <div className="institute_date">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>December 2020 - May 2024</span>
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
                  <i className="fa-solid fa-building"></i>
                  <span>Emerson Unversity Multan</span>
                </div>
                <div className="institute_location">
                  <i className="fa-solid fa-location-dot"></i>
                  <span>Multan, Pakistan</span>
                </div>
                <div className="institute_date">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>December 2020 - May 2024</span>
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
