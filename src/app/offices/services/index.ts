import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { Office } from "../types";

export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<Office>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/offices/items", options);

    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const saveItem = async (item: Office): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/offices", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: Office): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/offices/${item.id}`, item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};