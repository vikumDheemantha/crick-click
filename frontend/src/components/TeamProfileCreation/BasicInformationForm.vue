<template>
  <v-form class="mt-2">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field
          label="Display Name"
          placeholder="Display Name"
          outlined
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-text-field
          label="Display Email"
          placeholder="Display Email"
          outlined
          v-model="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-text-field
          label="Mobile No."
          placeholder="+94XXXXXXXXX"
          outlined
          v-model="mobile"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8">
        <v-text-field
          label="Address"
          placeholder="address for display in your profile"
          outlined
          v-model="address"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="Type"
          placeholder="Team Type"
          outlined
          v-model="type"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="8">
        <v-textarea
          outlined
          label="Profile Description"
          placeholder="Simple description about the player"
          rows="6"
          v-model="description"
        />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="4">
        <image-upload v-model="profileImage" />
      </v-col>
    </v-row>
    <v-btn color="primary" @click="handleNext">Next</v-btn>
  </v-form>
</template>

<script>
import ImageUpload from "../common/ImageUpload.vue";
import { createTeamWithBasicInfo } from "../../firebase/teams.firebase";
import { Timestamp } from "firebase/firestore";

export default {
  components: { ImageUpload },
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      address: "",
      type: "",
      description: "",
      profileImage: null,
    };
  },
  methods: {
    async handleNext() {
      let playerObj = {
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        address: this.address,
        type: this.type,
        description: this.description,
        isActive: true,
        createdAt: Timestamp.fromDate(new Date()),
      };
      let res = await createTeamWithBasicInfo(playerObj);
      this.$emit("next", res);
    },
  },
};
</script>

<style></style>
