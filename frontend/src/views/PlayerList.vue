<template>
  <v-container>
    <h3 class="primary--text my-5">All Players</h3>
    <search-filter />
    <v-row>
      <v-col cols="12" md="8">
        <player-table :players="players" />
      </v-col>
      <v-col cols="12" md="4">
        <player-profile-card />
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import PlayerProfileCard from "../components/playerList/PlayerProfileCard.vue";
import PlayerTable from "../components/playerList/PlayerTable.vue";
import SearchFilter from "../components/playerList/SearchFilter.vue";
import { getAllPlayers } from "../firebase/players.firebase";

export default {
  components: { PlayerTable, PlayerProfileCard, SearchFilter },

  data() {
    return {
      players: null,
    };
  },
  async mounted() {
    this.players = await getAllPlayers();
    console.log("player", this.players);
  },
};
</script>

<style></style>
