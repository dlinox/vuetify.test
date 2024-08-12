<template>
  <v-radio-group inline v-model="value" :required="required">
    <v-radio label="Si" :value="true"></v-radio>
    <v-radio label="No" :value="false"></v-radio>
  </v-radio-group>
</template>
<script setup lang="ts">
import { computed } from "vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  label: string;
  modelValue: boolean;
  required?: boolean;
}>();

const value = computed({
  get: () => props.modelValue as boolean,
  set: (value: boolean) => emit("update:modelValue", value),
});
</script>
