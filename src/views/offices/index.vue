<template>
  <v-card>
    <v-card-title>
      <v-row class="">
        <v-col cols="4">
          <v-text-field
            label="Buscar"
            prepend-inner-icon="mdi-magnify"
            density="comfortable"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-select
            label="Estado"
            :items="[
              { title: 'Todos', value: '' },
              { title: 'Activo', value: '1' },
              { title: 'Inactivo', value: '0' },
            ]"
            density="comfortable"
          ></v-select>
        </v-col>
        <v-col cols="6" align-self="end" class="text-right">
          <v-btn color="primary">Nuevo</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>
    ads
  </v-card>
</template>
<script setup lang="ts"></script>
