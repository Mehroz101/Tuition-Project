import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { Signup } from "../../services/AuthServices/SignupService";

const SignUpForm = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    cPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (rolevalue) => {
    try {
      setSignup((prevState) => ({
        ...prevState, // Spread the previous state
        role: rolevalue, // Update the role property
      }));
      
      const response = await Signup(signup);
      pushNotify(response.status, response.messageTitle, response.message);
      if (response.status === 201) {
        return 201;
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    signup,
    setSignup,
    handleChange,
    handleSubmit,
  };
};

export default SignUpForm;
