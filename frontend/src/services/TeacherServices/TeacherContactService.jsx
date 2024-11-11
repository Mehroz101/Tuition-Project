import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;
const token = localStorage.getItem("token")  || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const TeacherContact = async (data) => {
  try {
    const { data } = await axios.post(`${API_URL}/contact`, data, config);
    console.log(data);
  } catch (error) {}
};
export const GetTeacherContact = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/getcontact`, config);
    console.log(data);
  } catch (error) {}
};