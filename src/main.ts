import { createApp } from "vue";

import App from "./App.vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import permission from "./directives/permissions";
import "./style.css";
//router
import router from "./router";

const pinia = createPinia();

const app = createApp(App);
app.directive("permission", permission);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.mount("#app");


