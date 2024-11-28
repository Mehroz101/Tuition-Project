import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

export const TeacherContact = async (ContactDetail) => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/updateinformation`,
      ContactDetail,
      config
    );
    pushNotify(response.status, "Contact", response.data.message);

    console.log(response);
  } catch (error) {
    pushNotify(error.status, "Contact", error.response.data.message);
  }
};
export const GetContactDetail = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const { data } = await axios.get(`${API_URL}/getinformation`, config);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
