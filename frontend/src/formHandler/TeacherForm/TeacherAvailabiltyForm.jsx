import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { StudentProfile } from "../../services/StudentServices/StudentProfileService";
import { TeacherAvailabilty } from "../../services/TeacherServices/TeacherAvailabiltyService";

const TeacherAvailabiltyForm = () => {
  const [teacherAvailabilty, setTeacherAvailabilty] = useState({
    start: "",
    end: "",
  });
  const handleChange = (e) => {
    setTeacherAvailabilty((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(teacherAvailabilty);
        const { data } = await TeacherAvailabilty(teacherAvailabilty);
        console.log(data);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherAvailabilty,
    handleSubmit,
    handleChange,
  };
};
export default TeacherAvailabiltyForm;
