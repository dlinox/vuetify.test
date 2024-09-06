<template>
  <DataTableAll
    :type-attentions="typeAttentions"
    :offices="offices"
    type="000"
    :users="users"
  />
</template>
<script lang="ts" setup>
import DataTableAll from "@/app/attentions/components/DataTableAll.vue";
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
