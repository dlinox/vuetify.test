<template>
  <v-btn
    @click="dialog = true"
    color="red"
    variant="tonal"
    icon="mdi-delete-empty"
    density="comfortable"
    class="mx-1"
  >
  </v-btn>

  <v-dialog v-model="dialog" max-width="400" persistent>
    <v-card title="¿Seguro(a) de eliminar la atencion?">
      <v-card-text> Se eliminara permanentemente </v-card-text>
      <template v-slot:actions>
        <v-spacer></v-spacer>

        <v-btn @click="dialog = false" color="secondary"> Cancelar </v-btn>

        <v-btn @click="deleteConfirm" variant="flat"> Eliminar </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { deleteItem } from "@/app/attentions/services";

const dialog: Ref<boolean> = ref(false);

const emiit = defineEmits(["onSuccess"]);

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const deleteConfirm = async () => {
  let response = await deleteItem(props.id);

  if (response) {
    emiit("onSuccess");
    dialog.value =  false;
  }
};
</script>
