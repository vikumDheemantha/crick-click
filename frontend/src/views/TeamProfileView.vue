<template>
  <v-container class="pt-10">
    <v-row class="pt-10">
      <v-col cols="12" sm="12" md="4">
        <profile-pic-display
          :name="team.name"
          :url="team.logoUrl"
          :skills="[team.type]"
        />
        <v-row class="mt-sm-5 mt-md-0">
          <v-col cols="12" xs="12" sm="6" md="12">
            <social-media-card :items="team.socialMedia" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="12">
            <stat-summery
              :matchCount="team.matchCount"
              :winCount="team.winCount"
              :looseCount="team.looseCount"
              :drowCount="team.drowCount"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <main-details
          :editable="editable"
          :description="team.description"
          :email="team.email"
          :mobile="team.mobile"
          :address="team.address"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfilePicDisplay from "../components/common/ProfilePicDisplay.vue";
import SocialMediaCard from "../components/common/SocialMediaCard.vue";
import MainDetails from "../components/teamProfileView/MainDetails.vue";
import StatSummery from "../components/teamProfileView/StatSummery.vue";
import { getTeamById } from "../firebase/teams.firebase";

export default {
  components: { ProfilePicDisplay, SocialMediaCard, StatSummery, MainDetails },

  data() {
    return {
      team: null,
    };
  },
  async mounted() {
    this.team = await getTeamById("team1");
    console.log("teams", this.team);
  },
};
</script>
