import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;
const token = localStorage.getItem("token") || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const TeacherEducation = async (data) => {
  try {
    const { data } = await axios.post(`${API_URL}/education`, data, config);
    console.log(data);
  } catch (error) {}
};
export const GetTeacherEducation = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/geteducation`, config);
    console.log(data);
  } catch (error) {}
};
