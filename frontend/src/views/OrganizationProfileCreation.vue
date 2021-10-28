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

      <v-stepper-step :complete="step > 2" step="2">
        Social Media Links
        <small>These are optional and you can skip or add later</small>
      </v-stepper-step>

      <v-stepper-content step="2">
        <social-media-form :id="playerId" @next="handleNext2" />
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import BasicInformationForm from "../components/OrganizationProfileCreation/BasicInformationForm.vue";
import SocialMediaForm from "../components/OrganizationProfileCreation/SocialMediaForm.vue";
import { mapActions } from "vuex";

export default {
  components: { BasicInformationForm, SocialMediaForm },
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
        this.$router.push("/organization/my-organization");
      }
    },
  },
};
</script>
