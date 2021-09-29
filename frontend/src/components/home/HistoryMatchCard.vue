<template>
  <v-card>
    <v-card-title class="px-2 py-2">
      <div class="header-cls">
        <span class="float-left text-subtitle-1 grey--text font-weight-medium"
          >Match Name</span
        >
        <span class="text-subtitle-1 float-right grey--text"> Oneday </span>
      </div>
    </v-card-title>
    <!-- <v-card-subtitle
      >Organized by: <a> Best Team Organizers</a></v-card-subtitle
    > -->
    <v-card-text class="pb-1">
      <v-row>
        <v-col cols="5" class="text-center">
          <v-img
            :aspect-ratio="1 / 1"
            :width="imageWidth"
            class="mx-auto"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <div class="text-subtitle-2 grey--text">Team -1</div>
        </v-col>
        <v-col align-self="center" class="text-center">
          <div class="text-h5 font-weight-light grey--text">vs</div></v-col
        >
        <v-col cols="5" class="text-center">
          <v-img
            :aspect-ratio="1 / 1"
            :width="imageWidth"
            class="mx-auto"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <div class="text-subtitle-2 grey--text">Team -1</div>
        </v-col>
      </v-row>
      <div class="text-caption text-center grey--text pt-0">
        T1 WON BY 7 RUNS
      </div>
      <v-row>
        <v-col cols="5" class="text-center">
          <div class="text-h5 grey--text font-weight-medium mark-txt">248-5</div>
          <div class="text-subtitle-2 grey--text font-weight-medium">
            50.0(50)
          </div>
        </v-col>
        <v-spacer />
        <v-col cols="5" class="text-center">
          <div class="text-h5 grey--text font-weight-medium mark-txt">241-10</div>
          <div class="text-subtitle-2 grey--text font-weight-medium">
            45.5(50)
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      imageWidth: "60%",
    };
  },
};
</script>

<style>
.header-cls {
  width: 100%;
}

.mark-txt {
  line-height: 1.5rem !important;
}
</style>
