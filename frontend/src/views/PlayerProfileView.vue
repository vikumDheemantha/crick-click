<template>
  <v-container class="pt-10">
    <v-row class="pt-10">
      <v-col cols="12" sm="12" md="4">
        <profile-pic-display
          :name="player.displayName"
          :skills="player.skills"
        />
        <v-row class="mt-sm-5 mt-md-0">
          <v-col cols="12" xs="12" sm="6" md="12">
            <social-media-card :items="player.socialMedia" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="12">
            <stat-summery
              :matchCount="player.matchCount"
              :totalScore="player.totalScore"
              :manOfMatches="player.manOfMatches"
              :personalBest="player.personalBest"
              :totalWickets="player.totalWickets"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <main-details
          :introduction="player.introduction"
          :email="player.email"
          :mobile="player.mobile"
          :dob="player.dob"
          :address="player.address"
          :city="player.city"
          :district="player.district"
          :region="player.region"
          :achievements="player.achievements"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfilePicDisplay from "../components/common/ProfilePicDisplay.vue";
import SocialMediaCard from "../components/common/SocialMediaCard.vue";
import MainDetails from "../components/playerProfileView/MainDetails.vue";
import StatSummery from "../components/playerProfileView/StatSummery.vue";
import { getPlayerById } from "../firebase/players.firebase";

export default {
  components: { ProfilePicDisplay, SocialMediaCard, StatSummery, MainDetails },

  data() {
    return {
      player: null,
    };
  },
  async mounted() {
    this.player = await getPlayerById("1");
  },
};
</script>
