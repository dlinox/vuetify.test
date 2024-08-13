import { http } from "@/helpers/http";

import { type Student } from "@/app/students/types";
import { SelectItem } from "@/common/types/select.types";

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
  let response = await http(token).post(`/attentions/${type}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

//today
export const getTodayAttentions = async () => {
  let token = localStorage.getItem("token") as string;
  let response = await http(token).get("/attentions/today");
  return response.data;
};


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
