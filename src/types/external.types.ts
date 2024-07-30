interface External {
  id: string;
  name: string;
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

const ExternalDefault: External = {
  id: "",
  name: "",
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

export { type External, ExternalDefault };
