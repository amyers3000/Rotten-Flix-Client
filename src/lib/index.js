import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_API;

export const SignIn = (credentials) => axios.post(`${baseURL}/auth`, credentials)
export const FetchMovies = () => axios.get(`${baseURL}/movies`)