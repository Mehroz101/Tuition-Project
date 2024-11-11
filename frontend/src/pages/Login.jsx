import React from "react";
import "../styles/Login.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SigninForm from "../formHandler/AuthForm/SigninForm";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { role } = useParams();

  const { signin, handleChange, handleFromSubmit } = SigninForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    handleFromSubmit(role);
    navigate("/");
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
          <h2>Login</h2>
          <p className="login_text">Enter email and password to login</p>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={signin.email}
                autocomplete
                placeholder="Enter your email"
              />
            </div>

            <div className="input-box">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={signin.password}
                autocomplete
                placeholder="Enter your password"
              />
            </div>

            <div className="forgot-password">
              <Link to={`/forgetpassword/${role}`}>Forgot Password?</Link>
            </div>

            <Link>
              <button className="login-button" onClick={handleSubmit}>
                Login
              </button>
            </Link>
          </form>
          <div className="signup-text">
            <p>
              Don't have an account? <Link to={`/signup/${role}`}>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
