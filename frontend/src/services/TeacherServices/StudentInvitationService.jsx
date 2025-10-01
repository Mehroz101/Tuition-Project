import axios from "axios";
import { pushNotify } from "../../errorHandler/Notify";

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/teacher`;

export const fetchStudentInvitations = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(`${API_URL}/getteacherinvtation`, config);
    return response.data.data || [];
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
export const acceptRequest = async (id) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/acceptinvtation/${id}`,
      {},
      config
    );
    pushNotify(response.status, "Invitation", "Invitation accepted");
    return response;
  } catch (error) {
    pushNotify(error.status, "Invitation", "Invitation not accepted");
  }
};
export const rejectRequest = async (id) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/rejectinvtation/${id}`,
      {},
      config
    );
    pushNotify(response.status, "Invitation", "Invitation rejected");
    return response;
  } catch (error) {
    pushNotify(error.status, "Invitation", "Invitation not rejected");
  }
};
export const closeRequest = async (id) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/closeinvtation/${id}`,
      {},
      config
    );
    pushNotify(response.status, "Invitation", "Invitation closed");
    return response;
  } catch (error) {
    pushNotify(error.status, "Invitation", "Invitation not closed");
  }
};
export const updateLink = async ({ id, link }) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `${API_URL}/updatelink/${id}`,
      { link: link },
      config
    );
    pushNotify(response.status, "Invitation", response.data.message);
    return response;
  } catch (error) {
    pushNotify(error.status, "Invitation", error.response.data.message);
  }
};
