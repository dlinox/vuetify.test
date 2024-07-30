import axios from "axios";
import { type Student } from "@/types";
import studentsFake from "@/data/students.fakes.json";
const API_URL = import.meta.env.VITE_APP_API_URL;

// const SERVICE_URL = import.meta.env.VITE_APP_SERVICE_URL;

export const getItems = async () => {
  let response = await axios.get(`${API_URL}/students`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const storeItem = async (item: Student) => {
  let response = await axios.post(`${API_URL}/students`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateItem = async (item: Student) => {
  let response = await axios.put(`${API_URL}/students/${item.id}`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getStudentFake = async (term: string) => {
  const students = studentsFake;

  const filteredStudents = students.filter((student) => {
    return (
      student.document_number.toLowerCase().includes(term.toLowerCase()) ||
      student.student_code.toLowerCase().includes(term.toLowerCase())
    );
  });

  return filteredStudents;
};

export const receiveStudent = async (item: any, document: string) => {
  let response = await axios.post(
    `${API_URL}/students/receive/${document}`,
    item,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

//by-document
export const getStudentByDocument = async (document: string) => {
  let response = await axios.get(
    `${API_URL}/students/by-document/${document}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
