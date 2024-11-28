import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/student`;
const token = localStorage.getItem("token") || 0;

export const StudentProfile = async (stdData) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(stdData);
    const response = await axios.post(
      `${API_URL}/information`,
      stdData,
      config
    );
    pushNotify(response.status, "Profile", response.data.message);
    return response;
  } catch (error) {
    pushNotify(error.status, "Profile", error.response.data.message);

    console.log(error.message);
  }
};
export const GetStudentProfile = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const data = await axios.get(`${API_URL}/getinformation`, config);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
