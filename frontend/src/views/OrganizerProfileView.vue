<template>
  <v-container class="pt-10">
    <v-row class="pt-10">
      <v-col cols="4">
        <profile-pic-display
          :name="name"
          :url="organisation.imgUrl"
          :skills="[organisation.type]"
        />
        <social-media-card :items="organisation.socialMedia" />
      </v-col>
      <v-col cols="8">
        <details-card
          :description="organisation.description"
          :editable="editable"
        />
        <contact-card
          :email="organisation.email"
          :phone="organisation.phone"
          :address="organisation.address"
          :editable="editable"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfilePicDisplay from "../components/common/ProfilePicDisplay.vue";
import SocialMediaCard from "../components/common/SocialMediaCard.vue";
import ContactCard from "../components/organizationProfileView/ContactCard.vue";
import DetailsCard from "../components/organizationProfileView/DetailsCard.vue";
import { getOrganisationById } from "../firebase/organisations.firebase.js";

export default {
  components: { ProfilePicDisplay, SocialMediaCard, DetailsCard, ContactCard },

  data() {
    return {
      organisation: null,
      editable: true,
      name: "ABC Organization",
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
  async mounted() {
    this.organisation = await getOrganisationById("org1");
    //console.log("organisation", this.organisation);
  },
};
</script>
