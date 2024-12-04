import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { TeacherEducation } from "../../services/TeacherServices/TeacherEducationService";
import { useNavigate } from "react-router-dom";

const TeacherEducationForm = () => {
  const [teacherEducation, setTeacherEducation] = useState({
    degreeName: "",
    instituteName: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setTeacherEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (educationId = null) => {
    try {
      if (educationId !== null || educationId !== undefined) {
        setTeacherEducation((prev) => {
          [...prev], (educationId = educationId);
        });
      }
      console.log(teacherEducation);
      const data = await TeacherEducation(teacherEducation);
      // console.log(data);
      if (data === true) {
        navigate("/profile/educationinformation");
      }
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
