<template>
  <AppHeading title="Bienvenido" subtitle="Listado de encuestas disponibles" />
  <v-container>
    <v-row>
      <v-col cols="12" v-for="(item, index) in surveys" :key="index">
        <v-card variant="outlined" class="mx-auto">
          <v-card-item>
            <div>
              <div class="text-overline mb-1"></div>
              <div class="text-h6 mb-1">
                {{ item.title }}
              </div>
              <div class="text-caption">
                {{ item.description }}
              </div>
            </div>
          </v-card-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn link color="primary" :to="`/survey/${item.id}`">
              Participar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import AppHeading from "@/layouts/components/AppHeading.vue";

import { ref } from "vue";
import { _Surveys } from "@/services/survey.services";
import { Survey } from "@/types/survey.types";

const surveys = ref<Survey[]>([]);

const init = async () => {
  surveys.value = await _Surveys();
};

init();
</script>
