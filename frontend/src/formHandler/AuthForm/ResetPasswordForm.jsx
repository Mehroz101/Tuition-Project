import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { ResetPassword } from "../../services/AuthServices/ResetPasswordService";
const Resetpassword = () => {
  const [reset, setReset] = useState({
    password: "",
    cPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setReset((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (rolevalue) => {
    try {
        setReset((prev) => ({
        ...prev,
        role: rolevalue,
      }));
      console.log(reset);
      const response = await ResetPassword(reset);
      pushNotify(response.status, response.messageTitle, response.message);
      if (response.status === 201) {
        return 201;
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    reset,
    handleChange,
    handleSubmit,
  };
};
export default Resetpassword;
