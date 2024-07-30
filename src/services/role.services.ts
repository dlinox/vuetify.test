import axios from "axios";
import { type Role } from "@/types";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/roles`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: Role) => {
  let response = await axios.post(`${API_URL}/roles`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: Role) => {
  let response = await axios.put(`${API_URL}/roles/${item.id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const permissionItems = async () => {
  let response = await axios.get(`${API_URL}/roles/permissions`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const assignPermissions = async (item: Role) => {
  let response = await axios.post(
    `${API_URL}/roles/${item.id}/permissions`,
    item,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
