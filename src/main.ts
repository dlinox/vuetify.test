import "./style.css";

import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";

import vuetify from "./plugins/vuetify";
import permission from "./directives/permissions";
import VueApexCharts from "vue3-apexcharts";

import "vue-toast-notification/dist/theme-sugar.css";

const pinia = createPinia();
const app = createApp(App);
app.directive("permission", permission);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(VueApexCharts);
app.mount("#app");
