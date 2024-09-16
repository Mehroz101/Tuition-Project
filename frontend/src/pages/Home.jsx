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
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Home = () => {
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
              <button className="btn-student">Start as Student</button>
              <button className="btn-teacher">Join as Teacher</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Hero" />
          </div>
        </section>

        <section class="partners-section">
          <div class="container">
            <div class="partners-logos">
              <div class="partner-logo">
                <img src={Partner_1} alt="Partner 1" />
              </div>
              <div class="partner-logo">
                <img src={Partner_2} alt="Partner 2" />
              </div>
              <div class="partner-logo">
                <img src={Partner_3} alt="Partner 3" />
              </div>
              <div class="partner-logo">
                <img src={Partner_4} alt="Partner 4" />
              </div>
              <div class="partner-logo">
                <img src={Partner_5} alt="Partner 5" />
              </div>
              <div class="partner-logo">
                <img src={Partner_6} alt="Partner 5" />
              </div>
              <div class="partner-logo">
                <img src={Partner_7} alt="Partner 5" />
              </div>
            </div>
          </div>
        </section>

        <section class="how-it-works-section">
          <div class="container">
            <h2 class="section-title">How It Works</h2>
            <div class="steps">
              <div class="step">
                <img src={SearchIcon} alt="" />
                <h3 class="step-title">Search for Tutors</h3>
                <p class="step-description">
                  Enter your subject or location to find the best tutors in your
                  area.
                </p>
              </div>
              <div class="step">
                <img src={SelectIcon} alt="" />
                <h3 class="step-title">Choose Your Tutor</h3>
                <p class="step-description">
                  Review tutor profiles and select the one that best fits your
                  needs.
                </p>
              </div>
              <div class="step">
                <img src={CalenderIcon} alt="" />
                <h3 class="step-title">Schedule a Session</h3>
                <p class="step-description">
                  Set up a convenient time for your tutoring sessions and start
                  learning.
                </p>
              </div>
              <div class="step">
                <img src={MadelIcon} alt="" />
                <h3 class="step-title">Achieve Your Goals</h3>
                <p class="step-description">
                  Work with your tutor to reach your educational objectives and
                  track your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="why-online-section">
          <div class="container">
            <div class="section-content">
              <div class="image-container">
                <img src={OnlineLearning} alt="Online Learning Platform" />
              </div>
              <div class="text-container">
                <p class="small-text">
                  Discover the benefits of modern learning
                </p>
                <h2 class="section-title">
                  Experience the Future of Education with Our Innovative{" "}
                  <span>Online Platform</span>
                </h2>
                <p class="section-description">
                  Online platforms offer unparalleled flexibility, convenience,
                  and a vast array of resources tailored to your needs. Learn at
                  your own pace, access materials anytime, and connect with
                  experts from anywhere in the world. Embrace the future of
                  education with a platform designed to help you succeed.
                </p>
                <a href="#get-started" class="cta-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="stats-section">
          <div class="container">
            <div class="stats-row">
              <div class="stat-item">
                <img src={TeacherIcon} alt="Tutors" class="stat-icon" />
                <div class="stat-number">200+</div>
                <div class="stat-label">
                  Expert Tutors Available to Guide You
                </div>
              </div>
              <div class="stat-item">
                <img src={StudentIcon} alt="Students" class="stat-icon" />
                <div class="stat-number">5,000+</div>
                <div class="stat-label">
                  Students Actively Engaged in Learning
                </div>
              </div>
              <div class="stat-item">
                <img src={CourseIcon} alt="Courses" class="stat-icon" />
                <div class="stat-number">150+</div>
                <div class="stat-label">
                  Diverse Courses Offered Across Multiple Subjects
                </div>
              </div>
              <div class="stat-item">
                <img src={ScheduleIcon} alt="Hours" class="stat-icon" />
                <div class="stat-number">10,000+</div>
                <div class="stat-label">
                  Total Hours of Personalized Tutoring Provided
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="top-rated-teachers">
          <div class="container">
            <p className="supporting_line">
              Your Success Starts with the Best Guidance
            </p>
            <h2 class="section-title">
              Meet Our Top-Rated Teachers for <span>Learning</span> 
            </h2>
            <p className="supporting_para">
              Our handpicked educators are experts in their fields, dedicated to
              helping you achieve your academic goals with personalized teaching
              approaches and unparalleled expertise.
            </p>
            <div class="teachers-grid">
              <div class="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" class="teacher-image" />
                <div class="teacher-info">
                  <h3 class="teacher-name">John Doe</h3>
                  <p class="teacher-address">New York, USA</p>
                  <div class="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div class="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div class="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link class="btn">Visit Profile</Link>
                  </div>
                </div>
              </div>

              <div class="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" class="teacher-image" />
                <div class="teacher-info">
                  <h3 class="teacher-name">John Doe</h3>
                  <p class="teacher-address">New York, USA</p>
                  <div class="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div class="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div class="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link class="btn">Visit Profile</Link>
                  </div>
                </div>
              </div>

              <div class="teacher-card-home">
                <img src={Teacher_1} alt="Teacher Name" class="teacher-image" />
                <div class="teacher-info">
                  <h3 class="teacher-name">John Doe</h3>
                  <p class="teacher-address">New York, USA</p>
                  <div class="teacher-price">
                    <p>Starting Price: </p>{" "}
                    <span className="price">$30/hr</span>
                  </div>
                  <div class="teacher-qualification">
                    <p>Qualification: </p>{" "}
                    <span className="price">M.Sc. in Computer Science</span>
                  </div>
                  <div class="teacher-rating">
                    <p className="rating">Rating:</p>
                    <span>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                      <span>4.5</span>
                    </span>
                  </div>
                  <div className="visit-profile-btn">
                    <Link class="btn">Visit Profile</Link>
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
