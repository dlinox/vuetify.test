import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";

import { type Auth } from "@/types/auth.types.ts";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const authState: Ref<Auth> = ref({
    token: "",
    user: {
      id: null,
      name: "",
      role: "",
      email: "",
    },
    permissions: "",
  });

  const signInSuccess = (response: any) => {
    localStorage.setItem("token", response.data);
    router.push("/survey");
  };

  const setAuthState = (auth: Auth, isSignIn: boolean = false) => {
    authState.value = auth;
    if (isSignIn) router.push("/a");
  };

  const clearAuthState = () => {
    authState.value = {
      token: "",
      user: {
        id: null,
        name: "",
        role: "",
        email: "",
      },
      permissions: "",
    };
  };

  return {
    authState,
    setAuthState,
    clearAuthState,
    signInSuccess,
  };
});
