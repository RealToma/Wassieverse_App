import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST, // Specify your base URL with the desired port number
  //   timeout: 5000, // Set a timeout if needed
});

export default axiosInstance;
