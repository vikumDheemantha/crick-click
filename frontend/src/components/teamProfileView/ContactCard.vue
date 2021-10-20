<template>
  <v-card class="mt-5" color="#FCFCFC" outlined>
    <v-card-text>
      <v-row>
        <v-col cols="6" sm="12" md="4">
          <single-iine-info title="Email" :value="email" />
        </v-col>
        <v-col cols="6" sm="12" md="3">
          <single-iine-info title="Mobile No." :value="mobile" />
        </v-col>
        <v-col cols="6" sm="12" md="5">
          <single-iine-info title="Address" :value="address" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SingleIineInfo from "../common/SingleIineInfo.vue";

export default {
  components: { SingleIineInfo },
  data() {
    return {
      email: "info@abc.xyz",
      mobile: "+94b720042233",
      address: "No: 12/3, 2nd Lane, Colombo 6",
    };
  },
};
</script>

<style></style>
