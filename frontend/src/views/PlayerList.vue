<template>
  <v-container>
    <h3 class="primary--text my-5">All Players</h3>
    <!-- <v-row> filter content for later </v-row> -->
    <v-row>
      <v-col cols="12" md="8">
        <player-table />
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
export default {
  components: { PlayerTable, PlayerProfileCard },
};
</script>

<style></style>
