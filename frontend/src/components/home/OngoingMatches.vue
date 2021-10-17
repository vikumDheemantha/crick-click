<template>
  <section>
    <div class="strike">
      <span class="text-h5 primary--text font-weight-medium"
        >Ongoing matches</span
      >
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="3" v-for="x in matches" :key="x">
          <live-match-card
            :name="x.name"
            :type="x.type"
            :location="x.location"
            :team1="x.team1"
            :team2="x.team2"
            :startedAt="x.startedAt"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// import { collection, getDocs } from "firebase/firestore";
import LiveMatchCard from "./LiveMatchCard.vue";
// import { db } from "../../main";
import { getAllMatches } from "../../firebase/matchs.firebase";
export default {
  data() {
    return {
      matches: [],
    };
  },
  components: { LiveMatchCard },
  async mounted() {
    this.matches = await getAllMatches();
  },
};
</script>

<style scoped>
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
