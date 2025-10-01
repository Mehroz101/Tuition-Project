import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

export const TeacherAvailabilty = async (availability) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/availabilty`,
      availability,
      config
    );
    pushNotify(response.status, "Availability", response.data.message);
  } catch (error) {
    pushNotify(error.status, "Availability", error.response.data.message);
  }
};
export const GetTeacherAvailabilty = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const { data } = await axios.get(`${API_URL}/getavailabilty`, config);
    return data.data.availability[0];
  } catch (error) {
    pushNotify(error.status, "Availability", error.response.data.message);
  }
};
