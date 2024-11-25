import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";
const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/student`;
export const SendInvitation = async (invitationData) => {
  const token = localStorage.getItem("usertoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.post(
      `${API_URL}/sendinvtation`,
      invitationData,
      config
    );
    pushNotify(response.status, "Invitation", response.data.message);
    return response;
  } catch (error) {
    console.log(error.message);
    pushNotify(error.status, "Invitation", error.response.data.message);
  }
};
export const getInvitation = async () => {
  const token = localStorage.getItem("usertoken");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  try {
    const response = await axios.get(
      `${API_URL}/getinvtation`,
      config
    );
    pushNotify(response.status, "Invitation", response.data.message);
    return response;
  } catch (error) {
    console.log(error.message);
    pushNotify(error.status, "Invitation", error.response.data.message);
  }
};
