<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form @submit.prevent="submit(isActive)" ref="formRef">
        <v-card :title="form.id ? 'Editar' : 'Crear'">
          <v-card-item>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.name"
                  label="Nombre"
                  :rules="[required]"
                />
              </v-col>
              <v-col cols="12">
                <v-switch
                  :label="form.status ? 'Activo' : 'Inactivo'"
                  v-model="form.status"
                  color="blue-darken-4"
                  inset
                  hint="Habilitar esta opción permitirá que este elemento sea
                      visible y seleccionable en otros formularios."
                  persistent-hint
                />
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-actions>
            <v-btn
              class="text-overline"
              text="Cancel"
              color="secondary"
              @click="isActive.value = false"
            >
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="text-overline"
              text="Guardar"
              color="primary"
              type="submit"
              variant="tonal"
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
import { type Office, OfficeDefaultValues } from "@/app/offices/types";

import { saveItem, updateItem } from "@/app/offices/services";

import { required } from "@/common/utils/ruleUtils";
const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<Office>,
    default: { ...OfficeDefaultValues },
  },
});

const loading = ref(false);

const formRef = ref<HTMLFormElement | null>(null);

const form: Ref<Office> = ref({
  ...OfficeDefaultValues,
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
      form.value = { ...OfficeDefaultValues };
      emit("onSuccess");
      isActive.value = false;
    }
  }

  loading.value = false;
};
</script>
