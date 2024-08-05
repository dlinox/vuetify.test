<template>
  <v-app app>
    <v-app-bar floating elevation="0" color="primary">
      <div class="px-3">
        <div class="d-flex align-center">
          <img src="@/assets/logos/logo.png" alt="UNAP" height="40" />
          <h2 class="mt-2 ms-2">UNA PUNO</h2>
        </div>
      </div>
    </v-app-bar>
    <v-main>
    
      <RouterView />
    </v-main>
    <v-footer color="grey-lighten-4" app>
      <v-spacer> </v-spacer>
      <small> UNAP &copy; {{ new Date().getFullYear() }} </small>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
</script>
