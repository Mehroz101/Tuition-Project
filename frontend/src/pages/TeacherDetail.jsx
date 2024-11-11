import React, { useState } from "react";
import "../styles/TeacherDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeacherDetailPageCard from "../components/TeacherDetailPageCard";
import Img from "../assets/teacher-1.jpg";
import { Link } from "react-router-dom";
const TeacherDetail = () => {
  const [hideReview, setHideReview] = useState(true);
  return (
    <>
      <Navbar />
      <div className="teacher_detail_page">
        <div className="teacher_detail_page_left">
          <div className="teacher_detail_page_left_card">
            <TeacherDetailPageCard />
          </div>
          <div className="teacher_detail_page_left_description">
            <ul className="description_nav">
              <li className={hideReview?"active":""}>
                <i className="fa-solid fa-house"></i>
                <Link onClick={()=>setHideReview(true)}>Description</Link>
              </li>
              <li className={hideReview?"":"active"}>
                <i className="fa-solid fa-face-smile"></i>
                <Link onClick={()=>setHideReview(false)}>Reviews</Link>
              </li>
            </ul>
            {hideReview ? (
              <div className="description_box">
                <div className="introduction_section">
                  <h2 className="description_box_heading">
                    A brief introduction
                  </h2>
                  <p className="description_box_text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sapiente quisquam, deleniti minima quod labore saepe iure
                    officia impedit quis, quibusdam officiis. Beatae earum, illo
                    repellat et saepe odio dolore accusantium sed in magni
                    deleniti, nobis numquam nisi nemo aspernatur dolores. Aut
                    earum inventore quisquam, nostrum cupiditate sint corrupti
                    doloremque iusto commodi velit! Sunt doloremque nam id
                    dolorem totam? Blanditiis magnam hic, dicta, unde possimus
                    ratione, exercitationem culpa dolore ea nam ullam
                    consectetur esse aliquid in rem voluptas quibusdam maxime
                    quod quam quos eos ducimus porro et. Saepe itaque sint sit
                    voluptates eos id consequuntur? Ducimus similique obcaecati
                    ipsa tempora nam.
                  </p>
                </div>
                <div className="education_section">
                  <h2 className="description_box_heading">Education</h2>
                  <div className="degree">
                    <p className="education_level">
                      <i className="fa-solid fa-graduation-cap"></i>
                      <span>BS in Information Technology</span>
                    </p>
                    <div className="education_info">
                      <div className="university_name">
                        <i className="fa-solid fa-school"></i>
                        <p>University of California, Los Angeles</p>
                      </div>
                      <div className="university_location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>MULTAN, Bosan Road</p>
                      </div>
                      <div className="graduation_date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2020</p>
                      </div>
                    </div>
                    <p className="description_box_text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente quisquam, deleniti minima quod labore saepe iure
                      officia impedit quis, quibusdam officiis.
                    </p>
                  </div>
                  <div className="degree">
                    <p className="education_level">
                      <i className="fa-solid fa-graduation-cap"></i>
                      <span>BS in Information Technology</span>
                    </p>
                    <div className="education_info">
                      <div className="university_name">
                        <i className="fa-solid fa-school"></i>
                        <p>University of California, Los Angeles</p>
                      </div>
                      <div className="university_location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>MULTAN, Bosan Road</p>
                      </div>
                      <div className="graduation_date">
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>2020</p>
                      </div>
                    </div>
                    <p className="description_box_text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sapiente quisquam, deleniti minima quod labore saepe iure
                      officia impedit quis, quibusdam officiis.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="review_box">
                <div className="review_section">
                  <h2 className="review_box_heading">Reviews (234)</h2>
                  <div className="review">
                    <div className="review_box_left">
                      <img src={Img} alt="" />
                    </div>
                    <div className="review_box_right">
                      <div className="review_box_right_top">
                        <span className="name">Mehroz Farooq</span>
                        <span className="rating">
                          5.0
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="review_box_right_bottom">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illum asperiores perspiciatis ipsam architecto
                          maxime enim nobis? Quisquam voluptatum voluptas quae
                          voluptatibus maiores in obcaecati sequi nemo?
                          Asperiores alias saepe beatae.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="review">
                    <div className="review_box_left">
                      <img src={Img} alt="" />
                    </div>
                    <div className="review_box_right">
                      <div className="review_box_right_top">
                        <span className="name">Mehroz Farooq</span>
                        <span className="rating">
                          5.0
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="review_box_right_bottom">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illum asperiores perspiciatis ipsam architecto
                          maxime enim nobis? Quisquam voluptatum voluptas quae
                          voluptatibus maiores in obcaecati sequi nemo?
                          Asperiores alias saepe beatae.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="review">
                    <div className="review_box_left">
                      <img src={Img} alt="" />
                    </div>
                    <div className="review_box_right">
                      <div className="review_box_right_top">
                        <span className="name">Mehroz Farooq</span>
                        <span className="rating">
                          5.0
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="review_box_right_bottom">
                        <span>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illum asperiores perspiciatis ipsam architecto
                          maxime enim nobis? Quisquam voluptatum voluptas quae
                          voluptatibus maiores in obcaecati sequi nemo?
                          Asperiores alias saepe beatae.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="teacher_detail_page_right">
          <div className="teacher_contact_detail">
            <p className="contact_detail">Contact detail</p>
            <div className="contact_links">
              <div className="contact_link">
                <i className="fa-solid fa-phone-volume phone"></i>
                <span>03061756719</span>
              </div>
              <div className="contact_link">
                <i className="fa-brands fa-whatsapp whatsapp"></i>
                <span>923061756719</span>
              </div>
              <div className="contact_link">
                <i className="fa-solid fa-envelope email"></i>
                <span>mehrozfarooq127@gmail.com</span>
              </div>
              <div className="contact_link ">
                <i className="fa-solid fa-link website"></i>
                <span>www.mehroz.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherDetail;
