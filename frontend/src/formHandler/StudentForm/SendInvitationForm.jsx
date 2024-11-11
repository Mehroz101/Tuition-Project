import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { SendInvitation } from "../../services/StudentServices/SendInvitationService";

const SendInvitationForm = () => {
  const [sendInvitation, setSendInvitation] = useState({
    offeredPrice:0,
    tuitionType:"online",
    from:"",
    to:"",
    subject:"",
    description:"",
  });
  const handleChange = (e) => {
    setSendInvitation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(sendInvitation);
      const { data } = await SendInvitation(sendInvitation);
      console.log(data);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    sendInvitation,
    handleSubmit,
    handleChange,
  };
};
export default SendInvitationForm;
