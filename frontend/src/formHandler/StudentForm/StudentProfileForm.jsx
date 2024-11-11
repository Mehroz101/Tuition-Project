import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import { StudentProfile } from "../../services/StudentServices/StudentProfileService";

const StudentProfileForm = () => {
  const [studentProfile, setStudentProfile] = useState({
    fName: "",
    lName: "",
    class: "",
    city: "",
    address: "",
    schoolName: "",
  });
  const handleChange = (e) => {
    setStudentProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async () => {
    try {
      console.log(studentProfile);
      const { data } = await StudentProfile(studentProfile);
      console.log(data);
    } catch (error) {
      pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    studentProfile,
    handleSubmit,
    handleChange,
  };
};
export default StudentProfileForm;
