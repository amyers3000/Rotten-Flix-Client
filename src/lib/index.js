import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_API;

export const SignIn = async (credentials) => {
    try {
        const response = await axios.post(`${baseURL}/auth`, credentials)
        return response.data
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
}
export const CreateNewUser = async (credentials) => {
    try {
        const response = await axios.post(`${baseURL}/auth/create`, credentials)
        return {message: response.data.message, status: response.status};
    } catch (error) {
        return { message: error.response.data.message, status: error.response.status }
    }
}
export const FetchMovies = () => axios.get(`${baseURL}/movies`)