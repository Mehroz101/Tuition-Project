import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`
const token = localStorage.getItem("token") || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};

export const ResetPassword = async (data) => {
  try {
    if(data.role === "teacher"){
      const {data} = await axios.post(`${API_URL}/teacherResetPassword`, data, config);
      console.log(data)
    }
  if(data.role === "student"){
    const {data} = await axios.post(`${API_URL}/studentResetPassword`, data, config);
    console.log(data)
  }

  } catch (error) {}
};
