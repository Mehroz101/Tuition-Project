import "../styles/Signup.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Resetpassword from "../formHandler/AuthForm/ResetPasswordForm";
import { useEffect } from "react";
const ResetPassword = () => {
  const { reset, setReset, handleChange, handleSubmit } = Resetpassword();

  const { role } = useParams();
  const { token } = useParams();
  console.log(role)
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(reset);
    const response = await handleSubmit();
    if (response === 200) {
      console.log("success");
      navigate(`/login/${role}`);
    }
  };
  useEffect(() => {
    setReset((prev) => ({
      ...prev,
      role: role,
    }));
    setReset((prev) => ({
      ...prev,
      token: token,
    }));
  }, [role, token]);
  return (
    <>
      <div className="signup-page">
        <div className="website-name">
          <h1>
            <Link to="/">The Tutor Ground</Link>
          </h1>
        </div>
        <div className="form-box">
          <h2>Reset Password</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-box">
              <label for="newpassword">New Password</label>
              <input
                type="password"
                id="newpassword"
                name="password"
                onChange={handleChange}
                value={reset.password}
                placeholder="Enter new password"
              />
            </div>
            <div className="input-box">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="cPassword"
                name="cPassword"
                onChange={handleChange}
                value={reset.cPassword}
                placeholder="Confirm password"
              />
            </div>

            <button
              type="submit"
              className="signup-button"
              onClick={handleFormSubmit}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
