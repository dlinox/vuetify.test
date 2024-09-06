<template>
  <div class="d-flex align-center justify-center h-screen">
    <v-card
      elevation="0"
      rounded="lg"
      class="h-md-auto h-screen d-flex align-center justify-center mx-auto bg-white w-100 w-md-auto"
    >
      <v-card-item class="">
        <v-img src="/sso-logo.jpg" alt="UNAP" width="150px" class="mb-6 mx-auto" />

        <div class="mb-6">
          <h3>Bienvenido</h3>

          <small> Inicia sesión para acceder a la plataforma </small>
        </div>

        <v-form @submit.prevent="submit" ref="formAuthRef">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.trim="form.email"
                label="Correo"
                append-inner-icon="mdi-email"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model.trim="form.password"
                label="Contraseña"
                append-inner-icon="mdi-eye"
                autocomplete="off"
                type="password"
              />
            </v-col>

            <v-col cols="12">
              <v-btn color="primary" block :loading="loading" type="submit">
                Ingresar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { AuthForm } from "@/app/auth/types/auth.types";
import { signIn } from "@/app/auth/services/auth.services";

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
