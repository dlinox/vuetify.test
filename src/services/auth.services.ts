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

// export const signOut = async () => {
//   const authStore = useAuthStore();
//   try {
//     let response = await axios.post(`${API_URL}/auth/sign-out`, null, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     localStorage.removeItem("token");
//     authStore.clearAuthState();
//     window.location.href = "/";
//     return response.data;
//   } catch (error) {
//     return false;
//   }
// };

// export const user = async () => {
//   const authStore = useAuthStore();
//   try {
//     let response = await axios.get(`${API_URL}/auth/user`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     authStore.setAuthState(response.data);
//     return response.data;
//   } catch (error) {
//     return false;
//   }
// };
