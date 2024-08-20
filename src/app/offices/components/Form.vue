<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form @submit.prevent="submit(isActive)">
        <v-card :title="form.id ? 'Editar' : 'Crear'">
          <v-card-item>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="form.name" label="Nombre" />
              </v-col>
              <v-col cols="12">
                <v-list-item
                  lines="two"
                  class="rounded-lg"
                  :active="form.status"
                  @click="form.status = !form.status"
                >
                  <template v-slot:prepend="{ isActive }">
                    <v-list-item-action start>
                      <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                    </v-list-item-action>
                  </template>
                  <v-list-item-title> Habilitado </v-list-item-title>
                  <v-list-item-subtitle>
                    <small>
                      Habilitar esta opción permitirá que este elemento sea
                      visible y seleccionable en otros formularios.
                    </small>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card-item>
          <v-card-actions>
            <v-btn
              class="text-overline"
              text="Cancel"
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

const emit = defineEmits(["onSuccess"]);

const loading = ref(false);
const props = defineProps({
  formState: {
    type: Object as () => Partial<Office>,
    default: { ...OfficeDefaultValues },
  },
});

const form: Ref<Office> = ref({
  ...OfficeDefaultValues,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  loading.value = true;
  if (form.value.id) {
    if (await updateItem(form.value)) {
      // form.value = { ...OfficeDefaultValues };
      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      // form.value = { ...OfficeDefaultValues };
      emit("onSuccess");
      isActive.value = false;
    }
  }

  loading.value = false;

};
</script>
