<template>
  <div>
    <v-form class="mt-1">
      <v-row>
        <v-col cols="12" xs="12" sm="10">
          <v-autocomplete
            v-model="selectedPlayer"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            color="white"
            hide-no-data
            item-text="email"
            item-value="email"
            label="Players"
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
    <h3 class="mb-2 primary--text text-center">Team Players</h3>
    <v-alert
      text
      outlined
      type="secondary"
      class="mb-2 text-center font-weight-bold"
      v-if="players.length === 0"
    >
      No Players are added here to display !
    </v-alert>
    <v-list color="rgba(0, 0, 0, 0)" dense v-else>
      <v-list-item v-for="(player, i) in players" :key="i" ripple>
        <!-- <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon> -->
        <v-list-item-content>
          <v-list-item-title v-text="player.name"></v-list-item-title>
          <v-list-item-subtitle v-text="player.email"></v-list-item-subtitle>
        </v-list-item-content>

        <!-- Only necessory when edit is available. -->
        <v-list-item-action>
          <div>
            <v-btn
              class="mx-2"
              @click="handleDelete(item.id)"
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
import { searchPlayersByName } from "../../firebase/players.firebase";
import { addTeamPlayers } from "../../firebase/teams.firebase";
export default {
  props: {
    id: String,
  },
  data() {
    return {
      selectedPlayer: null,
      isLoading: false,
      search: null,
      items: [],
      players: [],
      samplePlayers: [],
    };
  },
  methods: {
    handleAdd() {
      this.players.push(this.selectedPlayer);
      this.handleClear();
    },
    handleClear() {
      this.search = "";
      this.items = [];
      this.selectedPlayer = null;
    },
    handleDelete(id) {
      this.players = this.players.filter((player) => player.id !== id);
    },
    async handleNext() {
      // let teamPlayers = this.players.map((player) => player.ref);
      let res = await addTeamPlayers(this.id, this.players);
      this.$emit("next", res);
    },
  },
  computed: {},
  watch: {
    async search(val) {
      // // Items have already been loaded
      if (this.items.length > 0) return;
      // // Items have already been requested
      if (this.isLoading) return;
      // console.log("search text ----", val);
      this.isLoading = true;
      this.items = await searchPlayersByName(val);
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
