<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" app>
      <AppMenu />
      <template #append>
        <v-list-item
          class="py-2 border-t"
          :title="authStore.authState.user.name"
          :subtitle="authStore.authState.user.role"
          prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"
        >
          <template v-slot:append>
            <v-btn
              @click="signOut"
              color="grey-lighten-1"
              icon="mdi-power"
              variant="text"
              size="small"
            ></v-btn>
          </template>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar floating elevation="0">
      <v-btn icon @click="drawer = !drawer" >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-toolbar flat>
        <v-toolbar-title>
          <h5 class="text-h5 font-weight-bold">{{ route.name }}</h5>
        </v-toolbar-title>
      </v-toolbar>

      <RouterView />
    </v-main>
    <v-footer color="grey-lighten-4" app>
      <v-spacer> </v-spacer>
      <small> UNAP &copy; {{ new Date().getFullYear() }} </small>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import AppMenu from "./components/AppMenu.vue";
import { signOut } from "@/app/auth/services/auth.services";

import { useAuthStore } from "@/stores/auth.stores";
const authStore = useAuthStore();

const drawer = ref(true);

const route = useRoute();
</script>
