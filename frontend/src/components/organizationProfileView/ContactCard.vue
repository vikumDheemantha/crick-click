<template>
  <v-card class="mt-5" color="#FCFCFC">
    <v-btn
      color="primary"
      class="float-end mt-3 mr-3"
      fab
      small
      dark
      @click="enableEdit"
      v-if="editable && !editing"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <!-- Content for display -->
    <v-card-text v-if="!editing">
      <v-row>
        <v-col cols="6" sm="12" md="4">
          <single-iine-info title="Email" :value="email" />
        </v-col>
        <v-col cols="6" sm="12" md="3">
          <single-iine-info title="Phone No." :value="phone" />
        </v-col>
        <v-col cols="6" sm="12" md="5">
          <single-iine-info title="Address" :value="address" />
        </v-col>
      </v-row>
    </v-card-text>
    <!-- Content for edit -->
    <v-card-text v-else>
      <v-row>
        <v-col cols="6" sm="12" md="4">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Email"
            v-model="emailTxt"
          />
        </v-col>
        <v-col cols="6" sm="12" md="3">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Mobile No."
            v-model="mobileTxt"
          />
        </v-col>
        <v-col cols="6" sm="12" md="5">
          <v-text-field
            hide-details="auto"
            outlined
            dense
            label="Address"
            v-model="addressTxt"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="float-end mr-3 mt-1" v-if="editing">
      <v-btn class="ml-2" color="success" small @click="handleSave">Save</v-btn>
      <v-btn class="ml-2" small @click="handleCancel">Cancel</v-btn>
    </v-card-actions>
    <div class="clear-both"></div>
  </v-card>
</template>

<script>
import SingleIineInfo from "../common/SingleIineInfo.vue";

export default {
  components: { SingleIineInfo },
  props: {
    email: String,
    phone: String,
    address: String,
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      emailTxt: "info@abc.xyz",
      mobileTxt: "+94b720042233",
      addressTxt: "No: 12/3, 2nd Lane, Colombo 6",
    };
  },
  methods: {
    enableEdit() {
      this.editing = true;
    },
    async handleSave() {
      // TODO: Save edited content to firebase
      this.editing = false;
    },
    handleCancel() {
      this.editing = false;
    },
  },
  watch: {
    email(val) {
      this.emailTxt = val;
    },
    phone(val) {
      this.mobileTxt = val;
    },
    address(val) {
      this.addressTxt = val;
    },
  },
};
</script>

<style>
.clear-both {
  clear: both;
}
</style>
