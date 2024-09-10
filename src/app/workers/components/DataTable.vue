<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form @onSuccess="loadItems" :offices="offices">
            <template v-slot:btn="{ activator }">
              <v-btn
                v-permission="['workers.create']"
                v-bind="activator"
                color="primary"
                icon="mdi-plus-circle-outline"
                class="me-2"
              />
            </template>
          </Form>
          <v-text-field v-model="options.search" label="Buscar" />
        </v-col>

        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <v-select
            v-model="options.filters.type"
            label="Tipo"
            :items="typeItems"
            clearable
            class="me-2"
            @update:model-value="loadItems"
          />
          <v-select
            v-model="options.filters.status"
            label="Estado"
            :items="statusItems"
            clearable
            @update:model-value="loadItems"
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
        <Form :form-state="item" @onSuccess="loadItems" :offices="offices">
          <template v-slot:btn="{ activator }">
            <v-btn
              v-permission="['workers.update']"
              v-bind="activator"
              density="comfortable"
              icon="mdi-pencil"
              class="text-button"
              variant="tonal"
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
import type { Worker } from "@/app/workers/types";

import {
  DataTableDefaultResponse,
  DataTableDefaultOptions,
} from "@/common/constants/data-table.constants";

import { getItems, getItemsOffices } from "@/app/workers/services";

import Form from "@/app/workers/components/Form.vue";
import { SelectItem } from "@/common/types/select.types";

const headers = [
  {
    title: "DNI",
    value: "document_number",
    sortable: true,
  },
  {
    title: "Nombre",
    value: "name",
    sortable: true,
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
    title: "Tipo",
    sortable: true,
    value: "type_name",
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

const typeItems = [
  { title: "Administrativo", value: "001" },
  { title: "Cas", value: "002" },
  { title: "Obrero", value: "003" },
  { title: "Profecional de Obra", value: "004" },
];

const loading = ref(false);
const options = ref({ ...DataTableDefaultOptions });

const offices: Ref<SelectItem[]> = ref([]);

const items: Ref<DataTableResponse<Worker> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async () => {
  loading.value = true;
  items.value = await getItems(options.value);
  loading.value = false;
};

const init = async () => {
  offices.value = await getItemsOffices();
};

init();
</script>
