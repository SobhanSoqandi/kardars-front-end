import axios from "axios";
import { toast } from "react-hot-toast";

import getToken from "../function/getToken";
export const url = "http://127.0.0.1:8000";
const apikey = "YOUR_API_KEY";
export const api = axios.create({
  baseURL: url + "/api",
  withCredentials: false,
  headers: {
    apikey: apikey,
    // "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    if (response.config.method !== "get") {
      toast.success("عملیات با موفقیت انجام شد");
    }
    console.log(response);
    return response;
  },
  (error) => {
    //const message = error.response?.data?.message || "خطایی رخ داده است";
    console.log(error);
    // toast.error(message);
    return Promise.reject(error);
  },
);
