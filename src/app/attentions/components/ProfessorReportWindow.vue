<template>
  <DataTableStudent :type-attentions="typeAttentions" :offices="offices" type="002" />
</template>
<script lang="ts" setup>
import DataTableStudent from "@/app/attentions/components/DataTableStudent.vue";
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
});
</script>
