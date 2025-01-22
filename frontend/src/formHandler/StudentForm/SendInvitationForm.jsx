import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { SendInvitation } from "../../services/StudentServices/SendInvitationService";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      if (data.data.success) {
        navigate("/studentProfile/tuitions");
      }
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
