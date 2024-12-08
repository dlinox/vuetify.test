<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form
            @onSuccess="loadItems(options)"
            :offices="officeItems"
            :roles="roleItems"
          >
            <template v-slot:btn="{ activator }">
              <v-btn
                v-bind="activator"
                color="primary"
                icon="mdi-plus-circle-outline"
                class="me-2"
                v-permission="['users.create']"
                v-tooltip="'Nuevo Registro'"
              />
            </template>
          </Form>
          <v-text-field v-model="options.search" label="Buscar" />
        </v-col>
        <v-col cols="12" md="7" class="d-flex justify-end align-end">
          <v-select
            v-model="options.filters.office_id"
            label="Oficina"
            :items="officeItems"
            clearable
            @update:model-value="loadItems(options)"
            class="me-2"
          />

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
        <Form
          :form-state="item"
          @onSuccess="loadItems(options)"
          :offices="officeItems"
          :roles="roleItems"
        >
          <template v-slot:btn="{ activator }">
            <v-btn
              v-bind="activator"
              density="comfortable"
              icon="mdi-pencil"
              class="text-button"
              variant="tonal"
              v-permission="['users.update']"
              v-tooltip="'Editar Registro'"
            />
          </template>
        </Form>
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

import type { DataTableResponse } from "@/common/types/data-table.types";
import type { User } from "@/app/users/types";

import {
  DataTableDefaultResponse,
  // DataTableDefaultOptions,
} from "@/common/constants/data-table.constants";

import { getItems, getItemsOffices, getItemsRoles } from "@/app/users/services";

import Form from "@/app/users/components/Form.vue";
import { SelectItem } from "@/common/types/select.types";

const officeItems: Ref<SelectItem[]> = ref([]);
const roleItems: Ref<SelectItem[]> = ref([]);

const headers = [
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
    title: "Número de Documento",
    sortable: true,
    value: "document_number",
  },
  {
    title: "Correo Electrónico",
    sortable: true,
    value: "email",
  },
  {
    title: "Estado",
    sortable: true,
    value: "status",
  },
  {
    title: "Rol",
    sortable: true,
    value: "role_name",
  },
  {
    title: "Oficina",
    sortable: true,
    value: "office_name",
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

const items: Ref<DataTableResponse<User> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async (op: any) => {
  loading.value = true;
  options.value = {
    ...options.value,
    ...op,
    filters: { ...options.value.filters },
  };
  items.value = await getItems(options.value);
  loading.value = false;
};

const init = async () => {
  officeItems.value = await getItemsOffices();
  roleItems.value = await getItemsRoles();
};

onMounted(init);
</script>
