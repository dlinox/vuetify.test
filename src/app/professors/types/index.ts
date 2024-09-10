interface Professor {
  id: number | null;
  name: string;
  code: number | null;
  paternal_surname?: string;
  maternal_surname?: string;
  document_type: string;
  document_number: string;
  birthdate?: string;
  phone_number?: string;
  career_code?: string | null;
  career_name?: string;
  position_id: number | null;
  position_name?: string;
  condition_id: number | null;
  condition_name?: string;
  email?: string;
  gender: string;
  status: boolean;
}

const ProfessorDefault = {
  id: null,
  code: null,
  name: "",
  paternal_surname: "",
  maternal_surname: "",
  document_type: "001",
  document_number: "",
  birthdate: "",
  phone_number: "",
  career_code: null,
  position_id: null,
  position_name: "",
  condition_id: null,
  condition_name: "",
  email: "",
  gender: "",
  status: true,
};

export { type Professor, ProfessorDefault };
