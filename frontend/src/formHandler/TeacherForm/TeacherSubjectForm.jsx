import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { TeacherSubject } from "../../services/TeacherServices/TeacherSubjectService";

const TeacherSubjectForm = () => {
  const [teacherSubject, setTeacherSubject] = useState({
    subject: "",
    level: "",
  });
  const handleChange = (e) => {
    setTeacherSubject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(teacherSubject);
        const { data } = await TeacherSubject(teacherSubject);
        console.log(data);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherSubject,
    handleSubmit,
    handleChange,
  };
};
export default TeacherSubjectForm;
