import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { Signin } from "../../services/AuthServices/SigninService";

const SigninForm = () => {
  const [signin, setSignin] = useState({ email: "", password: "", role: "student" });

  const handleChange = (e) => {
    setSignin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFromSubmit = async () => {
    try {

      const response = await Signin(signin);
      if (response.status == 200) {
        return response;
      }
    } catch (error) {
      // pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    signin,
    handleFromSubmit,
    handleChange,
    setSignin
  };
};
export default SigninForm;
