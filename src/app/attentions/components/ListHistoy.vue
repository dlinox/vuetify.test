<template>
  <v-toolbar>
    <v-toolbar-title>Historial de Atenciones</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="init">
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
  </v-toolbar>
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
      <v-card-text class="d-flex justify-end">
        <v-icon class="me-2"> mdi-calendar </v-icon>
        {{ item.created_at }}
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn
          prepend-icon="mdi-send"
          color="orange"
          variant="tonal"
          density="compact"
          @click="sendSurvey(item)"
        >
          <small> Enviar encuesta de satisfacción </small>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="dialogSend" max-width="500">
      <v-card>
        <v-card-title> Enviar encuesta de satisfacción </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model.trim="formSend.email"
                :rules="[email, required]"
                label="Correo Electrónico"
                hint="Ingrese el correo electrónico al que se enviará la encuesta"
                persistent-hint
                ref="emailRef"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" type="button" @click="dialogSend = false">
            <small> cancelar </small>
          </v-btn>
          <v-btn color="primary" type="button" @click="confirmSendSurvey()">
            <small> Enviar </small>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup lang="ts">
import { getHistoty, sendEmail } from "@/app/attentions/services";
import { email, required } from "@/common/utils/ruleUtils";
import { Ref, ref } from "vue";
const props = defineProps({
  document: {
    type: String,
  },
  person: {
    type: Object as () => any,
  },
  person_type: {
    type: String,
  },
});

const dialogSend = ref(false);
const items: Ref<any[]> = ref([]);

const emailRef = ref<HTMLInputElement | null>(null);
const formSend = ref({
  attention_id: "",
  person_type: props.person_type,
  person_id: props.person?.id,
  email: props.person?.email,
});

const sendSurvey = async (item: any) => {
  dialogSend.value = true;
  formSend.value.attention_id = item.id;
  console.log("sendSurvey");
};

const confirmSendSurvey = async () => {
  //validate email con expresion regular

  if (
    !formSend.value?.email?.match(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    )
  ) {
    alert("Correo no válido");
    return;
  }

  await sendEmail(formSend.value);
  console.log("confirmSendSurvey");
};

const init = async () => {
  items.value = await getHistoty(props.document as string);
};

init();
</script>
