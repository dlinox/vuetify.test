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
        {{ item?.name }} {{ item?.paternal_surname }}
        {{ item?.maternal_surname }}
      </small>
    </v-card-title>
    <v-card-text class="border-b">
      <p class="mb-2">
        <v-icon> mdi-phone </v-icon>
        {{ item?.phone_number }} | <v-icon> mdi-email </v-icon>
        {{ item?.email }}
      </p>
      <p class="mb-2">
        <v-icon> mdi-school </v-icon>
        {{ item?.career_name }} | {{ item?.code }}
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
                      :rules="[required, email]"
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
                    />
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="form.report_number"
                      label="Nro de Reporte"
                      :rules="[required]"
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
          :document="item?.document_number"
          :person="item"
          person_type="002"
        />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { useRoute } from "vue-router";
import ListHistoy from "@/app/attentions/components/ListHistoy.vue";

import { getProfessorByDocument } from "@/app/attentions/services";
import {
  getTypeAttentions,
  getItemsOffices,
  storeItem,
} from "@/app/attentions/services";
import { required, email } from "@/common/utils/ruleUtils";
import { type Professor } from "@/app/professors/types";

import { type Attention, AttentionDefault } from "@/app/attentions/types";

import { SelectItem } from "@/common/types/select.types";

const route = useRoute();
const tab = ref("attention");
const typeAttentions: Ref<SelectItem[]> = ref([]);
const offices: Ref<SelectItem[]> = ref([]);

const item: Ref<Professor | null> = ref(null);

const formRef: Ref<HTMLFormElement | null> = ref(null);

const loading = ref(false);
const form: Ref<Attention> = ref({
  ...AttentionDefault,
});
const submit = async () => {
  const { valid } = await formRef.value?.validate();
  if (!valid) return;

  loading.value = true;
  let data = {
    ...form.value,
    person_id: item.value?.id,
    person_type: "002",
  };
  await storeItem(data, "002");

  formRef.value?.reset();
  item.value = await getProfessorByDocument(route.params.document as string);
  form.value.email = item.value?.email || "";
  loading.value = false;
};

const init = async () => {
  item.value = await getProfessorByDocument(route.params.document as string);
  typeAttentions.value = await getTypeAttentions();
  offices.value = await getItemsOffices();
  form.value.email = item.value?.email || "";

};

init();
</script>
