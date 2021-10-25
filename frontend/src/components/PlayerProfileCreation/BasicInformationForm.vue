<template>
  <v-form class="mt-2">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field
          label="Display Name"
          placeholder="Display Name"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-text-field
          label="Display Email"
          placeholder="Display Email"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-text-field
          label="Mobile No."
          placeholder="+94XXXXXXXXX"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="Date of Birth"
          placeholder="DOB"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="8" md="8">
        <v-text-field
          label="Address"
          placeholder="address for display in your profile"
          outlined
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
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="District"
          placeholder="Colombo"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="4" md="4">
        <v-text-field
          label="Region"
          placeholder="Region or province"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="8">
        <v-textarea
          outlined
          label="Profile Description"
          placeholder="Simple description about the player"
          rows="6"
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
    handleNext() {
      this.$emit("next", {});
    },
  },
};
</script>

<style></style>
