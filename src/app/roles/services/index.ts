import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { Role } from "@/app/roles/types";

export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<Role>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/roles/items", options);

    for (let item of response.data.data) {
      item.permissions = item.permissions?.split(",");
      item.permissions = item.permissions?.map((p:string) => parseInt(p));
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const getPermissions = async (): Promise<string[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get("/roles/permissions");

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}


export const saveItem = async (item: Role): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/roles", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: Role): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/roles/${item.id}`, item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
