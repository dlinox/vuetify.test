import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";

import * as components from "./components";
import theme from "./themes";
import defaults from "./defaults";

const vuetify = createVuetify({
  components: components,
  defaults: defaults,
  theme: theme,
});

export default vuetify;
