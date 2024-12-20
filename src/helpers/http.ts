import axios, { AxiosInstance } from "axios";

import { useToast } from "vue-toast-notification";

const toast = useToast();

export const http = (
  token: string = "",
  baseURL: string = import.meta.env.VITE_APP_API_URL as string
): AxiosInstance => {
  let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: token !== "" ? { Authorization: `Bearer ${token}` } : {},
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data.message) {
        toast.success(response.data.message);
      }
      return response;
    },
    (error: any) => {
      toast.error(error.response?.data.message || "Error desconocido");
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpOTI = axios.create({
  baseURL: import.meta.env.VITE_APP_OTI_SERVICE_URL as string,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      import.meta.env.VITE_APP_OTI_SERVICE_TOKEN as string
    }`,
  },
});

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});
