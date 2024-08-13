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
        component: () => import("@/app/auth/views/index.vue"),
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
        component: () => import("@/app/dashboard/views/index.vue"),
      },
      {
        path: "attentions",
        name: "Atención",
        component: () => import("@/app/attentions/views/index.vue"),
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
      {
        path: "students",
        name: "Students",
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
