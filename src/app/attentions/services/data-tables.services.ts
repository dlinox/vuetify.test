import { http } from "@/helpers/http";

export const getItemsStudent = async () => {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post(`/attentions/items-students/`);
    return response.data;
  };
  
  