<template>
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
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getAttentionsByMonthType } from "@/app/dashboard/services";

const series = ref([
  {
    name: "Estudiantes",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Docentes",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    name: "Administrativos",
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    text: "Atenciones por mes y tipo",
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

const getAttentionsByYearType = async (year: number) => {
  series.value = await getAttentionsByMonthType(year);
};

const init = async () => {
  await getAttentionsByYearType(2024);
};

init();
</script>
