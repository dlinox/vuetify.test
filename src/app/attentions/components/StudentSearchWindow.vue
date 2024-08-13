<template>
  <v-row justify="center">
    <v-col cols="8" md="6" class="mt-8">
      <v-text-field
        v-model="search"
        label="Buscar"
        class="w-80"
        @update:model-value="searchStudent"
      >
        <template v-slot:append-inner>
          <v-btn icon size="small" @click="searchStudent">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
      </v-text-field>
    </v-col>
    <v-col cols="12">
      <v-list>
        <v-list-item
          v-for="student in students"
          :key="student.id"
          @click="goToAttentionStudent(student)"
        >
          <template v-slot:prepend>
            <v-icon>mdi-account</v-icon>
          </template>
          <v-list-item-title>
            {{ student.document_number }} | {{ student.name }}
            {{ student.paternal_surname }}
            {{ student.maternal_surname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ student.career_name }} {{ student.student_code }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { fakeStudents } from "@/common/constants/fake-students.ts";
import { receiveStudent } from "@/app/attentions/services";
import { useRouter } from "vue-router";
const router = useRouter();
const search = ref("");

const students: Ref<any[]> = ref([]);

const FakeApi = async (search: string) => {
  return fakeStudents.filter((student) => {
    return student.document_number.toLowerCase().includes(search.toLowerCase());
  });
};

const goToAttentionStudent = async (student: any) => {
  await receiveStudent(student);
  router.push(`/a/attentions/student/${student.document_number}`);
};

const searchStudent = async () => {
  console.log(fakeStudents);
  students.value = await FakeApi(search.value);
  console.log(students);
  //siular api con FakeStudents
};
</script>
