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
export const TeacherAvailabilty = async (data) => {
  try {
    const { data } = await axios.post(`${API_URL}/availabilty`, data, config);
    console.log(data);
  } catch (error) {}
};
export const GetTeacherAvailabilty = async () => {
  try {
    const { data } = await axios.post(`${API_URL}/getavailabilty`, config);
    console.log(data);
  } catch (error) {}
};
