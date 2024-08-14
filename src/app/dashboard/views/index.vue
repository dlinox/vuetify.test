<template>
  {{ authStore.authState }}
</template>
<script setup lang="ts">
import { useAuthStore } from "@/stores/auth.stores";
const authStore = useAuthStore();
</script>
