import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import SignUpForm from "../formHandler/AuthForm/SignUpForm";
const Signup = () => {
  const { signup, setSignup, handleChange, handleSubmit } = SignUpForm();

  const { role="student" } = useParams();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await handleSubmit();
    if (response.status == 201) {
      navigate(`/login/${role}`);
    }
  };
  useEffect(() => {
    setSignup((prev) => ({
      ...prev,
      role: role,
    }));
  }, [role]);
  return (
    <>
      <div className="signup-page">
        <div className="website-name">
          <h1>
            <Link to="/">The Tutor Ground</Link>{" "}
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
                onChange={handleChange}
                value={signup.email}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
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
                required
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
