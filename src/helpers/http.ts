import axios, { AxiosInstance, AxiosError  } from "axios";

import { useToast } from 'vue-toast-notification';

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
  
  console.log('se creo la instancia');

   // Interceptor para manejar respuestas con error
   axiosInstance.interceptors.response.use(
    (response) => response,  // Deja pasar la respuesta si no hay error
    (error: AxiosError) => {
      // Manejo de errores centralizado
      console.error("Error en la respuesta de Axios:", error);

      toast.error("Ocurrio un error");
      // Opcional: puedes personalizar qué hacer aquí, como lanzar una alerta, registrar un error, etc.
      
      // También puedes decidir rechazar la promesa con el error para manejarlo donde se llame
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
