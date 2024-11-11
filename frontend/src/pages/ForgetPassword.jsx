import React from "react";
import "../styles/Login.css";
import { Link, useParams } from "react-router-dom";
import ForgetPasswordForm from "../formHandler/AuthForm/ForgetPasswordForm";
const ForgetPassword = () => {
  const { forgetPassword, handleSubmit, handleChange } = ForgetPasswordForm();
  const { role } = useParams();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(role);
  };
  return (
    <>
      <div className="login-page">
        <div className="website-name">
          <h1>
            <Link to="/">Tutor</Link>{" "}
          </h1>
        </div>
        <div className="form-box">
          <h2>Forget Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={forgetPassword.email}
                placeholder="Enter your email"
              />
            </div>

            <div className="forgot-password">
              <Link to={`/resetpassword/${role}`}>Signin here</Link>
            </div>

            <Link>
              <button className="login-button" onClick={handleFormSubmit}>
                Send email
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
