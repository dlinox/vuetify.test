import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { Worker } from "@/app/workers/types";
import { SelectItem } from "@/common/types/select.types";

export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<Worker>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/workers/items", options);
    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const saveItem = async (item: Worker): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/workers", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: Worker): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/workers/${item.id}`, item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};


// ------------------ COMMON ------------------
export const getItemsOffices = async (): Promise<SelectItem[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get("/selects/offices");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};