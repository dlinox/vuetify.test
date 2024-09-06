import axios, { AxiosInstance } from "axios";

import { useToast } from "vue-toast-notification";

// Inicializar toast una vez al cargar el módulo
const toast = useToast();

export const http = (
  token: string = "",
  baseURL: string = import.meta.env.VITE_APP_API_URL as string
): AxiosInstance => {
  let axiosInstance = axios.create({
    baseURL: baseURL,
    headers: token !== "" ? { Authorization: `Bearer ${token}` } : {},
  });

  console.log("se creo la instancia");

  // Interceptor para manejar respuestas con error
  axiosInstance.interceptors.response.use(
    (response) => response, // Deja pasar la respuesta si no hay error
    (error: any) => {
      toast.error(error.response?.data.message || "Error desconocido");

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});
