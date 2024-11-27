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
    teacherId: "",
  });
  const handleChange = (e) => {
    setSendInvitation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (teacherId) => {
    try {
      setSendInvitation((prev) => ({
        ...prev,
        teacherId: teacherId,
      }));
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
    handleChange,
  };
};
export default SendInvitationForm;
