<template>
  <v-card class="mt-5" color="#FCFCFC" outlined>
    <!-- default content -->
    <v-card-text v-if="!editing">
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
    <!-- Content for editing time -->
    <v-card-text v-else>
      <v-row>
        <v-col cols="6" sm="12" md="4">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Email"
            :value="email"
          />
        </v-col>
        <v-col cols="6" sm="12" md="3">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Mobile No."
            :value="mobile"
          />
        </v-col>
        <v-col cols="6" sm="12" md="5">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Address"
            :value="address"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SingleIineInfo from "../common/SingleIineInfo.vue";

export default {
  components: { SingleIineInfo },
  props: {
    editing: {
      type: Boolean,
      default: false,
    },
    email: String,
    mobile: String,
    address: String,
  },
  data() {
    return {
      // email: "info@abc.xyz",
      // mobile: "+94b720042233",
      // address: "No: 12/3, 2nd Lane, Colombo 6",
    };
  },
};
</script>

<style></style>
