<template>
  <v-container>
    <h2 class="my-2 primary--text">Create Game</h2>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Basic Information
      </v-stepper-step>

      <v-stepper-content step="1">
        <!-- Basic Information -->
        <basic-information-form @next="handleNext1" :orgId="'org1'" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        Team Select
      </v-stepper-step>

      <v-stepper-content step="2">
        <!-- Basic Information -->
        <team-select :id="gameId" @next="handleNext2" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">
        Create Matches
        <small>There should be atleast one match</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <!-- Basic Information -->
        <match-creation :teams="teams" :id="gameId" @next="handleNext3" />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import AchievementDetailsForm from "../components/TeamProfileCreation/AchievementDetailsForm.vue";
import MatchCreation from "../components/gameCreation/MatchCreation.vue";
import TeamSelect from "../components/gameCreation/TeamSelect.vue";
import BasicInformationForm from "../components/gameCreation/BasicInformationForm.vue";
import SocialMediaForm from "../components/TeamProfileCreation/SocialMediaForm.vue";
import { mapActions } from "vuex";
import TeamPlayersform from "../components/TeamProfileCreation/TeamPlayersform.vue";

export default {
  components: {
    BasicInformationForm,
    // AchievementDetailsForm,
    // SocialMediaForm,
    // TeamPlayersform,
    MatchCreation,
    TeamSelect,
  },
  data: () => ({
    step: 1,
    activePicker: null,
    date: null,
    menu: false,
    gameId: null,
    teams: [],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  mounted() {
    this.fetchSocialMediaList();
  },
  methods: {
    ...mapActions(["fetchSocialMediaList"]),
    save(date) {
      this.$refs.menu.save(date);
    },
    handleNext1(res) {
      if (res.success) {
        this.gameId = res.id;
        this.step = 2;
      }
    },
    handleNext2(res) {
      if (res.success) {
        this.teams = res.teams;
        this.step = 3;
      }
    },

    handleNext3(res) {
      if (res.success) {
        this.$router.push("/teams/profile/1");
      }
    },
  },
};
</script>
