<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form @onSuccess="loadItems(options)">
            <template v-slot:btn="{ activator }">
              <v-btn
                v-bind="activator"
                color="primary"
                icon="mdi-plus-circle-outline"
                class="me-2"
                v-permission="['type-attentions.create']"
              />
            </template>
          </Form>
          <v-text-field v-model="options.search" label="Buscar" />
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <v-select
            v-model="options.filters.type"
            :items="[
              { value: '001', title: 'Estudiante' },
              { value: '002', title: 'Docente' },
              { value: '003', title: 'Administrativo' },
            ]"
            label="Atencion para"
            clearable
            class="me-2"
            @update:model-value="loadItems(options)"
          ></v-select>

          <v-select
            v-model="options.filters.status"
            label="Estado"
            :items="statusItems"
            clearable
            @update:model-value="loadItems(options)"
          />
        </v-col>
      </v-row>
    </v-card-item>
    <v-data-table-server
      v-model:items-per-page="options.itemsPerPage"
      :headers="headers"
      :items="items?.data"
      :items-length="items!.total"
      :search="options.search"
      multi-sort
      :loading="loading"
      item-value="id"
      items-per-page-text="Número de filas por página:"
      @update:options="loadItems"
    >
      <template v-slot:item.type="{ item }">
        <v-chip
          :color="
            item.type === '001'
              ? 'deep-purple-lighten-2'
              : item.type === '002'
              ? 'indigo-lighten-2'
              : 'cyan-darken-1'
          "
        >
          {{
            item.type === "001"
              ? "Estudiante"
              : item.type === "002"
              ? "Docente"
              : "Administrativo"
          }}
        </v-chip>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.status ? 'info' : 'error'">
          {{ item.status ? "Activo" : "Inactivo" }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <Form :form-state="item" @onSuccess="loadItems(options)">
          <template v-slot:btn="{ activator }">
            <v-btn
              v-bind="activator"
              density="comfortable"
              icon="mdi-pencil"
              class="text-button"
              variant="tonal"
              v-permission="['type-attentions.update']"
            />
          </template>
        </Form>

        <!-- <v-btn
          density="comfortable"
          icon="mdi-minus-circle-outline"
          class="text-button ms-2"
          variant="tonal"
          color="error"
        >
        </v-btn> -->
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

import type { DataTableResponse } from "@/common/types/data-table.types";
import type { TypeAtention } from "@/app/attention-types/types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import { getItems } from "@/app/attention-types/services";

import Form from "@/app/attention-types/components/Form.vue";

const headers = [
  {
    title: "Nombre",
    sortable: true,
    value: "name",
  },
  {
    title: "Atencion para",
    sortable: true,
    value: "type",
  },
  {
    title: "Estado",
    sortable: true,
    value: "status",
  },
  {
    title: "",
    value: "actions",
  },
];

const statusItems = [
  { title: "Activo", value: true },
  { title: "Inactivo", value: false },
];

const loading = ref(false);

const options = ref({
  page: 1,
  itemsPerPage: 10,
  search: "",
  filters: {} as any,
  sortBy: [],
  groupBy: "",
});

const items: Ref<DataTableResponse<TypeAtention> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async (options: any) => {
  loading.value = true;
  options.value = { ...options.value, ...options };
  items.value = await getItems(options.value);
  loading.value = false;
};
</script>
