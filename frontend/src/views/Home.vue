<template>
  <v-content class="pt-0">
    <top-banner />
    <breef-intro />
    <ongoing-matches />
    <history-matches />
  </v-content>
</template>

<script>
import BreefIntro from "../components/home/BreefIntro.vue";
import HistoryMatches from "../components/home/HistoryMatches.vue";
import OngoingMatches from "../components/home/OngoingMatches.vue";
import TopBanner from "../components/home/TopBanner.vue";
export default {
  name: "Home",
  data() {
    return {
      image: null,
    };
  },
  components: {
    TopBanner,
    BreefIntro,
    OngoingMatches,
    HistoryMatches,
  },
};
</script>