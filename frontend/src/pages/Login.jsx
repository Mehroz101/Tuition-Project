import React, { useEffect } from "react";
import "../styles/Login.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SigninForm from "../formHandler/AuthForm/SigninForm";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { role="student" } = useParams();

  const { signin, setSignin, handleChange, handleFromSubmit } = SigninForm();
  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await handleFromSubmit();
    if(response.status == 200){
      login(role,response.data.token)
      navigate("/");
    }
  };
  useEffect(() => {
    setSignin((prev) => ({
      ...prev,
      role: role,
    }));
  }, [role]);

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
