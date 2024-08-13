import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { Professor } from "@/app/professors/types";

export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<Professor>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/professors/items", options);
    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const saveItem = async (item: Professor): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/professors", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: Professor): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/professors/${item.id}`, item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
