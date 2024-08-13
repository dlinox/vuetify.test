<template>
  <v-row justify="center">
    <v-col cols="8" md="6" class="mt-8">
      <v-text-field
        v-model="search"
        label="Buscar"
        class="w-80"
        @update:model-value="searchItem"
      >
        <template v-slot:append-inner>
          <v-btn icon size="small" @click="searchItem">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12">
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.id"
          @click="goToAttention(item)"
        >
          <template v-slot:prepend>
            <v-icon>mdi-account</v-icon>
          </template>
          <v-list-item-title>
            {{ item.document_number }} | {{ item.name }}
            {{ item.paternal_surname }}
            {{ item.maternal_surname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- {{ item.career_name }} {{ item.student_code }} -->
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { searchWorker } from "@/app/attentions/services";

import { useRouter } from "vue-router";
const router = useRouter();
const search = ref("");

const items: Ref<any[]> = ref([]);

const goToAttention = async (student: any) => {
  router.push(`/a/attentions/worker/${student.document_number}`);
};

const searchItem = async () => {
  items.value = await searchWorker(search.value);
};
</script>
