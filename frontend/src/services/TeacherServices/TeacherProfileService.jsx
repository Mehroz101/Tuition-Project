import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

export const TeacherProfile = async (teacherData) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/updateinformation`,
      teacherData,
      config
    );
    pushNotify(response.status, "Profile", response.data.message);
  } catch (error) {
    console.log(error.message);
    pushNotify(error.status, "Profile", error.response.data.message);
  }
};
export const GetTeacherProfile = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const data = await axios.get(`${API_URL}/getinformation`, config);
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};
