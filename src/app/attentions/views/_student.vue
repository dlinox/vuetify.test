<template>
  <v-card>
    <v-toolbar>
      <v-tabs v-model="tab">
        <v-tab value="attention">
          <small>Nueva Atencion</small>
        </v-tab>
        <v-tab value="history">
          <small>Historial</small>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-card-title>
      <small>
        <v-icon class="mb-1"> mdi-account </v-icon>
        {{ student?.full_name }}
      </small>
    </v-card-title>
    <v-card-text class="border-b">
      <p class="mb-2">
        <v-icon> mdi-phone </v-icon>
        {{ student?.phone_number }} | <v-icon> mdi-email </v-icon>
        {{ student?.email }}
      </p>

      <p class="mb-2">
        <v-icon> mdi-school </v-icon>
        {{ student?.career_name }} | {{ student?.student_code }}
      </p>

      <p class="mb-2">
        <v-icon> mdi-human-male </v-icon>
        {{ student?.father_name }}
      </p>

      <p class="mb-2">
        <v-icon> mdi-human-female </v-icon>
        {{ student?.mother_name }}
      </p>
    </v-card-text>
    <v-tabs-window v-model="tab">
      <v-tabs-window-item value="attention">
        <v-form ref="formRef" @submit.prevent="submit">
          <v-row justify="center">
            <v-col cols="10" md="8">
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12">
                    <v-text-field
                      v-model="form.email"
                      label="Correo"
                      :rules="[email]"
                      hint="El correo es obligatorio, para el envio de correos, asegurese de que sea correcto."
                      persistent-hint
                    />
                  </v-col>
                  <v-col cols="12" md="8">
                    <v-combobox
                      v-model="form.type_attention_id"
                      :items="typeAttentions"
                      label="Tipo de Atencion"
                      :return-object="false"
                      :rules="[required]"
                      @update:model-value="getNextNumAttention"
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="form.report_number"
                      label="Nro de Reporte"
                      :rules="[required]"
                      readonly
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.description"
                      label="Descripcion"
                      :rules="[required]"
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
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" type="button" link to="/a/attentions">
                  Volver
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  type="submit"
                  variant="flat"
                  :loading="loading"
                >
                  Guardar atención
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
      </v-tabs-window-item>
      <v-tabs-window-item value="history">
        <ListHistoy
          :document="student?.student_code"
          :person="student"
          person_type="001"
        />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";

import { getStudentByDocument } from "@/app/attentions/services";
import {
  getTypeAttentions,
  getItemsOffices,
  storeItem,
  getNextNumByType,
} from "@/app/attentions/services";
import { type Student } from "@/app/students/types";

import { type Attention, AttentionDefault } from "@/app/attentions/types";

import { SelectItem } from "@/common/types/select.types";
import ListHistoy from "@/app/attentions/components/ListHistoy.vue";

import { email, required } from "@/common/utils/ruleUtils";

const route = useRoute();
const tab = ref("attention");
const typeAttentions: Ref<SelectItem[]> = ref([]);
const offices: Ref<SelectItem[]> = ref([]);

const student: Ref<Student | null> = ref(null);

const form: Ref<Attention> = ref({
  ...AttentionDefault,
});
const loading = ref(false);

const formRef: Ref<HTMLFormElement | null> = ref(null);

const getNextNumAttention = async (id: number) => {
  form.value.report_number = await getNextNumByType(id);
};

const submit = async () => {
  const { valid } = await formRef.value?.validate();
  if (!valid) return;

  loading.value = true;
  let data = {
    ...form.value,
    person_id: student.value?.id,
    person_type: "001",
  };
  await storeItem(data, "001");

  formRef.value?.reset();
  student.value = await getStudentByDocument(route.params.document as string);
  form.value.email = student.value?.email || "";
  loading.value = false;
};

const init = async () => {
  student.value = await getStudentByDocument(route.params.document as string);

  let typeAttentionsFilter: any = await getTypeAttentions();
  typeAttentionsFilter.filter((item: any) => {
    if (item.type === "001") {
      typeAttentions.value.push(item);
    }
  });

  offices.value = await getItemsOffices();

  form.value.email = student.value?.email || "";
};

init();
</script>
