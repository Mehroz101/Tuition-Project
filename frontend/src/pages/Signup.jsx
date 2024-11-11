import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import { Link, useParams } from "react-router-dom";
import SignUpForm from "../formHandler/AuthForm/SignUpForm";
const Signup = () => {
  const {signup,handleChange,handleSubmit} = SignUpForm()
  
  const {role} = useParams()

 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(signup);
    handleSubmit(role)
  };
  return (
    <>
      <div className="signup-page">
        <div className="website-name">
          <h1>
            <Link to="/">Tutor</Link>{" "}
          </h1>
        </div>
        <div className="form-box">
          <h2>Create an account</h2>
          <p className="signup_text">Create an account through email</p>
          <form onSubmit={handleFormSubmit}>
            <div className="input-box">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autocomplete
                onChange={handleChange}
                value={signup.email}
                placeholder="Enter your email"
              />
            </div>

            <div className="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                autocomplete
                onChange={handleChange}
                value={signup.password}
                placeholder="Enter your password"
              />
            </div>
            <div className="input-box">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="passwconfirmPasswordord"
                name="cPassword"
                autocomplete
                onChange={handleChange}
                value={signup.cPassword}
                placeholder="Confirm password"
              />
            </div>

              <button type="submit" className="signup-button">
                signup
              </button>
          </form>
          <div className="signup-text">
            <p>
              Doyou have an account? <Link to={`/login/${role}`}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
