interface Worker {
  id: number | null;
  name: string;
  code?: number | null;
  office_id?: number | null;
  office_name?: string;
  type: string;
  type_name?: string;
  paternal_surname?: string;
  maternal_surname?: string;
  document_type: string;
  document_number: string;
  birthdate?: string;
  phone_number?: string;
  email?: string;
  gender: string;
  status: boolean;
}

const WorkerDefault: Worker = {
  id: null,
  name: "",
  code: null,
  type: "001",
  office_id: null,
  paternal_surname: "",
  maternal_surname: "",
  document_type: "001",
  document_number: "",
  birthdate: "",
  phone_number: "",
  email: "",
  gender: "",
  status: true,
};

export { type Worker, WorkerDefault };
