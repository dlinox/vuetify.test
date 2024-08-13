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
                <v-select
                  v-model="form.permissions"
                  :items="permissions"
                  label="Permisos"
                  chips
                  multiple
                ></v-select>
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
import type { Role } from "@/app/roles/types";

import { saveItem, updateItem } from "@/app/roles/services";

const emit = defineEmits(["onSuccess"]);

const loading = ref(false);
const props = defineProps({
  formState: {
    type: Object as () => Partial<Role>,
    default: () => ({}),
  },
  permissions: {
    type: Array as () => any[],
    default: () => [],
  },
});

const form: Ref<Role> = ref({
  id: null,
  name: "",
  permissions: [],
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  loading.value = true;
  if (form.value.id) {
    if (await updateItem(form.value)) {
      form.value = {
        id: null,
        name: "",
        permissions: [],
      };

      emit("onSuccess");
      isActive.value = false;
    }
  } else {
    if (await saveItem(form.value)) {
      form.value = {
        id: null,
        name: "",
        permissions: [],
      };

      emit("onSuccess");
      isActive.value = false;
    }
  }

  loading.value = false;
};
</script>
