import { http } from "@/helpers/http";
import { type AuthForm } from "@/types/auth.types.ts";
import { useAuthStore } from "@/stores/auth.stores";

export const signIn = async (form: AuthForm): Promise<boolean> => {
  const authStore = useAuthStore();
  try {
    let response = await http().post(`/auth/sign-in`, form);
    localStorage.setItem("token", response.data.token);
    authStore.setAuthState(response.data, true);
    return true;
  } catch (error) {
    return false;
  }
};
