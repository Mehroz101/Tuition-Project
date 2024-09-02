import React from 'react'
import "../styles/Footer.css"
const Footer = () => {
  return (
    <>
        <footer>
  {/* <!-- Upper Part --> */}
  <div class="footer-upper">
    {/* <!-- Left Side --> */}
    <div class="footer-left">
      <h2>Tutor</h2>
      <p>
        Empowering students and teachers with a platform designed to bring quality education right to your doorstep.
      </p>
      <div class="social-icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
      </div>
    </div>

    {/* <!-- Right Side --> */}
    <div class="footer-right">
      <h3>Feel free to contact us</h3>
      <p><i class="fas fa-phone"></i> +1 234 567 890</p>
      <p><i class="fas fa-envelope"></i> info@yourwebsite.com</p>
      <p><i class="fas fa-map-marker-alt"></i> 123 Main Street, Anytown, USA</p>
      <p><i class="fa-brands fa-whatsapp"></i> +1 234 567 890</p>
    </div>
  </div>

  {/* <!-- Lower Part --> */}
  {/* <!-- Lower Part --> */}
<div class="footer-lower">
  <div class="subject-column">
    <h4>BS Subjects</h4>
    <ul>
      <li>Information Technology</li>
      <li>Physics</li>
      <li>Mathematics</li>
      <li>Chemistry</li>
    </ul>
  </div>
  <div class="subject-column">
    <h4>Competitive Exams</h4>
    <ul>
      <li>GRE</li>
      <li>GMAT</li>
      <li>TOEFL</li>
      <li>IELTS</li>
    </ul>
  </div>
  <div class="subject-column">
    <h4>Classes</h4>
    <ul>
      <li>Class 1-5</li>
      <li>Class 6-10</li>
      <li>Class 10-12</li>
    </ul>
  </div>
  <div class="subject-column">
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