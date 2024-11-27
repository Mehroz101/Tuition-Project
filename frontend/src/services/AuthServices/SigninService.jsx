import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`;
const token = localStorage.getItem("token") || 0;

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const Signin = async (std) => {
  try {
    const { data } = await axios.post(`${API_URL}/teacherSignin`, std, config);
    console.log(data);
  } catch (error) {}
};
