import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import type { SelectItem } from "@/common/types/select.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { User } from "@/app/users/types";


export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<User>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/users/items", options);
    

    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const saveItem = async (item: User): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/users", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: User): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/users/${item.id}`, item);
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

export const getItemsRoles = async (): Promise<SelectItem[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get("/selects/roles");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
