import axios from "axios";

const apiBaseURL = "http://localhost:7777/";

const doctorDbAxios = axios.create({
  baseURL: apiBaseURL,
  timeout: 1000,
});

export const addNewUser = async function (userData) {
  try {
    const response = await doctorDbAxios.post("/users", userData);
    return response.data;
  } catch (error) {
    return "Помилка при виконанні POST-запиту:", error;
  }
};

export const getLogin = async function (userData) {
  try {
    const response = await doctorDbAxios.post("/login", userData);
    return response.data;
  } catch (error) {
    return "Помилка при виконанні POST-запиту:", error;
  }
};
