import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { StudentProfile } from "../../services/StudentServices/StudentProfileService";
import { TeacherContact } from "../../services/TeacherServices/TeacherContactService";

const TeacherContactForm = () => {
  const [teacherContact, setTeacherContact] = useState({
    number: "",
    email: "",
    whatsapp: "",
    website: "",
  });
  const handleChange = (e) => {
    setTeacherContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
       await TeacherContact(teacherContact);
    } catch (error) {}
  };
  return {
    teacherContact,
    handleSubmit,
    handleChange,
    setTeacherContact,
  };
};
export default TeacherContactForm;
