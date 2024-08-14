<template>
  <v-container>
    <v-card
      v-for="(item, index) in items"
      :key="index"
      variant="tonal"
      class="mb-4"
    >
      <v-card-title>
        {{ item.type_attention_name }}
      </v-card-title>
      <v-card-text>
        {{ item.description }}
      </v-card-text>
      <v-card-actions>
        <v-icon class="me-2"> mdi-calendar </v-icon>
        {{ item.created_at }}
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { getHistoty } from "@/app/attentions/services";
import { Ref, ref } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  document: {
    type: String,
  },
});

const route = useRoute();

const items: Ref<any[]> = ref([]);

const init = async () => {
  items.value = await getHistoty(route.params.document as string);
};

init();
</script>
