import { http } from "@/helpers/http";

export const getReportUsers = async () => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token).get("/reports/items/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};
