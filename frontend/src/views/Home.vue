<template>
  <v-content class="pt-0">
    <top-banner />
    <breef-intro />
  </v-content>
</template>

<script>
import BreefIntro from "../components/home/BreefIntro.vue";
import TopBanner from "../components/home/TopBanner.vue";
export default {
  name: "Home",
  data() {
    return {
      image: null,
    };
  },
  components: { TopBanner, BreefIntro },
};
</script>
