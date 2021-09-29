import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#a31621",
        secondary: "#ffcf00",
        acent: "#1d1e2c",
        error: "#b71c1c",
        background: "#FCFCFC",
      },
      dark: {
        primary: "#a31621",
        secondary: "#ffcf00",
        accent: "#1d1e2c",
        error: "#b71c1c",
        background: "#FCFCFC",
      },
    },
  },
});
