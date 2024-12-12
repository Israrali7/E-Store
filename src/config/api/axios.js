import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://backend-nodejs-alpha.vercel.app", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
