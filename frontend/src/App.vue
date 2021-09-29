<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <component :is="layout">
      <v-main>
        <router-view />
      </v-main>
    </component>
  </v-app>
</template>

<script>
const defaultLayout = "DefaultLayout";
export default {
  components: {},
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
    theme() {
      return "light";
      // return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
  },
};
</script>
