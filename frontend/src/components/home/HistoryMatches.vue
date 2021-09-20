<template>
  <section class="mt-5">
    <h2 align="center" class="mt-2">Past matches</h2>
    <v-row>
      <v-col cols="3" v-for="x in matches" :key="x">
        <live-match-card />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import LiveMatchCard from "./LiveMatchCard.vue";
export default {
  data() {
    return {
      matches: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
  components: { LiveMatchCard },
};
</script>

<style>
</style>