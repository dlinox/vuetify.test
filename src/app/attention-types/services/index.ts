import { http } from "@/helpers/http";

import type {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import type { TypeAtention } from "@/app/attention-types/types";

export const getItems = async (
  options: DataTableOptions
): Promise<DataTableResponse<TypeAtention>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post("/types-attention/items", options);

    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const saveItem = async (item: TypeAtention): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/types-attention", item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateItem = async (item: TypeAtention): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).put(`/types-attention/${item.id}`, item);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
