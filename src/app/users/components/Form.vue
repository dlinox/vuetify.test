<template>
  <v-dialog max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form @submit.prevent="submit(isActive)">
        <v-card :title="form.id ? 'Editar' : 'Crear'">
          <v-card-item>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field v-model="form.document_number" label="DNI" />
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field v-model="form.name" label="Nombre" />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.paternal_surname"
                  label="Apellido Paterno"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.maternal_surname"
                  label="Apellido Materno"
                />
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="form.office_id"
                  :items="offices"
                  label="Oficina"
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="form.role_id"
                  :items="roles"
                  label="Rol"
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field v-model="form.email" label="Correo" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.password"
                  label="Contraseña"
                  type="password"
                  autocomplete="off"
                />
              </v-col>
              <v-col cols="12">
                <v-switch
                  :label="form.status ? 'Activo' : 'Inactivo'"
                  v-model="form.status"
                  color="blue-darken-4"
                  inset
                />
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-actions>
            <v-btn text="Cancel" @click="isActive.value = false"></v-btn>
            <v-spacer></v-spacer>
            <v-btn
              text="Guardar"
              color="primary"
              type="submit"
              :loading="loading"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { type User, UserDefault } from "@/app/users/types";

import { saveItem, updateItem } from "@/app/users/services";

const emit = defineEmits(["onSuccess"]);

const loading = ref(false);
const props = defineProps({
  formState: {
    type: Object as () => Partial<User>,
    default: () => ({}),
  },

  offices: {
    type: Array as () => any[],
    default: () => [],
  },

  roles: {
    type: Array as () => any[],
    default: () => [],
  },
});

const form: Ref<User> = ref({
  ...UserDefault,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  loading.value = true;
  if (form.value.id) {
    if (await updateItem(form.value)) {
      form.value = { ...UserDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      form.value = { ...UserDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  }
  loading.value = false;
};
</script>
