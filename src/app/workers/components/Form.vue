<template>
  <v-dialog max-width="700">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form @submit.prevent="submit(isActive)" ref="formRef">
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
                <v-select
                  v-model="form.type"
                  :items="typeItems"
                  label="Tipo de Trabajador"
                  :rules="[required]"
                />
              </v-col>

              <v-col cols="12" md="6">
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
            <v-btn color="secondary" @click="isActive.value = false">
              Cancelar
            </v-btn>
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
import { type Worker, WorkerDefault } from "@/app/workers/types";

import { saveItem, updateItem } from "@/app/workers/services";

import {
  required,
  dni,
  atLeastOneRequired,
  email,
} from "@/common/utils/ruleUtils";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<Worker>,
    default: () => ({}),
  },
  offices: {
    type: Array as () => any[],
    default: () => [],
  },
});

const loading = ref(false);

const typeItems = [
  { title: "Administrativo", value: "001" },
  { title: "Cas", value: "002" },
  { title: "Obrero", value: "003" },
  { title: "Profecional de Obra", value: "004" },
  { title: "EXTERNO", value: "000" },
];

const formRef = ref<HTMLFormElement | null>(null);

const form: Ref<Worker> = ref({
  ...WorkerDefault,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  const { valid } = await formRef.value?.validate();
  if (!valid) return;

  loading.value = true;
  if (form.value.id) {
    if (await updateItem(form.value)) {
      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      formRef.value?.reset();
      emit("onSuccess");
      isActive.value = false;
    }
  }

  loading.value = false;
};
</script>
