interface User {
  id: number | null;
  name: string;
  paternal_surname?: string;
  maternal_surname?: string;
  document_type: string;
  document_number: string;
  office_id: number | null;
  role_id?: number | null;
  email?: string;
  password?: string;
  status: boolean;
  is_editable?: boolean;
}

const UserDefault = {
  id: null,
  name: "",
  paternal_surname: "",
  maternal_surname: "",
  document_type: "001",
  document_number: "",
  office_id: null,
  role_id: null,
  email: "",
  password: "",
  status: true,
  is_editable: false,
};
export { type User, UserDefault };
