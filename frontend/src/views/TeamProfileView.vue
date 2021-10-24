<template>
  <v-container class="pt-10">
    <v-row class="pt-10">
      <v-col cols="12" sm="12" md="4">
        <profile-pic-display :name="name" />
        <v-row class="mt-sm-5 mt-md-0">
          <v-col cols="12" xs="12" sm="6" md="12">
            <social-media-card :items="socialMediaItems" />
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="12">
            <stat-summery />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="8">
        <main-details :editable="editable" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfilePicDisplay from "../components/common/ProfilePicDisplay.vue";
import SocialMediaCard from "../components/common/SocialMediaCard.vue";
import MainDetails from "../components/teamProfileView/MainDetails.vue";
import StatSummery from "../components/teamProfileView/StatSummery.vue";
export default {
  components: { ProfilePicDisplay, SocialMediaCard, StatSummery, MainDetails },

  data() {
    return {
      name: "Team Hexa",
      editable: true,
      socialMediaItems: [
        {
          id: 1,
          type: 1,
          icon: "mdi-facebook",
          text: "facebook",
          url: "https://www.facebook.com/thilakarathne.dilshan.3",
          color: "#4267B2",
        },
        {
          id: 2,
          type: 2,
          icon: "mdi-twitter",
          text: "Twitter",
          url: "https://twitter.com/23tmdilshan?lang=en",
          color: "blue",
        },
        {
          id: 3,
          type: 3,
          icon: "mdi-instagram",
          text: "Instagram",
          url: "https://www.instagram.com/tmdilshan_23/",
          color: "#E1306C",
        },
        {
          id: 4,
          type: 4,
          icon: "mdi-youtube",
          text: "YouTube",
          url: "https://www.youtube.com/watch?v=DYdRBBxY9YM",
          color: "#FF0000",
        },
        {
          id: 5,
          type: 5,
          icon: "mdi-linkedin",
          text: "LinkedIn",
          url: "https://www.youtube.com/watch?v=DYdRBBxY9YM",
          color: "#2867B2",
        },
        {
          id: 6,
          type: 6,
          icon: "mdi-web",
          text: "Web",
          url: "https://www.espncricinfo.com/player/tillakaratne-dilshan-48472",
          color: "success",
        },
      ],
    };
  },
};
</script>
