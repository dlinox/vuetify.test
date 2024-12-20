import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { createVuetify } from "vuetify";

import * as components from "./components";
import theme from "./themes";
import defaults from "./defaults";
import { Tooltip } from "vuetify/directives";

const vuetify = createVuetify({
  components: components,
  defaults: defaults,
  theme: theme,
  directives: {
    Tooltip: Tooltip, // Agrega la directiva de tooltip
  },
});

export default vuetify;
