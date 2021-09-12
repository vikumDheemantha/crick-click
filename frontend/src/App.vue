<template>
  <v-app>
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
  },
};
</script>
