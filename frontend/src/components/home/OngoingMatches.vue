<template>
  <section>
    <div class="strike">
      <span class="text-h5 primary--text font-weight-medium">Ongoing matches</span>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="x in matches" :key="x">
          <live-match-card />
        </v-col>
      </v-row>
    </v-container>
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
.strike {
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.strike > span {
  position: relative;
  display: inline-block;
}

.strike > span:before,
.strike > span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 9999px;
  height: 3px;
  background: #ffcf00;
}

.strike > span:before {
  right: 100%;
  margin-right: 15px;
}

.strike > span:after {
  left: 100%;
  margin-left: 15px;
}
</style>