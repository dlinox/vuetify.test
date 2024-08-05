import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("../views/auth/index.vue"),
      },
    ],
  },
  {
    path: "/survey",
    name: "AdminLayout",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/index.vue"),
      },
      {
        path: ":surveyId",
        name: "Survey",
        component: () => import("../views/_survey.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
