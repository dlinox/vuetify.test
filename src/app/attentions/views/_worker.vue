<template>
    <v-card>
      <v-toolbar density="compact">
        <v-toolbar-title>
          <small>
            {{ item?.name }} {{ item?.paternal_surname }}
            {{ item?.maternal_surname }}
          </small>
        </v-toolbar-title>
        <v-tabs v-model="tab">
          <v-tab value="attention">
            <small>Nueva Atencion</small>
          </v-tab>
          <v-tab value="history">
            <small>Historial</small>
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="attention">
          <v-form ref="formRef" @submit.prevent="submit">
            <v-row justify="center">
              <v-col cols="10" md="8">
                <v-card-text>
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
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" variant="flat">
                    Guardar atención
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-form>
        </v-tabs-window-item>
        <v-tabs-window-item value="history">
        <ListHistoy :document="item?.document_number" />
      </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </template>
  <script setup lang="ts">
  import { ref, Ref } from "vue";
  import { useRoute } from "vue-router";
import ListHistoy from "@/app/attentions/components/ListHistoy.vue";
  
  import { getWorkerByDocument } from "@/app/attentions/services";
  import {
    getTypeAttentions,
    getItemsOffices,
    storeItem,
  } from "@/app/attentions/services";
  import { type Student } from "@/app/students/types";
  
  import { type Attention, AttentionDefault } from "@/app/attentions/types";
  
  import { SelectItem } from "@/common/types/select.types";
  
  const route = useRoute();
  const tab = ref("attention");
  const typeAttentions: Ref<SelectItem[]> = ref([]);
  const offices: Ref<SelectItem[]> = ref([]);
  
  const item: Ref<Student | null> = ref(null);
  
  const form: Ref<Attention> = ref({
    ...AttentionDefault,
  });
  
  const submit = async () => {
    let data = {
      ...form.value,
      person_id: item.value?.id,
    };
    await storeItem(data, "003");
    form.value = { ...AttentionDefault };
  };
  
  const init = async () => {
    item.value = await getWorkerByDocument(route.params.document as string);
    typeAttentions.value = await getTypeAttentions();
    offices.value = await getItemsOffices();
  };
  
  init();
  </script>
  