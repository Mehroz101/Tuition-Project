import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { ResetPassword } from "../../services/AuthServices/ResetPasswordService";
const Resetpassword = () => {
  const [reset, setReset] = useState({
    password: "",
    cPassword: "",
    role: "",
    token: "",
  });

  const handleChange = (e) => {
    setReset((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    if (reset.password === "" || reset.cPassword === "" || reset.role === "") {
      return pushNotify(400, "Missing", "All fields are required");
    }
    if (reset.password !== reset.cPassword) {
      return pushNotify(400, "Password Mismatch", "Passwords do not match");
    }
    try {
      console.log(reset);
      const response = await ResetPassword(reset);
      pushNotify(response.status, "Reset Password", response.data.message);
      if (response.status === 200) {
        return 200;
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    reset,
    setReset,
    handleChange,
    handleSubmit,
  };
};
export default Resetpassword;
