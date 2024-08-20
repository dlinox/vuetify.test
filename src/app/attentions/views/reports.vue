<template>
  <v-toolbar>
    <v-tabs v-model="tab">
      <v-tab value="student">Estudiantes</v-tab>
      <v-tab value="professor">Docentes</v-tab>
      <v-tab value="worker">Adminitrativos / CAS / Obras </v-tab>
      <v-tab value="all">Todo </v-tab>
    </v-tabs>
  </v-toolbar>

  <v-tabs-window v-model="tab">
    <v-tabs-window-item value="student">
      <StudentReportWindow
        :type-attentions="typeAttentions"
        :offices="offices"
      />
    </v-tabs-window-item>
    <v-tabs-window-item value="professor">
      <ProfessorReportWindow
        :type-attentions="typeAttentions"
        :offices="offices"
      />
    </v-tabs-window-item>
    <v-tabs-window-item value="worker">
      <WorkerReportWindow
        :type-attentions="typeAttentions"
        :offices="offices"
      />
    </v-tabs-window-item>
    <v-tabs-window-item value="all">
      <AllReportWindow
        :type-attentions="typeAttentions"
        :offices="offices"
      />
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script lang="ts" setup>
import { Ref, ref } from "vue";
import StudentReportWindow from "@/app/attentions/components/StudentReportWindow.vue";

import { getTypeAttentions, getItemsOffices } from "@/app/attentions/services";
import { SelectItem } from "@/common/types/select.types";
import ProfessorReportWindow from "@/app/attentions/components/ProfessorReportWindow.vue";
import WorkerReportWindow from "@/app/attentions/components/WorkerReportWindow.vue";
import AllReportWindow from "@/app/attentions/components/AllReportWindow.vue";

const typeAttentions: Ref<SelectItem[]> = ref([]);
const offices: Ref<SelectItem[]> = ref([]);

const tab = ref("student");

const init = async () => {
  typeAttentions.value = await getTypeAttentions();
  offices.value = await getItemsOffices();
};

init();
</script>
