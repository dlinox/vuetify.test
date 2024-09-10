<template>
  <v-card>
    <v-card-item>
      <v-row justify="space-between">
        <v-col cols="12" md="5" class="">
          <v-btn
            icon
            class="mr-2"
            color="green"
            variant="tonal"
            @click="exportExcel"
          >
            <v-icon>mdi-file-excel</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="7" class="d-flex justify-end align-end">
          <v-btn color="primary" icon variant="tonal">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>
    <v-data-table :items="items" :headers="headers"></v-data-table>
  </v-card>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";

import { getReportUsers } from "@/app/reports/services";

// @ts-ignore
import ExportJsonExcel from "js-export-excel";

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
      sheetData: items.value,
      sheetName: "Reporte",
      sheetFilter: [
        "name",
        "paternal_surname",
        "maternal_surname",
        "email",
        "total_surveys",
        "average_score",
        "five_score",
        "four_score",
        "three_score",
        "two_score",
        "one_score",
        "no_score",
      ],
      sheetHeader: [
        "Nombre",
        "Apellido Paterno",
        "Apellido Materno",
        "Correo",
        "Total de atenciones",
        "Promedio",
        "5",
        "4",
        "3",
        "2",
        "1",
        "Sin calificar",
      ],
    },
  ];

  const toExport = new ExportJsonExcel(optionsExcel.value);
  toExport.saveExcel();
};

const items = ref([]);

const headers = [
  {
    key: "name",
    sortable: true,
    title: "Nombre",
  },
  {
    key: "paternal_surname",
    sortable: true,
    title: "Apellido Paterno",
  },
  {
    key: "maternal_surname",
    sortable: true,
    title: "Apellido Materno",
  },
  {
    key: "email",
    sortable: true,
    title: "Correo",
  },
  {
    key: "total_surveys",
    sortable: true,
    title: "Total de atenciones",
  },
  {
    key: "average_score",
    sortable: true,
    title: "Promedio",
  },
  {
    key: "five_score",
    sortable: true,
    title: "5",
  },
  {
    key: "four_score",
    sortable: true,
    title: "4",
  },
  {
    key: "three_score",
    sortable: true,
    title: "3",
  },
  {
    key: "two_score",
    sortable: true,
    title: "2",
  },
  {
    key: "one_score",
    sortable: true,
    title: "1",
  },
  {
    key: "no_score",
    sortable: true,
    title: "Sin calificar",
  },
];

const init = async () => {
  items.value = await getReportUsers();
};

init();
</script>
<style>
thead {
  background-color: #f5f5f5;
}
thead .v-data-table-header__content {
  font-weight: bold;
}
</style>
