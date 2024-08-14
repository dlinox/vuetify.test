import { http } from "@/helpers/http";

import { type Student } from "@/app/students/types";
import { SelectItem } from "@/common/types/select.types";
import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";
import {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";
import { AttentionReport } from "@/app/attentions/types";

//getItemsStudent

export const getItemsStudent = async (
  options: DataTableOptions,
  type: string
): Promise<DataTableResponse<AttentionReport>> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post(
      "/attentions/items-students/" + type,
      options
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

//get attention person
export const getHistoty = async (document: string): Promise<any[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get("/attentions/history/" + document);
    return response.data;
  } catch {
    return [];
  }
};

export const receiveStudent = async (data: Student): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post(
      `/attentions/student/receive/${data.document_number}`,
      data
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const getStudentByDocument = async (
  document: string
): Promise<Student | null> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/attentions/student/by-document/${document}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getProfessorByDocument = async (
  document: string
): Promise<any> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/attentions/professor/by-document/${document}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getWorkerByDocument = async (document: string): Promise<any> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/attentions/worker/by-document/${document}`
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export const storeItem = async (data: any, type: string) => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).post(`/attentions/${type}`, data);
  return response.data;
};

export const updateItem = async (data: any) => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).put(`/attentions`, data);
  return response.data;
};

//today
export const getTodayAttentions = async () => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).get("/attentions/today");
  return response.data;
};

//items-student

//  mover a common

//worker
export const searchWorker = async (term: string) => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).get(`/attentions/worker/search/${term}`);
  return response.data;
};

//professor
export const searchProfessor = async (term: string) => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).get(`/attentions/professor/search/${term}`);
  return response.data;
};

export const getTypeAttentions = async (): Promise<SelectItem[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get(`/selects/type-attentions`);
    return response.data;
  } catch (error) {
    return [];
  }
};

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
