import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { Signin } from "../../services/AuthServices/SigninService";

const SigninForm = () => {
  const [signin, setSignin] = useState({ email: "", password: "", role: "" });

  const handleChange = (e) => {
    setSignin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFromSubmit = async (rolevalue) => {
    try {
      setSignin((prev) => ({
        ...prev,
        role: rolevalue,
      }));
      console.log(signin);
      const response = await Signin(signin);
      // pushNotify(response.status, response.messageTitle, response.message);
      // if (response.status === 201) {
      //   return 201;
      // }
    } catch (error) {
      console.log(error);
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    signin,
    handleFromSubmit,
    handleChange,
  };
};
export default SigninForm;
