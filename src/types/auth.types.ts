interface AuthForm {
  username: string;
  password: string;
}

interface AuthUser {
  id: number | null;
  name: string;
  role: string;
  email: string | null;
}

interface Auth {
  token: string;
  user: AuthUser;
  permissions: string;
}

export type { AuthForm, AuthUser, Auth };
