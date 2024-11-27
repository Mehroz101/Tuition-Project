import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/user`;
export const Signup = async (userData) => {

  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    pushNotify(response.status, "Registration", response.data.message);
    return response;
  } catch (error) {
    pushNotify(error.status, "Registration", error.response.data.message);
    console.log(error.message);
  }
};
