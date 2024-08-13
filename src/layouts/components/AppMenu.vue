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
    />

    <v-list-item
      key="students"
      to="/a/students"
      title="Estudiantes"
      prepend-icon="mdi-account"
      link
      exact
    />

    <v-list-item
      key="professors"
      to="/a/professors"
      title="Profesores"
      prepend-icon="mdi-account"
      link
      exact
    />

    <v-list-item
      key="workers"
      to="/a/workers"
      title="Trabajadores"
      prepend-icon="mdi-account"
      link
      exact
    />

    <v-list-group value="config">
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
      />

      <v-list-item
        key="attention-types"
        to="/a/attention-types"
        title="Tipos de atención"
        prepend-icon="mdi-account"
        link
        exact
      />
    </v-list-group>
    <v-list-group value="security">
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
      />
      <v-list-item
        key="roles"
        to="/a/roles"
        title="Roles"
        prepend-icon="mdi-account"
        link
        exact
      />
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref([""]);
</script>
