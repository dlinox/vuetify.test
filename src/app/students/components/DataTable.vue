<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form @onSuccess="loadItems(options)" v-if="false">
            <template v-slot:btn="{ activator }">
              <v-btn
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
          <!-- <v-select
            v-model="options.filters.status"
            label="Estado"
            :items="statusItems"
            clearable
            @update:model-value="loadItems(options)"
          /> -->
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
      item-value="student_code"
      @update:options="loadItems"
    >
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.status ? 'info' : 'error'">
          {{ item.status ? "Activo" : "Inactivo" }}
        </v-chip>
      </template>
      <template v-slot:item.actions="{ item }">
        <Form :form-state="item" @onSuccess="loadItems(options)" v-if="false">
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
import type { Student } from "@/app/students/types";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import { getItems } from "@/app/students/services";

import Form from "@/app/students/components/Form.vue";

const headers = [
  {
    title: "Codigo de Estudiante",
    sortable: true,
    value: "student_code",
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
    title: "Carrera",
    sortable: true,
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

// const statusItems = [
//   { title: "Activo", value: true },
//   { title: "Inactivo", value: false },
// ];

const loading = ref(false);
const options = ref({
  page: 1,
  itemsPerPage: 10,
  search: "",
  filters: {} as any,
  sortBy: [],
});

const items: Ref<DataTableResponse<Student> | null> = ref({
  ...DataTableDefaultResponse,
});


const loadItems = async (options: any) => {
  loading.value = true;
  options.value = { ...options.value, ...options };
  items.value = await getItems(options.value);
  loading.value = false;
};
</script>
