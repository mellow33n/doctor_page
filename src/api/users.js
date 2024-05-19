import axios from "axios";

const apiBaseURL = "http://localhost:7777/users/";


const doctorDbAxios = axios.create({
  baseURL: apiBaseURL,
});

export const addNewUser = async function (userData) {
    try {
        const response = await doctorDbAxios.post('', userData);
        return response.data
    } catch (error) {
        return ('Помилка при виконанні POST-запиту:', error);
    }}