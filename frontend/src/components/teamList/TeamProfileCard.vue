<template>
  <v-card class="">
    <v-card-text>
      <profile-pic-display
        :name="name"
        :skills="skills"
        :image-size="150"
        class="mt-1"
      />
      <social-media-inline :items="socialMediaItems" />
      <v-btn
        block
        to="/player/my-profile"
        color="secondary"
        class="primary--text"
        >View Full Profile</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
import ProfilePicDisplay from "../common/ProfilePicDisplay.vue";
import SocialMediaInline from "../common/SocialMediaInline.vue";
export default {
  components: { ProfilePicDisplay, SocialMediaInline },
  data() {
    return {
      name: "Hexa Team",
      skills: ["Club"],
      socialMediaItems: [
        { id: 1, icon: "mdi-facebook", color: "#4267B2" },
        { id: 2, icon: "mdi-twitter", color: "lightblue" },
        { id: 3, icon: "mdi-instagram", color: "#E1306C" },
        { id: 4, icon: "mdi-linkedin", color: "#2867B2" },
      ],
    };
  },
};
</script>

<style></style>
