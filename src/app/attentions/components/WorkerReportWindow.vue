<template>
  <DataTableWorker
    :type-attentions="typeAttentions"
    :offices="offices"
    :users="users"
    type="003"
  />
</template>
<script lang="ts" setup>
import DataTableWorker from "@/app/attentions/components/DataTableWorker.vue";
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
