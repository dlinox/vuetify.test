interface Student {
  id: string;
  name: string;
  paternal_surname?: string;
  maternal_surname?: string;
  document_type: string;
  document_number: string;
  birthdate?: string;
  phone_number?: string;
  career_code?: string;
  student_code?: string;
  email?: string;
  gender: string;
  status: boolean;
  full_name?: string;
  career_name?: string;
  mother_name?: string;
  father_name?: string;
}

const StudentDefault = {
  id: "",
  name: "",
  paternal_surname: "",
  maternal_surname: "",
  document_type: "001",
  document_number: "",
  birthdate: "",
  phone_number: "",
  career_code: "",
  student_code: "",
  email: "",
  gender: "",
  status: true,
};

export { type Student, StudentDefault };
