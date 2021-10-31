<template>
  <v-container>
    <h2 class="my-2 primary--text">Create Player Prifle</h2>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Basic Information
      </v-stepper-step>

      <v-stepper-content step="1">
        <!-- Basic Information -->
        <basic-information-form @next="handleNext1" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        Achievement Details
        <small>This can be added later if you wish</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <achievement-details-form :id="playerId" @next="handleNext2" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">
        Social Media Links
        <small>These are optional and you can skip or add later</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <social-media-form :id="playerId" @next="handleNext3" />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import AchievementDetailsForm from "../components/PlayerProfileCreation/AchievementDetailsForm.vue";
import BasicInformationForm from "../components/PlayerProfileCreation/BasicInformationForm.vue";
import SocialMediaForm from "../components/PlayerProfileCreation/SocialMediaForm.vue";
import { mapActions } from "vuex";

export default {
  components: { BasicInformationForm, AchievementDetailsForm, SocialMediaForm },
  data: () => ({
    step: 1,
    activePicker: null,
    date: null,
    menu: false,
    playerId: null,
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
        this.playerId = res.id;
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
        this.$router.push("/player/my-profile");
      }
    },
  },
};
</script>
