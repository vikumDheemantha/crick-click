<template>
  <div class="mt-3">
    <div class="strike">
      <span class="text-overline primary--text fon6-weight-medium"
        >Search Result</span
      >
    </div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
          v-for="x in matches"
          :key="x"
        >
          <history-match-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HistoryMatchCard from "../home/HistoryMatchCard.vue";

export default {
  components: { HistoryMatchCard },
  data() {
    return {
      matches: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    };
  },
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
  height: 1px;
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
