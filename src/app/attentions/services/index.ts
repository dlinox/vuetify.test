import { http } from "@/helpers/http";

import { type Student } from "@/app/students/types";
import { SelectItem } from "@/common/types/select.types";
import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";
import {
  DataTableOptions,
  DataTableResponse,
} from "@/common/types/data-table.types";
import { AttentionReport } from "@/app/attentions/types";
import axios from "axios";

import { useToast } from "vue-toast-notification";

// Inicializar toast una vez al cargar el módulo
const toast = useToast();

//GET STUDENT FROM OTI SERVICE
export const _getStudentByCode = async (code: string): Promise<any> => {
  try {
    const token = localStorage.getItem("token") as string;

    let response = await http(token).get(`/attentions/student/by-code/${code}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const getStudentByCode = async (code: string): Promise<any> => {
  try {
    const token =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1NmRiMThjMS00ODU1LTg4ODgtYzI5ZS0wMDAwM2ZhMTkxNTYiLCJzdWIiOiJGRUE5MDVDRS0zRDYxLTExRUYtOEM1Qy0wMDUwNTY4OTAwM0QiLCJleHAiOjE3NTIwMDQ0MTYsIm5iZiI6MTcyMDQ2ODQxNywiaWF0IjoxNzIwNDY4NDE2LCJqdGkiOiJNVGN5TURRMk9EUXhOZz09In0.BGiW_HKnnyImObXWytQLi_c93TgutdoJdhW7fYwNuKsEvIDbahe0DbsJaIwHtdTj1EYaqPp_fcz8IbxfHIftsw" as string;

    let response = await axios.get(
      `http://service5.unap.edu.pe/CONSULTAS_BIENESTAR/v1/student/byCode/${code}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("No se encontró al estudiante");
    return null;
  }
};
//

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
    return response.data;
  } catch (error) {
    console.error(error);
    return DataTableDefaultResponse;
  }
};

export const deleteItem = async (id: number): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).delete("/attentions/" + id);
    return true;
  } catch (error) {
    return false;
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

export const receiveStudent = async (data: any): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post(
      `/attentions/student/receive/${data.studentCode}`,
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

export const exportPdf = async (data: any, filters: any): Promise<void> => {
  try {
    const dataPdf = {
      data: data,
      filters: {
        ...filters.filters,
        start_date: filters.startDate,
        end_date: filters.endDate,
      },
    };
    const token = localStorage.getItem("token") as string;

    let response = await http(token).post("/pdf/report", dataPdf, {
      responseType: "blob",
    });

    let responseBlod = await response.data;

    let url = window.URL.createObjectURL(responseBlod);

    var a = document.createElement("a");
    a.href = url;
    a.download = "reporter.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error al generar o descargar el PDF:", error);
  }
};

export const getItemsUsers = async (): Promise<SelectItem[]> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get("/selects/users");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const sendEmail = async (data: any): Promise<boolean> => {
  try {
    let token = localStorage.getItem("token") as string;
    await http(token).post("/survey/send-email", data);
    return true;
  } catch (error) {
    return false;
  }
};

export const getSurvey = async (token: string): Promise<any> => {
  try {
    let response = await http().get(`/survey/${token}`);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const responseSurvey = async (
  data: any,
  token: string
): Promise<boolean> => {
  try {
    await http().put("/survey/response/" + token, data);
    return true;
  } catch (error) {
    return false;
  }
};

export const getNextNumByType = async (typeId: number): Promise<number> => {
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).get(
      `/attentions/next-num-by-type/${typeId}`
    );
    return response.data as number;
  } catch (error) {
    return 0;
  }
};
