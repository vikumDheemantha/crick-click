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
        <details-card :description="organisation.description" />
        <contact-card
          :email="organisation.email"
          :phone="organisation.phone"
          :address="organisation.address"
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
    };
  },
  async mounted() {
    this.organisation = await getOrganisationById("org1");
    //console.log("organisation", this.organisation);
  },
};
</script>
