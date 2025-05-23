import axios from "axios";
import { ENV } from "./env";

// console.log("[ENV]", ENV.API_BASE_URL);

export const axiosInstance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
