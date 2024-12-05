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
    if (localStorage.getItem("role") === "teacher") {
      return pushNotify(403, "Invitation", "You are not a student");
    }
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
    const response = await axios.get(`${API_URL}/getinvtation`, config);
    console.log(response.data.data);

    return response.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
export const cancelInvitation = async (invitationId) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/cancelinvtation/${invitationId}`,
      {},
      config
    );
    pushNotify(response.status, "Invitation", response.data.message);

    return response;
  } catch (error) {
    pushNotify(error.status, "Invitation", error.response.data.message);
    console.log(error.message);
  }
};
