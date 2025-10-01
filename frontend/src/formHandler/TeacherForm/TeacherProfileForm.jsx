import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { TeacherProfile } from "../../services/TeacherServices/TeacherProfileService";

const TeacherProfileForm = () => {
  const [teacherProfile, setTeacherProfile] = useState({
    fName: "",
    lName: "",
    tagline: "",
    fee: 0,
    country: "",
    city: "",
    studentHome: false,
    teacherHome: false,
    online: false,
    description: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setTeacherProfile((prevState) => ({
        ...prevState,
        [name]: checked, // Update the checkbox state
      }));
    } else {
      setTeacherProfile((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async () => {
    try {
    await TeacherProfile(teacherProfile);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    teacherProfile,
    setTeacherProfile,
    handleSubmit,
    handleChange,
  };
};
export default TeacherProfileForm;
