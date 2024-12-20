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
    educationId: null, // Add `educationId` as part of the initial state
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
      if (educationId) {
        setTeacherEducation((prev) => ({
          ...prev,
          educationId: educationId, // Update the existing object with `educationId`
        }));
      }

      console.log(teacherEducation);
      const data = await TeacherEducation(teacherEducation);

      if (data === true) {
        navigate("/profile/educationinformation");
      }
    } catch (error) {
      pushNotify(400, "SORRY", "Something went wrong. Try again later");
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
