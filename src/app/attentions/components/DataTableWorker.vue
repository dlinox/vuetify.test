<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="d-flex justify-end align-end">
          <v-btn
            icon
            @click="exportExcel"
            class="mr-2"
            color="green"
            variant="tonal"
          >
            <v-icon>mdi-file-excel</v-icon>
          </v-btn>

          <v-btn
            icon
            @click="exportPdf(items?.data, options)"
            class="mr-2"
            color="red"
            variant="tonal"
             v-permission="['reports.pdf']"
          >
            <v-icon>mdi-file-pdf-box</v-icon>
          </v-btn>

          <v-text-field class="ms-2" v-model="options.search" label="Buscar" />
        </v-col>

        <v-col cols="12" md="7">
          <v-card
            variant="tonal"
            class="w-100 d-flex justify-end align-end py-1"
          >
            <v-row>
              <v-col cols="6">
                <v-text-field
                  class="ms-2"
                  v-model="options.startDate"
                  label="Fecha Inicio"
                  type="date"
                  density="comfortable"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="ms-2"
                  v-model="options.endDate"
                  label="Fecha Fin"
                  type="date"
                  density="comfortable"
                />
              </v-col>
            </v-row>
            <v-btn
              icon="mdi-magnify"
              class="mx-2"
              color="black"
              density="comfortable"
              @click="loadItems(options)"
            >
            </v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-end">
          <v-select
            v-model="options.filters.type_attention_id"
            :items="typeAttentions"
            label="Tipo de atención"
            clearable
            class="mr-2"
            @update:model-value="loadItems(options)"
          />
          <v-select
            v-model="options.filters.user_id"
            :items="users"
            label="Usuario"
            dense
            outlined
            clearable
            class="mr-2"
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
      <template v-slot:item.actions="{ item }">
        <FormAttention
          :form-state="item"
          @onSuccess="loadItems(options)"
          :offices="offices"
          :type-attentions="typeAttentions"
          :person_id="item.person_id"
          person_type="001"
        >
          <template v-slot:btn="{ activator }">
            <v-btn
              v-bind="activator"
              density="comfortable"
              icon="mdi-pencil"
              class="text-button"
              variant="tonal"
            />
          </template>
        </FormAttention>
        <DeleteItem :id="item.id" @onSuccess="loadItems" />
      </template>
    </v-data-table-server>
  </v-card>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";

import type { DataTableResponse } from "@/common/types/data-table.types";
import type { AttentionReport } from "@/app/attentions/types";

import DeleteItem from "@/app/attentions/components/DeleteItem.vue";

import { DataTableDefaultResponse } from "@/common/constants/data-table.constants";

import { getItemsStudent, exportPdf } from "@/app/attentions/services";

import FormAttention from "@/app/attentions/components/FormAttention.vue";
import { SelectItem } from "@/common/types/select.types";

// @ts-ignore
import ExportJsonExcel from "js-export-excel";

const props = defineProps<{
  typeAttentions: SelectItem[];
  offices: SelectItem[];
  users: SelectItem[];
  type: string;
}>();

interface OptionsExcel {
  datas: any[];
  fileName: string;
  type: string;
}

const optionsExcel: Ref<OptionsExcel> = ref({
  datas: [],
  fileName: "reporte",
  type: "xlsx",
});

const exportExcel = () => {
  optionsExcel.value.datas = [
    {
      sheetData: items.value?.data,
      sheetName: "Reporte",
      sheetFilter: [
        "report_number",
        "type_attention_name",
        "person_document",
        "person_code",
        "person_name",
        "unit_name",
        "user_name",
        "created_at",
      ],
      sheetHeader: [
        "N° Reporte",
        "Tipo de atención",
        "Documento",
        "Código",
        "Nombre",
        "Unidad",
        "Usuario",
        "Fecha",
      ],
    },
  ];

  const toExport = new ExportJsonExcel(optionsExcel.value);
  toExport.saveExcel();
};

const headers = [
  {
    title: "N° Reporte",
    value: "report_number",
  },
  {
    title: "Trabajador",
    value: "person_name",
  },
  {
    title: "Documento",
    value: "person_document",
  },
  {
    title: "Código",
    value: "person_code",
  },
  {
    title: "Unidad",
    value: "unit_name",
  },
  {
    title: "Tipo de atención",
    value: "type_attention_name",
  },
  {
    title: "Usuario",
    value: "user_name",
  },
  // {
  //   title: "Oficina",
  //   value: "user_office_id",
  // },
  {
    title: "Fecha",
    value: "created_at",
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
  filters: {} as any,
  sortBy: [],
  startDate: null,
  endDate: null,
});

const items: Ref<DataTableResponse<AttentionReport> | null> = ref({
  ...DataTableDefaultResponse,
});

const loadItems = async (options: any) => {
  loading.value = true;
  options.value = { ...options.value, ...options };
  items.value = await getItemsStudent(options.value, props.type);
  loading.value = false;
};
</script>
