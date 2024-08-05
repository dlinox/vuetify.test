<template>
  <AppHeading v-if="survey.title" title="Encuesta" :subtitle="survey?.title" />

  <v-container>
    <v-card>
      <v-card-title> Secccion </v-card-title>
      <v-divider></v-divider>

      <v-container v-if="sections.length === 1">
        <v-card
          v-for="question  in sections[0].questions as Question[]"
          :key="question.id"
          class="border mb-5"
          elevation="0"
        >
          <v-card-title>
            {{ question.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ question.help }}
          </v-card-subtitle>
          <QuestionComponent :question="question" />
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import AppHeading from "@/layouts/components/AppHeading.vue";
import { useRoute } from "vue-router";
import { ref, Ref } from "vue";
import { _Survey, _Sections } from "@/services/survey.services";
import { type Survey, type Section, type Question } from "@/types/survey.types";
import QuestionComponent from "@/views/components/QuestionComponent.vue";

const route = useRoute();
const survey: Ref<Survey> = ref({} as Survey);
const sections: Ref<Section[]> = ref([]);
const init = async () => {
  survey.value = await _Survey(route.params.surveyId as string);
  sections.value = await _Sections(route.params.surveyId as string);
};

init();
</script>
