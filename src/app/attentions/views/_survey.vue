<template>
  <div class="d-flex align-center justify-center h-screen">
    <v-card v-if="loadingInit" elevation="0" rounded="lg">
      <v-card-item class="">
        <v-img
          src="/sso-logo.jpg"
          alt="UNAP"
          width="150px"
          class="mb-6 mx-auto"
        />

        <div class="mb-6 text-center">
          <h3>Califica tu experiencia</h3>

          <small> Ayúdanos a mejorar </small>
        </div>
      </v-card-item>

      <v-card-item class="d-flex align-center justify-center">
        <v-progress-circular indeterminate color="black"></v-progress-circular>
      </v-card-item>
    </v-card>
    <v-card elevation="0" rounded="lg" max-width="500" class="bg-white" v-else>
      <v-card-item>
        <v-img
          src="/sso-logo.jpg"
          alt="UNAP"
          width="150px"
          class="mb-6 mx-auto"
        />

        <div class="mb-6 text-center">
          <h3>Califica tu experiencia</h3>

          <small> Ayúdanos a mejorar </small>
        </div>

        <v-alert type="error" variant="tonal" v-if="!survey">
          <span
            >La encuesta no existe, el enlace no es válido o ha expirado.</span
          >
        </v-alert>
        <v-alert type="info" variant="tonal" v-else-if="survey.score">
          <span>
            Ya has respondido la encuesta, gracias por tu tiempo.

            {{
              form.score === 5
                ? "Nos alegra que estés muy satisfecho con nuestro servicio."
                : ""
            }}
            {{
              form.score === 4
                ? "Nos alegra que estés satisfecho con nuestro servicio."
                : ""
            }}
            {{
              form.score === 3
                ? "Gracias por tu respuesta. Tomamos nota para seguir mejorando."
                : ""
            }}
            {{
              form.score === 2
                ? "Lamentamos que no hayas quedado satisfecho. Trabajaremos en ello."
                : ""
            }}
            {{
              form.score === 1
                ? "Sentimos que tu experiencia no haya sido buena. ¡Queremos mejorar!"
                : ""
            }}
          </span>
        </v-alert>

        <v-form @submit.prevent="submit" ref="formRef" v-else>
          <v-row>
            <v-col cols="12">
              <v-radio-group
                v-model="form.score"
                label="Nivel de Satisfacción"
                :rules="[required]"
              >
                <v-radio
                  v-for="item in levelSatifactionItems"
                  :key="item.value"
                  :label="item.title"
                  :value="item.value"
                />
              </v-radio-group>
            </v-col>
            <v-col cols="12">
              <v-textarea
                class="w-auto"
                v-model="form.comments"
                label="Comentarios (opcional)"
              />
            </v-col>

            <v-col cols="12">
              <v-btn color="black" block :loading="loading" type="submit">
                Enviar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useRoute } from "vue-router";

import { required } from "@/common/utils/ruleUtils";

import { getSurvey, responseSurvey } from "@/app/attentions/services";

const route = useRoute();

const form: Ref<any> = ref({
  score: null,
  comments: "",
});

const levelSatifactionItems = [
  { title: "Muy Satisfecho", value: 5 },
  { title: "Satisfecho", value: 4 },
  { title: "Neutral", value: 3 },
  { title: "Insatisfecho", value: 2 },
  { title: "Muy Insatisfecho", value: 1 },
];

const loading: Ref<boolean> = ref(false);
const loadingInit: Ref<boolean> = ref(false);

const submit = async (): Promise<void> => {
  loading.value = true;
  try {
    const response = await responseSurvey(
      form.value,
      route.params.token as string
    );

    if (response) {
      survey.value.score = form.value.score;
      survey.value.comments = form.value.comments;
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const survey = ref<any>(null);

const init = async () => {
  loadingInit.value = true;
  survey.value = await getSurvey(route.params.token as string);

  if (survey.value) {
    form.value.score = survey.value.score;
    form.value.comments = survey.value.comments;
  }
  console.log(survey);
  loadingInit.value = false;
};

init();
</script>
