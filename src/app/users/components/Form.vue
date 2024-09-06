<template>
  <v-dialog max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form ref="formRef" @submit.prevent="submit(isActive)">
        <v-card :title="form.id ? 'Editar' : 'Crear'">
          <v-card-item>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model.trim="form.document_number"
                  label="DNI"
                  :rules="[required, dni]"
                />
              </v-col>
              <v-col cols="12" md="8">
                <v-text-field
                  v-model.trim="form.name"
                  label="Nombre"
                  :rules="[required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model.trim="form.paternal_surname"
                  label="Apellido Paterno"
                  :rules="[atLeastOneRequired(form.maternal_surname)]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model.trim="form.maternal_surname"
                  label="Apellido Materno"
                  :rules="[atLeastOneRequired(form.paternal_surname)]"
                />
              </v-col>

              <v-col cols="12">
                <v-combobox
                  v-model="form.office_id"
                  :items="[
                    {
                      value: null,
                      title: 'Todas las oficinas (no seleccionar ninguna)',
                    },
                    ...offices,
                  ]"
                  label="Oficina"
                  hint="Selecciona una oficina, si no seleccionas ninguna se asignará a todas las oficinas"
                  persistent-hint
                  :return-object="false"
                ></v-combobox>
              </v-col>

              <v-col cols="12">
                <v-select
                  :rules="[required]"
                  v-model="form.role_id"
                  :items="roles"
                  label="Rol"
                ></v-select>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model.trim="form.email"
                  label="Correo"
                  :rules="[required, email]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model.trim="form.password"
                  label="Contraseña"
                  type="password"
                  autocomplete="off"
                />
              </v-col>
              <v-col cols="12">
                <v-switch
                  :label="form.status ? 'Activo' : 'Inactivo'"
                  v-model="form.status"
                  color="primary"
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

import {
  required,
  email,
  dni,
  atLeastOneRequired,
} from "@/common/utils/ruleUtils";

const emit = defineEmits(["onSuccess"]);

const loading = ref(false);
const props = defineProps({
  formState: {
    type: Object as () => Partial<User>,
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

const formRef: Ref<any | null> = ref(null);
const form: Ref<User> = ref({
  ...UserDefault,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  const { valid } = await formRef.value.validate();
  if (!valid) return;
  loading.value = true;

  if (form.value.id) {
    if (await updateItem(form.value)) {
      // form.value = { ...UserDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      // form.value = { ...UserDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  }
  loading.value = false;
};
</script>
