import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;
export const TeacherEducation = async (education) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(education);
    const response = await axios.post(
      `${API_URL}/education`,
      education,
      config
    );
    pushNotify(response.status, "Education", response.data.message);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error) {
    pushNotify(error.status, "Education", error.response.data.message);
  }
};
export const GetTeacherEducation = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(`${API_URL}/geteducation`);
    const data = await axios.get(`${API_URL}/geteducation`, config);
    console.log(data.data.data);
    return data.data.data;
  } catch (error) {
    pushNotify(error.status, "Education", error.response.data.message);
  }
};
export const GetEducationDetail = async (educationId) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(
      `${API_URL}/geteducation/${educationId}`,
      config
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    pushNotify(error.status, "Education", error.response.data.message);
  }
};
export const DeleteEducation = async (educationId) => {
  try {
    const token = localStorage.getItem("usertoken");
    console.log(token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/deleteeducation/${educationId}`,
      "",
      config
    );
    console.log(response);
    pushNotify(response.status, "Education", response.data.message);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    pushNotify(error.status, "Education", error.response.data.message);
  }
};
