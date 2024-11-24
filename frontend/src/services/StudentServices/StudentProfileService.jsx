import axios from "axios";
const API_BASE_URL = import.meta.env.API_BASE_URL;
// const API_URL = `${API_BASE_URL}/api/student`;
const API_URL = `http://localhost:5000/api/student`;

export const StudentProfile = async (stdData) => {
  try {
    const token = localStorage.getItem("usertoken");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(stdData)
    const data = await axios.post(`${API_URL}/information`, stdData, config);
    console.log(data);
  } catch (error) {
    console.log(error.message)
  }
};
export const GetStudentProfile = async () => {
  try {
    const token = localStorage.getItem("usertoken");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const data = await axios.get(`${API_URL}/getinformation`, config);
    console.log(data);
  } catch (error) {}
};
