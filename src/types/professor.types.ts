interface Professor {
  id: string;
  name: string;
  paternal_surname?: string;
  maternal_surname?: string;
  document_type: string;
  document_number: string;
  birthdate?: string;
  phone_number?: string;
  career_code?: string;
  professor_code?: string;
  email?: string;
  gender: string;
  status: boolean;
}

const ProfessorDefault = {
  id: "",
  name: "",
  paternal_surname: "",
  maternal_surname: "",
  document_type: "001",
  document_number: "",
  birthdate: "",
  phone_number: "",
  career_code: "",
  professor_code: "",
  email: "",
  gender: "",
  status: true,
};

export { type Professor, ProfessorDefault };
