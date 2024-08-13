<template>
  <v-row no-gutters>
    <v-col cols="12" md="7">
      <v-card class="rounded-0">
        <v-toolbar density="compact" title="Nueva tencion">
          <template #extension>
            <v-tabs v-model="tab">
              <v-tab value="student">
                <small>Estudiantes</small>
              </v-tab>
              <v-tab value="professor">
                <small>Docentes</small>
              </v-tab>
              <v-tab value="worker">
                <small>Adminitrativos / Cas / Obras</small>
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="student">
            <StudentSearchWindow />
          </v-tabs-window-item>
          <v-tabs-window-item value="professor">
            <ProfessorSearchWindow />
          </v-tabs-window-item>
          <v-tabs-window-item value="worker">
            <WorkerSearchWindow />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-col>
    <v-col cols="12" md="5">
      <v-card class="rounded-0">
        <v-toolbar density="compact" title="Hoy">
          <v-spacer></v-spacer>
          <v-btn>
            <small>ver todo</small>
          </v-btn>
        </v-toolbar>
        <v-list-item v-for="item in attentions" :key="item.id" class="border-t">
          <v-list-item-title>
            {{ item.type_attention_name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.person_name }}
          </v-list-item-subtitle>

          <v-list-item-subtitle>
            <small> {{ item.unit_name }} </small>
          </v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import StudentSearchWindow from "@/app/attentions/components/StudentSearchWindow.vue";
import ProfessorSearchWindow from "@/app/attentions/components/ProfessorSearchWindow.vue";
import WorkerSearchWindow from "@/app/attentions/components/WorkerSearchWindow.vue";
import { getTodayAttentions } from "@/app/attentions/services";
const tab = ref("one");

const attentions: Ref<Attention[]> = ref([]);

interface Attention {
  id: number;
  type_attention_name: string;
  person_name: string;
  unit_name: string;
}

const init = async () => {
  attentions.value = await getTodayAttentions();
};

init();
</script>
