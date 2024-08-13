import { user } from "@/app/services";


import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
export const authMiddleware = async (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const auth = await user();
  if (!auth) {
    console.log("Redirecting to login page...");
    next({ name: "AuthLogin" });
    //window.location.href = import.meta.env.VITE_URL_API_UNAP_LOGIN;
  } else {
    next();
  }
};

// no auth
export const noAuthMiddleware = async (
  _to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const auth = await user();
  if (auth) {
    console.log("Redirecting to dashboard...");
    
    next({ name: "Dashboard" });

  } else {
    next();
  }
};
