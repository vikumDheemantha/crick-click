<template>
  <v-container>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Basic Information
      </v-stepper-step>

      <v-stepper-content step="1">
        <!-- Basic Information -->
        <basic-information-form @next="handleNext1" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="1">
        Team Players
      </v-stepper-step>

      <v-stepper-content step="2">
        <!-- Basic Information -->
        <team-playersform :id="teamId" @next="handleNext2" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="2">
        Achievement Details
        <small>This can be added later if you wish</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <achievement-details-form :id="teamId" @next="handleNext3" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 4" step="3">
        Social Media Links
        <small>These are optional and you can skip or add later</small>
      </v-stepper-step>

      <v-stepper-content step="4">
        <social-media-form :id="teamId" @next="handleNext4" />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import AchievementDetailsForm from "../components/TeamProfileCreation/AchievementDetailsForm.vue";
import BasicInformationForm from "../components/TeamProfileCreation/BasicInformationForm.vue";
import SocialMediaForm from "../components/TeamProfileCreation/SocialMediaForm.vue";
import { mapActions } from "vuex";
import TeamPlayersform from "../components/TeamProfileCreation/TeamPlayersform.vue";

export default {
  components: {
    BasicInformationForm,
    AchievementDetailsForm,
    SocialMediaForm,
    TeamPlayersform,
  },
  data: () => ({
    step: 1,
    activePicker: null,
    date: null,
    menu: false,
    teamId: null,
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
        this.teamId = res.id;
        this.step = 2;
      }
    },
    handleNext2(res) {
      if (res.success) {
        this.step = 3;
      }
    },

    handleNext3(res) {
      if (res.success) {
        this.step = 4;
      }
    },

    handleNext4(res) {
      if (res.success) {
        this.$router.push("/teams/profile/1");
      }
    },
  },
};
</script>
