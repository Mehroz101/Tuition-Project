import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`
const token = localStorage.getItem("token") || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const Signin = async (data) => {
  try {
    if(data.role === "teacher"){
      const {data} = await axios.post(`${API_URL}/teacherSignin`, data, config);
      console.log(data)
    }
  if(data.role === "student"){
    const {data} = await axios.post(`${API_URL}/studentSignin`, data, config);
    console.log(data)
  }

  } catch (error) {}
};
