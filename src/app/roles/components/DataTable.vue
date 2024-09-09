<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <Form @onSuccess="loadItems(options)" :permissions="permissions">
            <template v-slot:btn="{ activator }">
              <v-btn
                v-bind="activator"
                color="primary"
                icon="mdi-plus-circle-outline"
                v-permission="['roles.create']"
                class="me-2"
              />
            </template>
          </Form>
          <v-text-field v-model="options.search" label="Buscar" />
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
    >
      <template v-slot:item.actions="{ item }">
        <div class="d-flex justify-end">
          <Form
            :form-state="item"
            @onSuccess="loadItems(options)"
            :permissions="permissions"
          >
            <template v-slot:btn="{ activator }">
              <v-btn
                v-bind="activator"
                density="comfortable"
                icon="mdi-pencil"
                class="text-button"
                v-permission="['roles.update']"
                variant="tonal"
              />
            </template>
          </Form>
        </div>
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";

import type { DataTableResponse } from "@/common/types/data-table.types";
import type { Role } from "@/app/roles/types";

import {
  DataTableDefaultResponse,
} from "@/common/constants/data-table.constants";

import { getItems, getPermissions } from "@/app/roles/services";

import Form from "@/app/roles/components/Form.vue";

const headers = [
  {
    title: "Nombre",
    sortable: true,
    value: "name",
  },

  {
    title: "",
    value: "actions",
  },
];

const loading = ref(false);
const options = ref({
  page: 1,
  itemsPerPage: 10,
  search: "",
  filters: {},
  sortBy: [],
  groupBy: "",
});

const permissions: Ref<any[]> = ref([]);

const items: Ref<DataTableResponse<Role> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async (options: any) => {
  loading.value = true;
  options.value = { ...options.value, ...options };
  items.value = await getItems(options.value);
  loading.value = false;
};

const init = async () => {
  await loadItems(options.value);
  permissions.value = await getPermissions();
};

onMounted(init);
</script>
