import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const last = async () => {
  let response = await axios.get(`${API_URL}/attentions/last`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: any, type: string) => {
  let response = await axios.post(`${API_URL}/attentions/${type}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
