<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            label="Game Name"
            placeholder="Name..."
            outlined
            v-model="name"
          ></v-text-field>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="startDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                label="Start Date"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="startDate" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(startDate)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6" lg="4">
          <v-select
            :items="types"
            v-model="type"
            label="Game Type"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-text-field
            label="Location"
            placeholder="Match Location"
            outlined
            v-model="Location"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="4">
          <v-checkbox
            v-model="fixedOver"
            label="Does Match Have Fixed Overs"
          ></v-checkbox>
        </v-col>
        <v-col v-if="fixedOver" cols="12" sm="12" md="6" lg="4">
          <v-text-field
            label="Overs"
            placeholder="Number of Overs"
            outlined
            type="number"
            v-model="numberOfOvers"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-autocomplete
            v-model="selectedTeam1"
            :items="teams"
            outlined
            hide-no-data
            item-text="email"
            item-value="email"
            label="Team 01"
            placeholder="Start typing to Search"
            prepend-inner-icon="mdi-account-group"
            return-object
          ></v-autocomplete>
          <v-list color="rgba(0, 0, 0, 0)" dense>
            <v-list-item v-for="(player, i) in team1Players" :key="i" ripple>
              <!-- <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon> -->
              <v-list-item-content>
                <v-list-item-title v-text="player.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="player.email"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <!-- Only necessory when edit is available. -->
              <v-list-item-action>
                <div>
                  <v-checkbox v-model="player.selected"></v-checkbox>
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <!-- Team Capton -->
          <v-autocomplete
            v-model="captainTeam1"
            :items="team1SelectedPlayers"
            outlined
            hide-no-data
            item-text="email"
            item-value="email"
            label="Team Captain"
            placeholder="Start typing to Search"
            prepend-inner-icon="mdi-account-group"
            return-object
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="6">
          <v-autocomplete
            v-model="selectedTeam2"
            :items="teams"
            outlined
            hide-no-data
            item-text="email"
            item-value="email"
            label="Team 02"
            placeholder="Start typing to Search"
            prepend-inner-icon="mdi-account-group"
            return-object
          ></v-autocomplete>
          <v-list color="rgba(0, 0, 0, 0)" dense>
            <v-list-item v-for="(player, i) in team2Players" :key="i" ripple>
              <!-- <v-list-item-icon>
          <v-icon v-text="item.icon" :color="item.color"></v-icon>
        </v-list-item-icon> -->
              <v-list-item-content>
                <v-list-item-title v-text="player.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="player.email"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <!-- Only necessory when edit is available. -->
              <v-list-item-action>
                <div>
                  <v-checkbox v-model="player.selected"></v-checkbox>
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <!-- Team Capton -->
          <v-autocomplete
            v-model="captainTeam2"
            :items="team2SelectedPlayers"
            outlined
            hide-no-data
            item-text="email"
            item-value="email"
            label="Team Captain"
            placeholder="Start typing to Search"
            prepend-inner-icon="mdi-account-group"
            return-object
          ></v-autocomplete>
        </v-col>
      </v-row>
      <div class="float-end mb-1">
        <v-btn @click="handleClear">Clear</v-btn>
        <v-btn color="primary" class="ml-2" @click="handleAdd">Add</v-btn>
      </div>
      <div class="clear-both"></div>
    </v-form>
    <h3 class="mb-2 primary--text text-center">Matches</h3>
    <v-alert
      text
      outlined
      type="secondary"
      class="mb-2 text-center font-weight-bold"
      v-if="matches.length == 0"
    >
      No achievements added here to display !
    </v-alert>
    <v-row class="mb-1" v-else>
      <v-col
        cols="12"
        xs="12"
        md="4"
        xl="3"
        v-for="(match, i) in matches"
        :key="i"
      >
        <live-match-card
          :name="match.name"
          :type="match.type"
          :startedAt="match.date"
          :team1="match.team1"
          :team2="match.team2"
        />
      </v-col>
    </v-row>
    <v-btn color="primary" @click="handleNext">Finish</v-btn>
  </div>
</template>

<script>
import LiveMatchCard from "../home/LiveMatchCard.vue";
import { getAllPlayersInTeam } from "../../firebase/teams.firebase";
import { doc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/main";
import { createSetOfMatches } from "../../firebase/matchs.firebase";

export default {
  components: { LiveMatchCard },
  props: {
    id: String,
    teams: Array,
  },
  methods: {
    async handleNext() {
      let result = await createSetOfMatches(this.matches);
      this.$emit("next", result);
    },
    handleAdd() {
      let matchObj = {
        name: this.name,
        status: 0,
        type: this.type,
        fixedOver: this.fixedOver,
        gameId: this.id,
        game: doc(db, "games", this.id),
        startedTime: Timestamp.fromDate(new Date(this.startDate)),
        team1: {
          reference: this.selectedTeam1.ref,
          captain: this.captainTeam1,
          players: this.team1Players,
          score: 0,
          url: "",
          wickets: 0,
          nulberOfballs: 0,
        },
        team2: {
          reference: this.selectedTeam2.ref,
          captain: this.captainTeam2,
          players: this.team2Players,
          score: 0,
          wickets: 0,
          url: "",
          nulberOfballs: 0,
        },
      };

      this.matches.push(matchObj);
    },
    handleClear() {
      this.name = "";
      this.location = "";
      this.type = "";
      this.selectedTeam1 = null;
      this.selectedTeam2 = null;
      this.fixedOver = true;
      this.numberOfOvers = 0;
      this.startDate = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10);
      this.team1Players = [];
      this.team2Players = [];
      this.captainTeam1 = null;
      this.captainTeam2 = null;
    },
  },
  data() {
    return {
      name: "",
      location: "",
      type: "",
      numberOfOvers: 0,
      fixedOver: true,
      description: "",
      startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      types: ["Test Match", "One Day", "T20"],
      selectedTeam1: null,
      selectedTeam2: null,
      team1Players: [],
      team2Players: [],
      matches: [],
      captainTeam1: null,
      captainTeam2: null,
    };
  },
  computed: {
    team1SelectedPlayers() {
      return this.team1Players.filter((player) => player.selected);
    },
    team2SelectedPlayers() {
      return this.team2Players.filter((player) => player.selected);
    },
  },
  watch: {
    async selectedTeam1(val) {
      let players = await getAllPlayersInTeam(val.id);
      this.team1Players = players.map((player) => ({
        ...player,
        selected: false,
      }));
    },
    async selectedTeam2(val) {
      let players = await getAllPlayersInTeam(val.id);
      this.team2Players = players.map((player) => ({
        ...player,
        selected: false,
      }));
    },
  },
};
</script>

<style></style>
