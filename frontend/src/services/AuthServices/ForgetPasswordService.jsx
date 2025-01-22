import axios from "axios";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`;

export const ForgetPassword = async (data) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    // if(data.role === "teacher"){
    const response = await axios.post(`${API_URL}/forget`, data, config);
    console.log(response);
    return response;
    // }
    // if(data.role === "student"){
    //   const {data} = await axios.post(`${API_URL}/studentForgetPassword`, data, config);
    //   console.log(data)
    // }
  } catch (error) {
    console.log(error);
  }
};
