<template>
  <section class="mt-5">
    <div class="strike">
      <span class="text-h5 primary--text font-weight-medium">Past matches</span>
    </div>
    <v-container fluid>
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
          <history-match-card
            :name="x.name"
            :type="x.type"
            :location="x.location"
            :team1="x.team1"
            :team2="x.team2"
            :winner="x.winner"
            :wonBy="x.wonBy"
            :numberOfOvers="x.numberOfOvers"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import HistoryMatchCard from "./HistoryMatchCard.vue";
import { getPastMatches } from "../../firebase/matchs.firebase";

export default {
  data() {
    return {
      matches: [],
    };
  },
  components: { HistoryMatchCard },
  async mounted() {
    this.matches = await getPastMatches();
  },
};

// export default {
//   data() {
//     return {
//       matches: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
//     };
//   },
//   components: { HistoryMatchCard },
// };
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
