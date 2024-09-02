import React from "react";
import "../styles/Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div class="signup-page">
        <div class="website-name">
          <h1><Link to="/">Tutor</Link> </h1>
        </div>
        <div class="form-box">
          <h2>Create an account</h2>
          <p className="signup_text">Create an account through email</p>
          <form action="">
            <div class="input-box">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>

            <div class="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div class="input-box">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="passwconfirmPasswordord"
                name="password"
                placeholder="Confirm password"
              />
            </div>

            

            <Link>
              <button class="signup-button">signup</button>
            </Link>
          </form>
          <div class="signup-text">
            <p>
              Doyou have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
