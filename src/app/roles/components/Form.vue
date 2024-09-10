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
                  label="Nombre del rol"
                  :rules="[required]"
                />
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
            <v-btn
              text="Cancelar"
              color="secondary"
              @click="isActive.value = false"
            ></v-btn>
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
import { required } from "@/common/utils/ruleUtils";

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

const formRef = ref<HTMLFormElement | null>(null);

const form: Ref<Role> = ref({
  id: null,
  name: "",
  permissions: [],
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
