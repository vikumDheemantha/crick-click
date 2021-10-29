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
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="Date of Birth"
          placeholder="DOB"
          outlined
          v-model="dob"
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
      <v-col cols="12"
        ><small>These details are for easy up the filtering process </small>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="City"
          placeholder="Colombo"
          outlined
          v-model="city"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="District"
          v-model="district"
          placeholder="Colombo"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="Region"
          placeholder="Region or province"
          outlined
          v-model="region"
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
import { createPlayerWithBasicInfo } from "../../firebase/players.firebase";
import { upladProfileImage } from "../../firebase/imageUpload.firebase";
import { Timestamp } from "firebase/firestore";

export default {
  components: { ImageUpload },
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      dob: "",
      address: "",
      city: "",
      district: "",
      region: "",
      description: "",
      profileImage: null,
    };
  },
  methods: {
    async handleNext() {
      // First save image before handling others
      let imageUrl = null;
      if (this.profileImage !== null && this.profileImage !== undefined) {
        let iamgeExt = this.profileImage.name.split(".").pop();
        let imgSaveRes = await upladProfileImage(
          1,
          this.profileImage,
          iamgeExt
        );
        if (imgSaveRes.success) {
          imageUrl = imgSaveRes.url;
        }
      }
      let playerObj = {
        displayName: this.name,
        email: this.email,
        mobile: this.mobile,
        dob: Timestamp.fromDate(new Date(this.dob)),
        address: this.address,
        city: this.city,
        district: this.district,
        region: this.region,
        image_url: imageUrl,
        introduction: this.description,
        skills: ["batting", "Bowling"],
        createdAt: Timestamp.fromDate(new Date()),
      };
      let res = await createPlayerWithBasicInfo(playerObj);
      this.$emit("next", res);
    },
  },
};
</script>

<style></style>
