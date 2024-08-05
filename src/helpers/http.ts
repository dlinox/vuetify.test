import axios, { AxiosInstance } from "axios";

export const http = (
  token: string = "",
  baseURL: string = import.meta.env.VITE_APP_API_URL as string
): AxiosInstance => {
  return axios.create({
    baseURL: baseURL,
    headers: token !== "" ? { Authorization: `Bearer ${token}` } : {},
  });
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});
