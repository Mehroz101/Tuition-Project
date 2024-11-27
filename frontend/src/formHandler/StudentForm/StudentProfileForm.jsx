import { useState } from "react";
import { pushNotify } from "../../errorHandler/Notify";
import {
  GetStudentProfile,
  StudentProfile,
} from "../../services/StudentServices/StudentProfileService";
import { useQuery } from "@tanstack/react-query";

const StudentProfileForm = () => {
  const [studentProfile, setStudentProfile] = useState({
    fName: "",
    lName: "",
    class: "",
    city: "",
    address: "",
    number: "",
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
      const response = await StudentProfile(studentProfile);
      console.log(response);
    } catch (error) {
      console.log(error.message);
      // pushNotify(400, "SORRY", "Something wents wrong. Try again later");
    }
  };
  return {
    studentProfile,
    handleSubmit,
    handleChange,
    setStudentProfile,
  };
};
export default StudentProfileForm;
