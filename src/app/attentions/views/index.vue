<template>
  <v-row no-gutters>
    <v-col cols="12" md="7">
      <v-card class="rounded-0">
        <v-toolbar density="compact" title="Nueva tencion">
          <template #extension>
            <v-tabs v-model="tab">
              <v-tab value="student" v-permission="['attentions.student']">
                <small>Estudiantes</small>
              </v-tab>
              <v-tab value="professor" v-permission="['attentions.professor']">
                <small>Docentes</small>
              </v-tab>
              <v-tab value="worker" v-permission="['attentions.worker']">
                <small>Adminitrativos / Cas / Obras</small>
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item
            value="student"
            v-permission="['attentions.student']"
          >
            <StudentSearchWindow />
          </v-tabs-window-item>
          <v-tabs-window-item
            value="professor"
            v-permission="['attentions.professor']"
          >
            <ProfessorSearchWindow />
          </v-tabs-window-item>
          <v-tabs-window-item
            value="worker"
            v-permission="['attentions.worker']"
          >
            <WorkerSearchWindow />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-col>
    <v-col cols="12" md="5">
      <v-card class="rounded-0">
        <v-toolbar density="compact" title="Hoy">
          <v-spacer></v-spacer>
          <v-btn
            link
            to="/a/attentions/reports"
            v-permission="['attentions.report']"
          >
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

          <template v-slot:prepend>

            
            <DeleteItem :id="item.id"  @onSuccess="getToday"/>

            <FormAttention
              :form-state="item"
              @onSuccess="getToday"
              :offices="offices"
              :type-attentions="typeAttentions"
              :person_id="item.person_id"
              person_type="001"
            >
              <template v-slot:btn="{ activator }">
                <v-btn
                  icon
                  density="comfortable"
                  variant="tonal"
                  color="teal-darken-3"
                  v-bind="activator"
                  
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
            </FormAttention>
          </template>
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
import FormAttention from "@/app/attentions/components/FormAttention.vue";
import DeleteItem from "@/app/attentions/components/DeleteItem.vue";

import { getTodayAttentions } from "@/app/attentions/services";
import { getTypeAttentions, getItemsOffices } from "@/app/attentions/services";
import { SelectItem } from "@/common/types/select.types";
const tab = ref("one");

const attentions: Ref<Attention[]> = ref([]);

const typeAttentions: Ref<SelectItem[]> = ref([]);
const offices: Ref<SelectItem[]> = ref([]);

interface Attention {
  id: number;
  type_attention_name: string;
  person_name: string;
  unit_name: string;
  person_id: number;
  now: string;
}



const getToday = async () => {
  attentions.value = await getTodayAttentions();
};

const init = async () => {
  await getToday();

  typeAttentions.value = await getTypeAttentions();
  offices.value = await getItemsOffices();
};

init();
</script>
