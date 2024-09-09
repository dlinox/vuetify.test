import { http } from "@/helpers/http";
import { type AuthForm } from "@/app/auth/types/auth.types.ts";
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

export const signOut = async () => {
  const authStore = useAuthStore();
  try {
    let token = localStorage.getItem("token") as string;
    let response = await http(token).post(`/auth/sign-out`, null);
    localStorage.removeItem("token");
    authStore.clearAuthState();
    window.location.href = "/";
    return response.data;
  } catch (error) {
    return false;
  }
};

export const user = async () => {
  const authStore = useAuthStore();
  try {
    let token = localStorage.getItem("token") as string;

    if (!token) {
      localStorage.removeItem("token");
      authStore.clearAuthState();
      return;
    }

    let response = await http(token).get(`auth/user`);
    authStore.setAuthState(response.data);
    return response.data;
  } catch (error: any) {
    // if (error.response.status === 401) {
    //   localStorage.removeItem("token");
    //   authStore.clearAuthState();
    //   window.location.href = "/";
    // }

    return false;
  }
};

export const clearSession = async  () => {
  const authStore = useAuthStore();
  localStorage.removeItem("token");
  authStore.clearAuthState();
};
