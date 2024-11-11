import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/student`;
const token = localStorage.getItem("token") || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const StudentProfile = async (data) => {
  try {
    const { data } = await axios.post(`${API_URL}/information`, data, config);
    console.log(data);
  } catch (error) {}
};
export const GetStudentProfile = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/getinformation`, config);
    console.log(data);
  } catch (error) {}
};
