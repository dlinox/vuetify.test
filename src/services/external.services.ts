import axios from "axios";
import { type Worker } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/externals`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response.data;
};

export const storeItem = async (item: Worker) => {
  let response = await axios.post(`${API_URL}/externals`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: Worker) => {
  let response = await axios.put(`${API_URL}/externals/${item.id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
