import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
    baseURL: " https://store-backend-391l.onrender.com/api",
    withCredentials: true, // send cookies to the server
});

export default axiosInstance;
