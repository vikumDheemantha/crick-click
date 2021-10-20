<template>
  <v-container>
    <h3 class="primary--text my-5">All Teams</h3>
    <search-filter />
    <v-row>
      <v-col cols="12" md="8">
        <team-table />
      </v-col>
      <v-col cols="12" md="4">
        <team-profile-card />
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchFilter from "../components/teamList/SearchFilter.vue";
import TeamProfileCard from "../components/teamList/TeamProfileCard.vue";
import TeamTable from "../components/teamList/TeamTable.vue";
export default {
  components: {
    SearchFilter,
    TeamTable,
    TeamProfileCard,
  },
};
</script>

<style></style>
