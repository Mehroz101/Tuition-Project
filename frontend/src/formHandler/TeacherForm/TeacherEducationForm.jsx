import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { StudentProfile } from "../../services/StudentServices/StudentProfileService";
import { TeacherEducation } from "../../services/TeacherServices/TeacherEducationService";

const TeacherEducationForm = () => {
  const [teacherEducation, setTeacherEducation] = useState({
    degreeName: "",
    instituteName: "",
    startDate: "",
    endData: "",
    description: "",
  });
  const handleChange = (e) => {
    setTeacherEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(teacherEducation);
      const { data } = await TeacherEducation(teacherEducation);
      console.log(data);
    } catch (error) {
      // pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherEducation,
    handleSubmit,
    handleChange,
    setTeacherEducation,
  };
};
export default TeacherEducationForm;
