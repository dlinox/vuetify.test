import axios from "axios";
import { type User } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const offices = async () => {
  let response = await axios.get(`${API_URL}/users/offices`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const roles = async () => {
  let response = await axios.get(`${API_URL}/users/roles`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: User) => {
  let response = await axios.post(`${API_URL}/users`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: User) => {
  let response = await axios.put(`${API_URL}/users/${item.id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

