import React from "react";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";
import HeroImage from "../assets/heresectionImg.png";
import Partner_1 from "../assets/img-01.png";
import Partner_2 from "../assets/img-02.png";
import Partner_3 from "../assets/img-03.png";
import Partner_4 from "../assets/img-04.png";
import Partner_5 from "../assets/img-05.png";
import Partner_6 from "../assets/img-06.png";
import Partner_7 from "../assets/img-07.png";
import SearchIcon from "../assets/search.png";
import SelectIcon from "../assets/select.png";
import CalenderIcon from "../assets/calendar.png";
import MadelIcon from "../assets/medal.png";
import OnlineLearning from "../assets/onlinelearning.png";
import TeacherIcon from "../assets/teacher.png";
import StudentIcon from "../assets/graduated.png";
import CourseIcon from "../assets/course.png";
import ScheduleIcon from "../assets/schedule.png";
import Teacher_1 from "../assets/teacher-1.jpg";
import Teacher_2 from "../assets/teacher-2.jpg";
import Teacher_3 from "../assets/teacher-3.jpg";
import Teacher_4 from "../assets/teacher-4.jpg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
  const navigate  = useNavigate()
  const signupBtn = (role) =>{
    navigate(`/login/${role}`)
  }
  return (
    <>
      <div className="home_page">
        <Navbar />
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="tagline">
              Great education starts with finding the right <span>tutor</span>{" "}
            </h1>
            <p className="supporting_text">
              Discover top tutors who can tailor their teaching to your needs,
              helping you achieve academic excellence and build confidence.
            </p>

            <div className="hero-buttons">
              <button className="btn-student" onClick={()=>signupBtn("student")}>Start as Student</button>
              <button className="btn-teacher" onClick={()=>signupBtn("teacher")}>Join as Teacher</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Hero" />
          </div>
        </section>

        <section className="partners-section">
          <div className="container">
            <div className="partners-logos">
              <div className="partner-logo">
                <img src={Partner_1} alt="Partner 1" />
              </div>
              <div className="partner-logo">
                <img src={Partner_2} alt="Partner 2" />
              </div>
              <div className="partner-logo">
                <img src={Partner_3} alt="Partner 3" />
              </div>
              <div className="partner-logo">
                <img src={Partner_4} alt="Partner 4" />
              </div>
              <div className="partner-logo">
                <img src={Partner_5} alt="Partner 5" />
              </div>
              <div className="partner-logo">
                <img src={Partner_6} alt="Partner 5" />
              </div>
              <div className="partner-logo">
                <img src={Partner_7} alt="Partner 5" />
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-title">How It Works</h2>
            <div className="steps">
              <div className="step">
                <img src={SearchIcon} alt="" />
                <h3 className="step-title">Search for Tutors</h3>
                <p className="step-description">
                  Enter your subject or location to find the best tutors in your
                  area.
                </p>
              </div>
              <div className="step">
                <img src={SelectIcon} alt="" />
                <h3 className="step-title">Choose Your Tutor</h3>
                <p className="step-description">
                  Review tutor profiles and select the one that best fits your
                  needs.
                </p>
              </div>
              <div className="step">
                <img src={CalenderIcon} alt="" />
                <h3 className="step-title">Schedule a Session</h3>
                <p className="step-description">
                  Set up a convenient time for your tutoring sessions and start
                  learning.
                </p>
              </div>
              <div className="step">
                <img src={MadelIcon} alt="" />
                <h3 className="step-title">Achieve Your Goals</h3>
                <p className="step-description">
                  Work with your tutor to reach your educational objectives and
                  track your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-online-section">
          <div className="container">
            <div className="section-content">
              <div className="image-container">
                <img src={OnlineLearning} alt="Online Learning Platform" />
              </div>
              <div className="text-container">
                <p className="small-text">
                  Discover the benefits of modern learning
                </p>
                <h2 className="section-title">
                  Experience the Future of Education with Our Innovative{" "}
                  <span>Online Platform</span>
                </h2>
                <p className="section-description">
                  Online platforms offer unparalleled flexibility, convenience,
                  and a vast array of resources tailored to your needs. Learn at
                  your own pace, access materials anytime, and connect with
                  experts from anywhere in the world. Embrace the future of
                  education with a platform designed to help you succeed.
                </p>
                <a href="#get-started" className="cta-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="stats-row">
              <div className="stat-item">
                <img src={TeacherIcon} alt="Tutors" className="stat-icon" />
                <div className="stat-number">200+</div>
                <div className="stat-label">
                  Expert Tutors Available to Guide You
                </div>
              </div>
              <div className="stat-item">
                <img src={StudentIcon} alt="Students" className="stat-icon" />
                <div className="stat-number">5,000+</div>
                <div className="stat-label">
                  Students Actively Engaged in Learning
                </div>
              </div>
              <div className="stat-item">
                <img src={CourseIcon} alt="Courses" className="stat-icon" />
                <div className="stat-number">150+</div>
                <div className="stat-label">
                  Diverse Courses Offered Across Multiple Subjects
                </div>
              </div>
              <div className="stat-item">
                <img src={ScheduleIcon} alt="Hours" className="stat-icon" />
                <div className="stat-number">10,000+</div>
                <div className="stat-label">
                  Total Hours of Personalized Tutoring Provided
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="top-rated-teachers">
          <div className="container">
            <p className="supporting_line">
              Your Success Starts with the Best Guidance
            </p>
            <h2 className="section-title">
              Meet Our Top-Rated Teachers for <span>Learning</span> 
            </h2>
            <p className="supporting_para">
              Our handpicked educators are experts in their fields, dedicated to
              helping you achieve your academic goals with personalized teaching
              approaches and unparalleled expertise.
            </p>
            <div className="teachers-grid">
              <div className="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" className="teacher-image" />
                <div className="teacher-info">
                  <h3 className="teacher-name">John Doe</h3>
                  <p className="teacher-address">New York, USA</p>
                  <div className="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div className="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div className="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link className="btn">Visit Profile</Link>
                  </div>
                </div>
              </div>

              <div className="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" className="teacher-image" />
                <div className="teacher-info">
                  <h3 className="teacher-name">John Doe</h3>
                  <p className="teacher-address">New York, USA</p>
                  <div className="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div className="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div className="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link className="btn">Visit Profile</Link>
                  </div>
                </div>
              </div>

              <div className="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" className="teacher-image" />
                <div className="teacher-info">
                  <h3 className="teacher-name">John Doe</h3>
                  <p className="teacher-address">New York, USA</p>
                  <div className="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div className="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div className="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link className="btn">Visit Profile</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <Footer/>
      </div>
    </>
  );
};

export default Home;
