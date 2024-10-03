<template>
  <v-list nav density="compact" v-model:opened="open" color="primary">
    <v-list-item
      key="dashboard"
      to="/a"
      title="Dashboard"
      prepend-icon="mdi-view-dashboard"
      link
      exact
    />
    <v-list-item
      key="attentions"
      to="/a/attentions"
      title="Atenciones"
      prepend-icon="mdi-account"
      link
      exact
      v-permission="['attentions']"
    />

    <v-list-group
      value="reports"
      v-permission="['reports.attentions', 'reports.users']"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-chart-line"
          title="Reportes"
        ></v-list-item>
      </template>

      <v-list-item
        key="reports.attentions"
        to="/a/reports"
        title="Atenciones"
        prepend-icon="mdi-chart-line"
        link
        exact
        v-permission="['reports.attentions']"
      />
      <v-list-item
        key="reports.users"
        to="/a/reports/users"
        title="Usuarios"
        prepend-icon="mdi-account"
        v-permission="['reports.users']"
        link
        exact
      />
    </v-list-group>
    <!-- 
    <v-list-item
      key="reports"
      to="/a/reports"
      title="Reportes"
      prepend-icon="mdi-chart-line"
      link
      exact
      v-permission="['reports']"
    /> -->

    <v-list-item
      key="students"
      to="/a/students"
      title="Estudiantes"
      prepend-icon="mdi-account"
      link
      exact
      v-permission="['students']"
    />

    <v-list-item
      key="professors"
      to="/a/professors"
      title="Profesores"
      prepend-icon="mdi-account"
      link
      exact
      v-permission="['professors']"
    />

    <v-list-item
      key="workers"
      to="/a/workers"
      title="Trabajadores"
      prepend-icon="mdi-account"
      link
      exact
      v-permission="['workers']"
    />

    <v-list-group value="config" v-permission="['offices', 'type-attentions']">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-cog"
          title="Configuración"
        ></v-list-item>
      </template>

      <v-list-item
        key="offices"
        to="/a/offices"
        title="Oficinas"
        prepend-icon="mdi-office-building"
        link
        exact
        v-permission="['offices']"
      />

      <v-list-item
        key="attention-types"
        to="/a/attention-types"
        title="Tipos de atención"
        prepend-icon="mdi-account"
        link
        exact
        v-permission="['type-attentions']"
      />
    </v-list-group>
    <v-list-group value="security" v-permission="['users', 'roles']">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-shield-lock"
          title="Seguridad"
        ></v-list-item>
      </template>

      <v-list-item
        key="users"
        to="/a/users"
        title="Usuarios"
        prepend-icon="mdi-account"
        link
        exact
        v-permission="['users']"
      />
      <v-list-item
        key="roles"
        to="/a/roles"
        title="Roles"
        prepend-icon="mdi-account"
        link
        exact
        v-permission="['roles']"
      />
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref([""]);
</script>
