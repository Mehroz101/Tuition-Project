import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

export const TeacherSubject = async (subjectData) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/Updatesubjectinformation`,
      subjectData,
      config
    );
    pushNotify(response.status, "Subject", response.data.message);
    if (response.status === 200) {
      return response.status;
    }
    console.log(response);
  } catch (error) {
    pushNotify(error.status, "Subject", error.response.data.message);
  }
};
export const GetTeacherSubject = async () => {
  try {
    console.log("called");
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const { data } = await axios.get(`${API_URL}/getsubject`, config);
    console.log(data.data.subjects);
    return data.data.subjects;
  } catch (error) {}
};
export const removeSubject = async (sub) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(`${API_URL}/deletesubject`, sub, config);
    console.log(response);
    pushNotify(response.status, "Subject", response.data.message);
  } catch (error) {
    pushNotify(error.status, "Subject", error.response.data.message);
  }
};
