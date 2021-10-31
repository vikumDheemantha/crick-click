<template>
  <div>
    <v-form class="mt-1">
      <v-row>
        <v-col cols="12" xs="12" sm="10">
          <v-autocomplete
            v-model="selectedTeam"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            hide-no-data
            item-text="email"
            item-value="email"
            label="Teams"
            placeholder="Start typing to Search"
            prepend-icon="mdi-database-search"
            return-object
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" xs="12" sm="2" md="2">
          <div class="">
            <v-btn @click="handleClear">Clear</v-btn>
            <v-btn color="primary" class="ml-2" @click="handleAdd">Add</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
    <h3 class="mb-2 primary--text text-center">Teams</h3>
    <v-alert
      text
      outlined
      type="secondary"
      class="mb-2 text-center font-weight-bold"
      v-if="teams.length === 0"
    >
      No Teams are added here to display !
    </v-alert>
    <v-list color="rgba(0, 0, 0, 0)" dense v-else>
      <v-list-item v-for="(team, i) in teams" :key="i" ripple>
        <!-- <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon> -->
        <v-list-item-content>
          <v-list-item-title v-text="team.name"></v-list-item-title>
          <v-list-item-subtitle v-text="team.email"></v-list-item-subtitle>
        </v-list-item-content>

        <!-- Only necessory when edit is available. -->
        <v-list-item-action>
          <div>
            <v-btn
              class="mx-2"
              @click="handleDelete(team.email)"
              icon
              color="primary"
            >
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-btn color="primary" @click="handleNext">Finish</v-btn>
  </div>
</template>

<script>
import {
  searchTeamsByEmail,
  getAllTeamsMini,
} from "../../firebase/teams.firebase";
import { addTeams } from "../../firebase/games.firebase";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      selectedTeam: null,
      isLoading: false,
      search: null,
      items: [],
      teams: [],
      samplePlayers: [],
    };
  },
  async mounted() {
    this.isLoading = true;
    this.items = await getAllTeamsMini();
    this.isLoading = false;
  },
  methods: {
    handleAdd() {
      this.teams.push(this.selectedTeam);
      this.handleClear();
    },
    handleClear() {
      this.search = "";
      this.selectedTeam = null;
    },
    handleDelete(email) {
      this.teams = this.teams.filter((team) => team.email !== email);
    },
    async handleNext() {
      // let teamPlayers = this.players.map((player) => player.ref);
      let res = await addTeams(this.id, this.teams);
      this.$emit("next", { ...res, teams: this.teams });
    },
  },
  computed: {},
};
</script>

<style></style>
