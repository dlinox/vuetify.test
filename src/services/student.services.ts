import { http } from "@/helpers/http";
import { type AuthForm } from "@/types/auth.types.ts";
import { useAuthStore } from "@/stores/auth.stores";

export const signIn = async (form: AuthForm): Promise<boolean> => {
  const authStore = useAuthStore();
  try {
    let response = await http().post(`/auth/sign-in`, form);
    authStore.signInSuccess(response.data);
    return true;
  } catch (error) { 
    throw error;
  }
};