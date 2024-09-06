<template>
  <DataTableProfessor
    :type-attentions="typeAttentions"
    :offices="offices"
    type="002"
    :users="users"
  />
</template>
<script lang="ts" setup>
import DataTableProfessor from "@/app/attentions/components/DataTableProfessor.vue";
import { SelectItem } from "@/common/types/select.types";

defineProps({
  typeAttentions: {
    type: Array as () => SelectItem[],
    default: () => [],
  },
  offices: {
    type: Array as () => SelectItem[],
    default: () => [],
  },
  users: {
    type: Array as () => SelectItem[],
    default: () => [],
  },
});
</script>
