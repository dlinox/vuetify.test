import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { authMiddleware, noAuthMiddleware } from "@/middleware/auth";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "AuthLayout",
    component: () => import("../layouts/AuthLayout.vue"),
    beforeEnter: noAuthMiddleware,
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/app/auth/views/index.vue"),
      },
    ],
  },

  {
    path: "/c",
    name: "BlackLayout",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "survey/:token",
        name: "Survey",
        component: () => import("@/app/attentions/views/_survey.vue"),
      },
    ],
  },

  {
    path: "/a",
    name: "AdminLayout",
    component: () => import("../layouts/AdminLayout.vue"),
    beforeEnter: authMiddleware,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/app/dashboard/views/index.vue"),
      },
      {
        path: "attentions",
        name: "Atención",
        component: () => import("@/app/attentions/views/index.vue"),
      },
      {
        path: "reports",
        name: "Reportes",
        component: () => import("@/app/reports/views/index.vue"),
      },
      {
        path: "attentions/student/:document",
        name: "Atención al Estudiantes",
        component: () => import("@/app/attentions/views/_student.vue"),
      },
      {
        path: "attentions/professor/:document",
        name: "Atención al Docente",
        component: () => import("@/app/attentions/views/_professor.vue"),
      },
      {
        path: "attentions/worker/:document",
        name: "Atención al Trabajador",
        component: () => import("@/app/attentions/views/_worker.vue"),
      },
      // {
      //   path: "attentions/reports",
      //   name: "Reportes",
      //   component: () => import("@/app/attentions/views/reports.vue"),
      // },
      {
        path: "students",
        name: "Estudiantes",
        component: () => import("@/app/students/views/index.vue"),
      },
      {
        path: "professors",
        name: "Profesores",
        component: () => import("@/app/professors/views/index.vue"),
      },
      {
        path: "workers",
        name: "Trabajadores",
        component: () => import("@/app/workers/views/index.vue"),
      },
      {
        path: "users",
        name: "Usuarios",
        component: () => import("@/app/users/views/index.vue"),
      },

      {
        path: "roles",
        name: "Roles",
        component: () => import("@/app/roles/views/index.vue"),
      },
      {
        path: "offices",
        name: "Oficinas",
        component: () => import("@/app/offices/views/index.vue"),
      },
      {
        path: "attention-types",
        name: "Tipos de atención",
        component: () => import("@/app/attention-types/views/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
