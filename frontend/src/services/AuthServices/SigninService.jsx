import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`;
const token = localStorage.getItem("token") || 0;

export const Signin = async (userData) => {

  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    pushNotify(response.status, "Login", response.data.message);
    return response;
  } catch (error) {
    pushNotify(error.status, "Login", error.response.data.message);
  }
};
