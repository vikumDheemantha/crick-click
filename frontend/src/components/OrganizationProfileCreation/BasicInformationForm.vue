<template>
  <v-form class="mt-2">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field
          label="Organization Name"
          placeholder="Display name of the organization"
          outlined
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-text-field
          label="email"
          placeholder="organization email"
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
      <v-col cols="12" xs="12" sm="4" md="4" lg="4">
        <v-text-field
          label="Type"
          placeholder="eg: Club"
          outlined
          v-model="type"
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
          label="Organization Description"
          placeholder="Simple description about the Organization"
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
import { createOrganizationWithBasicInfo } from "../../firebase/organisations.firebase";
import { upladProfileImage } from "../../firebase/imageUpload.firebase";
import { Timestamp } from "firebase/firestore";

export default {
  components: { ImageUpload },
  data() {
    return {
      name: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      district: "",
      region: "",
      description: "",
      profileImage: null,
      type: "",
    };
  },
  methods: {
    async handleNext() {
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
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        address: this.address,
        city: this.city,
        district: this.district,
        region: this.region,
        description: this.description,
        type: this.type,
        imgUrl: imageUrl,
        createdAt: Timestamp.fromDate(new Date()),
      };
      let res = await createOrganizationWithBasicInfo(playerObj);
      this.$emit("next", res);
    },
  },
};
</script>

<style></style>
