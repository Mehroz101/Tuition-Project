import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { ForgetPassword } from "../../services/AuthServices/ForgetPasswordService";

const ForgetPasswordForm = () => {
  const [forgetPassword, setForgetPassword] = useState({ email: "", role: "" });

  const handleChange = (e) => {
    setForgetPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(forgetPassword);
      const response = await ForgetPassword(forgetPassword);
      if (response.status == 200) {
        console.log("response");
        console.log(response.status);
        pushNotify(response.status, "Forget Password", response.data.message);
        return 200;
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    forgetPassword,
    handleSubmit,
    handleChange,
    setForgetPassword,
  };
};
export default ForgetPasswordForm;
