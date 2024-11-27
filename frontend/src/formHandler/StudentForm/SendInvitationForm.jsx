import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { SendInvitation } from "../../services/StudentServices/SendInvitationService";

const SendInvitationForm = () => {
  const [sendInvitation, setSendInvitation] = useState({
    offeredPrice: 0,
    tuitionType: "online",
    from: "",
    to: "",
    subject: "",
    description: "",
    teacherId: null,
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
      const data = await SendInvitation(sendInvitation);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    sendInvitation,
    handleSubmit,
    setSendInvitation,
    handleChange,
  };
};
export default SendInvitationForm;
