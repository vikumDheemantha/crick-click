<template>
  <v-container class="pt-10">
    <v-row class="pt-10">
      <v-col cols="4">
        <profile-pic-display name="T.M. Dilshan" :skills="skills" />
        <social-media-card />
        <stat-summery />
      </v-col>
      <v-col cols="8">
        <main-details />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfilePicDisplay from "../components/common/ProfilePicDisplay.vue";
import SocialMediaCard from "../components/common/SocialMediaCard.vue";
import MainDetails from "../components/playerProfileView/MainDetails.vue";
import StatSummery from "../components/playerProfileView/StatSummery.vue";
export default {
  components: { ProfilePicDisplay, SocialMediaCard, StatSummery, MainDetails },

  data() {
    return {
      skills: ["Batsman", "Bowler"],
    };
  },
};
</script>
