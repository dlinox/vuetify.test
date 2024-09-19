<template>
  <v-row justify="center">
    <v-col cols="8" md="6" class="mt-8">
      <v-form ref="formRef" @submit.prevent="searchStudent">
        <v-text-field
          v-model="search"
          label="Buscar por código de estudiante"
          class="w-80"
          :rules="rules"
        >
          <template v-slot:append-inner>
            <v-btn icon size="small" @click="searchStudent">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-form>
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
            {{ student.document }} | {{ student.fullName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            [{{ student.studentCode }}] {{ student.professionalSchool }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { receiveStudent,  _getStudentByCode_ } from "@/app/attentions/services";
import { useRouter } from "vue-router";

const router = useRouter();

const search = ref("");
const formRef = ref<HTMLFormElement | null>(null);

const students: Ref<any[]> = ref([]);

// 6 digit only numbers
const rules = [
  (v: string) => !!v || "Este campo es requerido",
  (v: string) => (v && v.length === 6) || "Debe tener 6 dígitos",
  (v: string) => /^[0-9]*$/.test(v) || "Solo se permiten números",
];

const goToAttentionStudent = async (student: any) => {
  await receiveStudent(student);
  router.push(`/a/attentions/student/${student.studentCode}`);
};

const searchStudent = async () => {
  const { valid } = await formRef.value!.validate();
  if (!valid) return;
  let response = await _getStudentByCode_(search.value);
  students.value = [response.data];
};
</script>
