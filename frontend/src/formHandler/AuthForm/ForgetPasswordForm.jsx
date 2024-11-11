import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { ForgetPassword } from "../../services/AuthServices/ForgetPasswordService";

const ForgetPasswordForm =  () => {
   
  const [forgetPassword, setForgetPassword] = useState({ email: "", role: "" });

  const handleChange = (e) => {
    setForgetPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (rolevalue) => {
    try {
        setForgetPassword((prev) => ({
        ...prev,
        role: rolevalue,
      }));
      console.log(forgetPassword);
      const response = await ForgetPassword(forgetPassword);
      pushNotify(response.status, response.messageTitle, response.message);
      if (response.status === 201) {
        return 201;
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    forgetPassword,
    handleSubmit,
    handleChange,
  };
};
export default ForgetPasswordForm;
