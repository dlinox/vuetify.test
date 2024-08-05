<template>
  <template v-if="question.structureType === 'S007'">

    <BinaryQuestion :label="question.title" v-model="question.answer" />

  </template>
</template>
<script setup lang="ts">
import BinaryQuestion from "@/views/components/structureTypes/BinaryQuestion.vue";

import { type Question } from "@/types/survey.types";

defineProps<{
  question: Question;
}>();
</script>
