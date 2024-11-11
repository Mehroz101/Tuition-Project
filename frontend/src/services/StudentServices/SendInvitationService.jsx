import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_URL = `${API_BASE_URL}/api/student`;
const token = localStorage.getItem("token") || 0

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  },
};
export const SendInvitation = async (data) => {
  try {
    const { data } = await axios.post(`${API_URL}/sendinvtation`, data, config);
    console.log(data);
  } catch (error) {}
};
