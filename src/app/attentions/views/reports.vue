<template>
  <v-toolbar>
    <v-tabs v-model="tab">
      <v-tab value="student">Estudiantes</v-tab>
      <v-tab value="professor">Docentes</v-tab>
      <v-tab value="worker">Adminitrativos / CAS / Obras </v-tab>
    </v-tabs>
  </v-toolbar>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="student">
      student
    </v-tabs-window-item>
    <v-tabs-window-item value="professor">
      professor
    </v-tabs-window-item>
    <v-tabs-window-item value="worker">
      worker
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const tab = ref("student");
</script>
