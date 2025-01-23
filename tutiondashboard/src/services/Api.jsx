import axios from "axios";
const API_URL = import.meta.env.REACT_APP_API_BASE_URL + "/api/admin";
import { notify } from "../utils/notification";

export const SignIn = async (data) => {
  try {
    const token = localStorage.getItem("tuitionAdminToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(`${API_URL}/login`, data, config);
    if (response.data.success) {
      notify("success", response.data.message);
      return response.data;
    } else {
      notify("error", response.data.message);
      return;
    }
  } catch (error) {
    notify("error", error.response.data.message);
    return;
  }
};
export const DashboardData = async () => {
  try {
    const token = localStorage.getItem("tuitionAdminToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    console.log(token);
    const response = await axios.get(`${API_URL}/stats`, config);
    if (response.data.success) {
      return response.data.data;
    } else {
      notify("error", response.data.message);
      return;
    }
  } catch (error) {
    notify("error", error.response.data.message);
    return;
  }
};
export const GetStudentData = async () => {
  try {
    const token = localStorage.getItem("tuitionAdminToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(`${API_URL}/allstudentdata`, config);
    if (response.data.success) {
      return response.data.data;
    } else {
      notify("error", response.data.message);
      return;
    }
  } catch (error) {
    notify("error", error.response.data.message);
    return;
  }
};
export const GetTeacherData = async () => {
  try {
    const token = localStorage.getItem("tuitionAdminToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(`${API_URL}/allteacherdata`, config);
    if (response.data.success) {
      return response.data.data;
    } else {
      notify("error", response.data.message);
      return;
    }
  } catch (error) {
    notify("error", error.response.data.message);
    return;
  }
};

export const GetInvitationData = async () => {
  try {
    const token = localStorage.getItem("tuitionAdminToken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(`${API_URL}/allinvitations`, config);
    if (response.data.success) {
      return response.data.data;
    } else {
      notify("error", response.data.message);
      return;
    }
  } catch (error) {
    notify("error", error.response.data.message);
    return;
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
    notify("success", "Invitation", "Invitation accepted");
    return response;
  } catch (error) {
    notify("error", "Invitation", "Invitation not accepted");
    console.log(error.message);
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
    notify("success", "Invitation", "Invitation rejected");
    return response;
  } catch (error) {
    notify("error", "Invitation", "Invitation not rejected");
    console.log(error.message);
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
    notify("success", "Invitation", "Invitation closed");
    return response;
  } catch (error) {
    notify("error", "Invitation", "Invitation not closed");
    console.log(error.message);
  }
};
