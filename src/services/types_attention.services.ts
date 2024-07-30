import axios from "axios";
import { type TypesAttention } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/types-attention`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: TypesAttention) => {
  let response = await axios.post(`${API_URL}/types-attention`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: TypesAttention) => {
  let response = await axios.put(
    `${API_URL}/types-attention/${item.id}`,
    item,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const options = async () => {
  let response = await axios.get(`${API_URL}/types-attention/options`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}