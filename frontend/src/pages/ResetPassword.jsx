import "../styles/Signup.css";
import { Link, useParams } from "react-router-dom";
import Resetpassword from "../formHandler/AuthForm/ResetPasswordForm";
const ResetPassword = () => {
  const { reset, handleChange, handleSubmit } = Resetpassword();

  const { role } = useParams();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(reset);
    handleSubmit(role);
  };
  return (
    <>
      <div className="signup-page">
        <div className="website-name">
          <h1>
            <Link to="/">Tutor</Link>
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
