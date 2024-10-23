<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form @onSuccess="loadItems(options)" :careers="careerItems">
            <template v-slot:btn="{ activator }">
              <v-btn
                v-permission="['professors.create']"
                v-bind="activator"
                color="primary"
                icon="mdi-plus-circle-outline"
                class="me-2"
              />
            </template>
          </Form>
          <v-text-field v-model="options.search" label="Buscar" />
        </v-col>
        <v-col cols="12" md="2">
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
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.status ? 'info' : 'error'">
          {{ item.status ? "Activo" : "Inactivo" }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <Form :form-state="item" @onSuccess="loadItems" v-if="false">
          <template v-slot:btn="{ activator }">
            <v-btn
              v-bind="activator"
              density="comfortable"
              icon="mdi-pencil"
              class="text-button"
              variant="tonal"
            />
          </template>
        </Form>
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

import type { DataTableResponse } from "@/common/types/data-table.types";
import type { Professor } from "@/app/professors/types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import { getItems } from "@/app/professors/services";

import Form from "@/app/professors/components/Form.vue";

import { careers } from "@/common/constants/careers";

const headers = [
  {
    title: "DNI",
    value: "document_number",
    sortable: true,
  },
  {
    title: "Nombre",
    sortable: true,
    value: "name",
  },
  {
    title: "Apellido Paterno",
    sortable: true,
    value: "paternal_surname",
  },
  {
    title: "Apellido Materno",
    sortable: true,
    value: "maternal_surname",
  },
  {
    title: "Correo",
    sortable: true,
    value: "email",
  },
  {
    title: "Escuela Profesional",
    value: "career_name",
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

const careerItems = careers.map((career) => ({
  title: career.name,
  value: career.code,
}));

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
});

const items: Ref<DataTableResponse<Professor> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async (op: any) => {
  loading.value = true;
  console.log("options");
  options.value = {
    ...options.value,
    ...op,
    filters: { ...options.value.filters },
  };
  items.value = await getItems(options.value);
  loading.value = false;
};
</script>
