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
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.document_number"
                  label="DNI"
                  :rules="[required, dni]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="form.code" label="Código Trabajador" />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  label="Nombre"
                  :rules="[required]"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.paternal_surname"
                  label="Apellido Paterno"
                  :rules="[atLeastOneRequired(form.maternal_surname)]"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.maternal_surname"
                  label="Apellido Materno"
                  :rules="[atLeastOneRequired(form.paternal_surname)]"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  :rules="[required, email]"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-combobox
                  v-model="form.career_code"
                  :items="careers"
                  label="Carrera"
                  hint="Selecciona la carrera a la que pertenece"
                  persistent-hint
                  :return-object="false"
                ></v-combobox>
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
import { type Professor, ProfessorDefault } from "@/app/professors/types";

import { saveItem, updateItem } from "@/app/professors/services";

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
    type: Object as () => Partial<Professor>,
    default: () => ({}),
  },
  careers: {
    type: Array as () => any[],
    default: () => [],
  },
});

const form: Ref<Professor> = ref({
  ...ProfessorDefault,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  loading.value = true;
  if (form.value.id) {
    if (await updateItem(form.value)) {
      form.value = { ...ProfessorDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      form.value = { ...ProfessorDefault };

      emit("onSuccess");
      isActive.value = false;
    }
  }

  loading.value = false;
};
</script>
