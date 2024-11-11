import React from 'react'
import "../styles/Footer.css"
const Footer = () => {
  return (
    <>
        <footer>
  {/* <!-- Upper Part --> */}
  <div className="footer-upper">
    {/* <!-- Left Side --> */}
    <div className="footer-left">
      <h2>Tutor</h2>
      <p>
        Empowering students and teachers with a platform designed to bring quality education right to your doorstep.
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>

    {/* <!-- Right Side --> */}
    <div className="footer-right">
      <h3>Feel free to contact us</h3>
      <p><i className="fas fa-phone"></i> +1 234 567 890</p>
      <p><i className="fas fa-envelope"></i> info@yourwebsite.com</p>
      <p><i className="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, USA</p>
      <p><i className="fa-brands fa-whatsapp"></i> +1 234 567 890</p>
    </div>
  </div>

  {/* <!-- Lower Part --> */}
  {/* <!-- Lower Part --> */}
<div className="footer-lower">
  <div className="subject-column">
    <h4>BS Subjects</h4>
    <ul>
      <li>Information Technology</li>
      <li>Physics</li>
      <li>Mathematics</li>
      <li>Chemistry</li>
    </ul>
  </div>
  <div className="subject-column">
    <h4>Competitive Exams</h4>
    <ul>
      <li>GRE</li>
      <li>GMAT</li>
      <li>TOEFL</li>
      <li>IELTS</li>
    </ul>
  </div>
  <div className="subject-column">
    <h4>Classes</h4>
    <ul>
      <li>Class 1-5</li>
      <li>Class 6-10</li>
      <li>Class 10-12</li>
    </ul>
  </div>
  <div className="subject-column">
    <h4>Online Courses</h4>
    <ul>
      <li>Web Development</li>
      <li>Data Science</li>
      <li>Digital Marketing</li>
      <li>Graphic Design</li>
    </ul>
  </div>
</div>

</footer>

    </>
  )
}

export default Footer