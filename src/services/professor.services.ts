import axios from "axios";
import { type Professor } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/professors`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: Professor) => {
  let response = await axios.post(`${API_URL}/professors`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: Professor) => {
  let response = await axios.put(`${API_URL}/professors/${item.id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
