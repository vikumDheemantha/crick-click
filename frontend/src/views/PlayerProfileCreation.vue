<template>
  <v-container>
    <v-stepper v-model="step" vertical>
      <v-stepper-step :complete="step > 1" step="1">
        Basic Information
      </v-stepper-step>

      <v-stepper-content step="1">
        <!-- Basic Information -->
        <basic-information-form @next="step = 2" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 2" step="2">
        Achievement Details
        <small>This can be added later if you wish</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <achievement-details-form @next="step = 3" />
      </v-stepper-content>

      <v-stepper-step :complete="step > 3" step="3">
        Social Media Links
        <small>These are optional and you can skip or add later</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <social-media-form />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import AchievementDetailsForm from '../components/PlayerProfileCreation/AchievementDetailsForm.vue';
import BasicInformationForm from "../components/PlayerProfileCreation/BasicInformationForm.vue";
import SocialMediaForm from '../components/PlayerProfileCreation/SocialMediaForm.vue';
export default {
  components: { BasicInformationForm, AchievementDetailsForm, SocialMediaForm },
  data: () => ({
    step: 1,
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
