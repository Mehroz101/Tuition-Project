import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div class="login-page">
        <div class="website-name">
          <h1><Link to="/">Tutor</Link> </h1>
        </div>
        <div class="form-box">
          <h2>Login</h2>
          <p className="login_text">Enter email and password to login</p>
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

            <div class="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <Link >
              <button class="login-button">Login</button>
            </Link>
          </form>
          <div class="signup-text">
            <p>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
