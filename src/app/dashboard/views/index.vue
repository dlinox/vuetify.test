<template>
  <v-row>
    <v-col cols="12" md="6">
      <v-card>
        <v-card-item>
          <apexchart
            width="100%"
            type="line"
            :options="options"
            :series="series"
          ></apexchart>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <PerMonthGraph />
    </v-col>
  </v-row>

  <pre>
    {{ report }}
  </pre>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { getAttentionsByMonth } from "@/app/dashboard/services";

import PerMonthGraph from "@/app/dashboard/components/PerMonthGraph.vue";

const series : Ref<any[]> = ref([
  {
    name: "Estudiantes",
    data: [1, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0],
  },
]);

const options = ref({
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  title: {
    text: "Atenciones por mes",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
  },
});

const report = ref(null);

const getAttentionsByYear = async (year: number) => {
  series.value = await getAttentionsByMonth(year);
};

const init = async () => {
  await getAttentionsByYear(2024);
};

init();
</script>
