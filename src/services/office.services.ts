import axios from "axios";
import { type Office } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getOffices = async () => {
  let response = await axios.get(`${API_URL}/offices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeOffice = async (office: Office) => {
  let response = await axios.post(`${API_URL}/offices`, office, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateOffice = async (office: Office) => {
  let response = await axios.put(`${API_URL}/offices/${office.id}`, office, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const options = async () => {
  let response = await axios.get(`${API_URL}/offices/options`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
