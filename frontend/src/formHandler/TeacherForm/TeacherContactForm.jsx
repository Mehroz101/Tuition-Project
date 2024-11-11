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
      console.log(teacherContact);
      const { data } = await TeacherContact(teacherContact);
      console.log(data);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherContact,
    handleSubmit,
    handleChange,
  };
};
export default TeacherContactForm;
