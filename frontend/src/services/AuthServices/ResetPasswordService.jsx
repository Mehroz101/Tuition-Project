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

export const ResetPassword = async (data) => {
  try {
    // if(data.role === "teacher"){
    const response = await axios.put(`${API_URL}/reset`, data, config);
    return response;
    //   }
    // if(data.role === "student"){
    //   const {data} = await axios.post(`${API_URL}/studentResetPassword`, data, config);
    //   console.log(data)
    // }
  } catch (error) {
    console.log(error);
  }
};
