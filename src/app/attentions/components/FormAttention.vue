<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <slot name="btn" :activator="activatorProps"></slot>
    </template>
    <template v-slot:default="{ isActive }">
      <v-form @submit.prevent="submit(isActive)">
        <v-card :title="form.id ? 'Editar' : 'Crear'">
          <v-card-item>
            <v-row justify="center">
              <v-col cols="10" md="8">
                <v-combobox
                  v-model="form.type_attention_id"
                  :items="typeAttentions"
                  label="Tipo de Atencion"
                  outlined
                  :return-object="false"
                  dense
                />
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="form.report_number"
                  label="Nro de Reporte"
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="form.description"
                  label="Descripcion"
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-combobox
                  v-model="form.derivate_to"
                  :items="offices"
                  label="Derivar a"
                  chips
                  multiple
                  :return-object="false"
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
import { type Attention, AttentionDefault } from "@/app/attentions/types";
import { SelectItem } from "@/common/types/select.types";


import { updateItem } from "@/app/attentions/services";

const emit = defineEmits(["onSuccess"]);

const loading = ref(false);
const props = defineProps({
  formState: {
    type: Object as () => Partial<Attention>,
    default: () => ({}),
  },
  typeAttentions: {
    type: Array as () => SelectItem[],
    default: () => [],
  },
  offices: {
    type: Array as () => SelectItem[],
    default: () => [],
  },
  person_id: {
    type: Number,
    required: true,
  },
  person_type: {
    type: String,
    required: true,
  },
});

const form: Ref<Attention> = ref({
  ...AttentionDefault,
  ...props.formState,
});

const submit = async (isActive: Ref<boolean>) => {
  let data = {
    ...form.value,
    person_id: props.person_id,
  };
  await updateItem(data);
  form.value = { ...AttentionDefault };

  isActive.value = false;
  emit("onSuccess");
};
</script>
