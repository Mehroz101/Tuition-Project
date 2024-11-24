import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.API_BASE_URL;
// const API_URL = `${API_BASE_URL}/api/auth`;
const API_URL = `http://localhost:5000/api/auth`;

export const Signin = async (userData) => {
  console.log(API_URL);
  console.log(userData);
  // const token = localStorage.getItem("token");
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + token,
  //   },
  // };
  try {
    const response  = await axios.post(`${API_URL}/login`, userData);
    pushNotify(response.status, "Login", response.data.message)
    return response;
  } catch (error) {
    pushNotify(error.status, "Login", error.response.data.message);
    console.log(error.message);
  }
};
