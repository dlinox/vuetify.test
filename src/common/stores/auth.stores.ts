import { defineStore } from "pinia";
import { ref, Ref } from "vue";

import { type Auth } from "@/app/auth/types/auth.types.ts";
export const useAuthStore = defineStore("auth", () => {
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

  const setAuthState = (auth: Auth) => {
    authState.value = auth;
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
  };
});
