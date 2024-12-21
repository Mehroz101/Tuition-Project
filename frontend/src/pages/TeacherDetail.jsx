import React, { useEffect, useState } from "react";
import "../styles/TeacherDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeacherDetailPageCard from "../components/TeacherDetailPageCard";
import Img from "../assets/teacher-1.jpg";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { formatDate } from "../utils/functions";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;
const TeacherDetail = () => {
  const [hideReview, setHideReview] = useState(true);
  const { teacherId } = useParams();
  const {
    data: teacherDetail,
    isError,
    error,
  } = useQuery({
    queryKey: ["teacherDetails"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/teacherdetail/${teacherId}`);
      console.log(response.data.data);
      return response.data.data;
    },
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    // retry: false,
  });
  if (isError) {
    console.log(error);
  }
  const { data: teacherEducationDetail } = useQuery({
    queryKey: ["teacherEducationDetails"],
    queryFn: async () => {
      const response = await axios.get(
        `${API_URL}/teachereducationdetail/${teacherId}`
      );
      console.log(response.data.data);
      return response.data.data;
    },
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // refetchOnReconnect: false,
    // retry: false,
  });
  if (isError) {
    console.log(error);
  }
  useEffect(() => {
    console.log(teacherId);
    console.log(error);
  }, [teacherDetail, isError]);
  return (
    <>
      <Navbar />
      <div className="teacher_detail_page">
        <div className="teacher_detail_page_left">
          <div className="teacher_detail_page_left_card">
            <TeacherDetailPageCard teacher={teacherDetail} />
          </div>
          <div className="teacher_detail_page_left_description">
            <ul className="description_nav">
              <li className={hideReview ? "active" : ""}>
                <i className="fa-solid fa-house"></i>
                <Link onClick={() => setHideReview(true)}>Description</Link>
              </li>
              {/* <li className={hideReview ? "" : "active"}>
                <i className="fa-solid fa-face-smile"></i>
                <Link onClick={() => setHideReview(false)}>Reviews</Link>
              </li> */}
            </ul>
            {/* {hideReview ? ( */}
            <div className="description_box">
              <div className="introduction_section">
                <h2 className="description_box_heading">
                  A brief introduction
                </h2>
                <p className="description_box_text">
                  {teacherDetail?.description}
                </p>
              </div>
              {teacherEducationDetail?.length > 0 && (
                <div className="education_section">
                  <h2 className="description_box_heading">Education</h2>
                  {teacherEducationDetail?.map((degree) => (
                    <div className="degree">
                      <p className="education_level">
                        <i className="fa-solid fa-graduation-cap"></i>
                        <span>{degree?.degreeName}</span>
                      </p>
                      <div className="education_info">
                        <div className="university_name">
                          <i className="fa-solid fa-school"></i>
                          <p>{degree?.instituteName}</p>
                        </div>
                        {/* <div className="university_location">
                           <i className="fa-solid fa-location-dot"></i>
                           <p>{</p>
                         </div> */}
                        <div className="graduation_date">
                          <i className="fa-solid fa-calendar-days"></i>
                          <p>
                            {formatDate(degree?.startDate)} -
                            {formatDate(degree?.endDate)}
                          </p>
                        </div>
                      </div>
                      <p className="description_box_text">
                        {degree?.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* // ) : // ( // //{" "}
            <div className="review_box">
              // //{" "}
              <div className="review_section">
                // //{" "}
                <h2 className="review_box_heading">
                  // // Reviews ({teacherDetail?.ratingCount}) // //{" "}
                </h2>
                // //{" "}
                <div className="review">
                  // //{" "}
                  <div className="review_box_left">
                    // // <img src={Img} alt="" />
                    // //{" "}
                  </div>
                  // //{" "}
                  <div className="review_box_right">
                    // //{" "}
                    <div className="review_box_right_top">
                      // // <span className="name">Mehroz Farooq</span>
                      // //{" "}
                      <span className="rating">
                        // // 5.0 // // <i className="fa-solid fa-star"></i>
                        // //{" "}
                      </span>
                      // //{" "}
                    </div>
                    // //{" "}
                    <div className="review_box_right_bottom">
                      // //{" "}
                      <span>
                        // // Lorem ipsum dolor sit amet consectetur,
                        adipisicing // // elit. Illum asperiores perspiciatis
                        ipsam architecto // // maxime enim nobis? Quisquam
                        voluptatum voluptas quae // // voluptatibus maiores in
                        obcaecati sequi nemo? // // Asperiores alias saepe
                        beatae. // //{" "}
                      </span>
                      // //{" "}
                    </div>
                    // //{" "}
                  </div>
                  // //{" "}
                </div>
                // //{" "}
              </div>
              // //{" "}
            </div>
            // ) } */}
          </div>
        </div>
        <div className="teacher_detail_page_right">
          <div className="teacher_contact_detail">
            <p className="contact_detail">Contact detail</p>
            <div className="contact_links">
              {teacherDetail?.number && (
                <div className="contact_link">
                  <i className="fa-solid fa-phone-volume phone"></i>
                  <span>{teacherDetail?.number}</span>
                </div>
              )}
              {teacherDetail?.whatsapp && (
                <div className="contact_link">
                  <i className="fa-brands fa-whatsapp whatsapp"></i>
                  <span>{teacherDetail?.whatsapp}</span>
                </div>
              )}
              {teacherDetail?.email && (
                <div className="contact_link">
                  <i className="fa-solid fa-envelope email"></i>
                  <span>{teacherDetail?.email}</span>
                </div>
              )}
              {teacherDetail?.website && (
                <div className="contact_link ">
                  <i className="fa-solid fa-link website"></i>
                  <span>{teacherDetail?.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherDetail;
