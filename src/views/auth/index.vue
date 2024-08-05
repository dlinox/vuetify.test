<template>
  <v-row class="w-full h-full justify-center align-center" no-gutters>
    <v-col cols="12" class="h-screen">
      <v-row no-gutters>
        <v-col cols="12" md="5" class="d-flex h-screen align-center bg-white">
          <v-card elevation="0" class="mx-auto bg-white" width="400">
            <v-card-item class="">
              <v-img
                src="https://campus.unap.edu.pe/images/themes/unap/logo.png"
                alt="UNAP"
                width="250px"
                class="mb-6"
              />

              <!-- <div class="d-md-none d-block mb-6"> -->
              <div class="mb-6">
                <h2>Bienvenido</h2>
                <small>
                  Inicia sesión con los mismos datos de acceso del Aula Virtual
                  / Intranet
                </small>
              </div>

              <v-form @submit.prevent="submit" ref="formAuthRef">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model.trim="form.username"
                      label="Ususario"
                      append-inner-icon="mdi-account"
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
                      color="primary"
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
          </v-card>
        </v-col>
        <v-col cols="12" md="7" class="col-img d-none d-md-block">
          <div class="col-cover">
            <h2 class="text-center">Bienvenido</h2>
            <p class="text-center">
              Inicia sesión para acceder a la plataforma
            </p>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { AuthForm } from "@/types/auth.types";
import { signIn } from "@/services/auth.services";

const form: Ref<AuthForm> = ref({
  username: "conxuro",
  password: "eriksoneira",
});

const loading: Ref<boolean> = ref(false);

const submit = async (): Promise<void> => {
  loading.value = true;
  try {
    await signIn(form.value);
  } catch (error) {
    alert("Error al iniciar sesión, revise sus credenciales");
  } finally {
    loading.value = false;
  }
};
</script>
