<template>
  <v-toolbar flat color="primary" class="py-6">
    <v-icon class="ms-6">mdi-format-list-text</v-icon>

    <v-toolbar-title>
      <v-list-item>
        <v-list-item-title class="text-h5">
          {{ title ? title : route.name }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ subtitle }} </v-list-item-subtitle>
      </v-list-item>
    </v-toolbar-title>
  </v-toolbar>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
