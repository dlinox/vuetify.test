<template>
  <v-row class="w-full h-full justify-center align-center" no-gutters>
    <v-col cols="12" md="10" lg="8" class="h-md-auto h-screen">
      <v-card
        elevation="0"
        rounded="lg"
        class="h-md-auto h-screen d-flex align-center"
      >
        <v-row no-gutters>
          <v-col cols="12" md="7" class="pa-6">
            <v-card-item class="">
              <v-img
                src="https://campus.unap.edu.pe/images/themes/unap/logo.png"
                alt="UNAP"
                width="250px"
                class="mb-6"
              />

              <div class="d-md-none d-block mb-6">
                <h2>Bienvenido</h2>
                <p>Inicia sesión para acceder a la plataforma</p>
              </div>

              <v-form @submit.prevent="submit" ref="formAuthRef">
                <v-text-field
                  v-model.trim="form.email"
                  label="Correo"
                  append-inner-icon="mdi-email"
                />

                <v-text-field
                  v-model.trim="form.password"
                  label="Contraseña"
                  append-inner-icon="mdi-eye"
                  autocomplete="off"
                  type="password"
                />

                <v-btn color="primary" block :loading="loading" type="submit">
                  Ingresar
                </v-btn>
              </v-form>
            </v-card-item>
          </v-col>
          <v-col cols="12" md="5" class="col-img d-none d-md-block">
            <div class="col-cover">
              <h2 class="text-center">Bienvenido</h2>
              <p class="text-center">
                Inicia sesión para acceder a la plataforma
              </p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { AuthForm } from "@/types/auth.types";
import { signIn } from "@/services/auth.services";

const form: Ref<AuthForm> = ref({
  email: "super@test.com",
  password: "super@test.com",
});

const loading: Ref<boolean> = ref(false);

const submit = async (): Promise<void> => {
  loading.value = true;
  try {
    await signIn(form.value);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>
