import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { Signup } from "../../services/AuthServices/SignupService";

const SignUpForm = () => {
  const [signup, setSignup] = useState({
    email: "",
    password: "",
    cPassword: "",
    role: "student",
  });
  const handleChange = (e) => {
    setSignup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      if(signup.email === "" || signup.password === "" || signup.cPassword === "" || signup.role === ""){
        return pushNotify(400, "Missing", "All fields are required")
      }
      const response = await Signup(signup);
      console.log(response)
      if (response.status == 201) {
        return response;
      }
    } catch (error) {
      // pushNotify(400, "SORRY", "Something wents wrong. Try again later");

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
