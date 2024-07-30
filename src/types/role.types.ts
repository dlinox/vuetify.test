interface Permission {
  id: string;
  name: string;
  description: string;
  parent_id?: string;
}

interface Role {
  id: string;
  name: string;
  permissions?: string[];
}

const RoleDefault: Role = {
  id: "",
  name: "",
  permissions: [],
};

export { type Role, type Permission, RoleDefault };
