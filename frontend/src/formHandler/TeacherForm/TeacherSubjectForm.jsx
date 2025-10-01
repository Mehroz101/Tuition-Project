import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { TeacherSubject } from "../../services/TeacherServices/TeacherSubjectService";

const TeacherSubjectForm = () => {
  const [teacherSubject, setTeacherSubject] = useState({
    subject: "",
    level: "Beginner",
  });
  const handleChange = (e) => {
    setTeacherSubject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await TeacherSubject(teacherSubject);
      if (response === 200) {
        return response;
      }
    } catch (error) {
      console.log(error.message);
      // pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherSubject,
    handleSubmit,
    handleChange,
    setTeacherSubject,
  };
};
export default TeacherSubjectForm;
