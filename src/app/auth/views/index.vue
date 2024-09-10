<template>
  <div
    class="d-flex align-center justify-center h-screen bg-gradient-to-r from-primary to-secondary"
  >
    <v-card
      class="mx-auto bg-white pa-3"
      elevation="0"
      rounded="lg"
      max-width="450px"
    >
      <v-card-item class="">
        <v-img
          src="/sso-logo.jpg"
          alt="UNAP"
          width="150px"
          class="mb-6 mx-auto"
        />

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
              <v-btn
                class="text-overline font-weight-bold"
                variant="tonal"
                block
                :loading="loading"
                type="submit"
              >
                Ingresar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
      <v-card-item class="w-100 text-center">
        <div class="text-overline text-grey-darken-1">
          <small> UNAP © {{ new Date().getFullYear() }} </small>
        </div>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { AuthForm } from "@/app/auth/types/auth.types";
import { signIn } from "@/app/auth/services/auth.services";

const form: Ref<AuthForm> = ref({
  email: "",
  password: "",
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
