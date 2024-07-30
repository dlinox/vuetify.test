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
    path: "/a",
    name: "AdminLayout",
    component: () => import("../layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("../views/index.vue"),
      },
      {
        path: "students",
        name: "Students",
        component: () => import("../views/students/index.vue"),
      },

      {
        path: "professors",
        name: "Profesores",
        component: () => import("../views/professors/index.vue"),
      },
      {
        path: "workers",
        name: "Trabajadores",
        component: () => import("../views/workers/index.vue"),
      },
      {
        path: "users",
        name: "Usuarios",
        component: () => import("../views/users/index.vue"),
      },

      {
        path: "roles",
        name: "Roles",
        component: () => import("../views/roles/index.vue"),
      },
      {
        path: "offices",
        name: "Oficinas",
        component: () => import("../views/offices/index.vue"),
      },
      {
        path: "attention-types",
        name: "Tipos de atención",
        component: () => import("../views/attention-types/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
