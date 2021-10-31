<template>
  <v-card>
    <v-card-title class="px-2 py-2">
      <div class="header-cls">
        <span
          class="float-left text-subtitle-1 grey--text font-weight-medium"
          >{{ name }}</span
        >
        <span class="text-subtitle-1 float-right grey--text"> {{ type }} </span>
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
            :src="team1.url ? team1.url : detfaultImage"
          ></v-img>
          <div class="text-subtitle-2 grey--text">{{ team1.name }}</div>
        </v-col>
        <v-col align-self="center" class="text-center">
          <div class="text-h5 font-weight-light grey--text">vs</div></v-col
        >
        <v-col cols="5" class="text-center">
          <v-img
            :aspect-ratio="1 / 1"
            :width="imageWidth"
            class="mx-auto"
            :src="team2.url ? team2.url : detfaultImage"
          ></v-img>
          <div class="text-subtitle-2 grey--text">{{ team2.name }}</div>
        </v-col>
      </v-row>
      <div class="text-caption text-center grey--text pt-0">
        started At {{ startedAt }}
      </div>
    </v-card-text>
    <v-card-text class="grey--text font-weight-medium px-2 py-2">
      Venue: {{ location }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    type: String,
    startedAt: String,
    location: String,
    team1: Object,
    team2: Object,
  },
  data() {
    return {
      imageWidth: "60%",
      detfaultImage: require("../../assets/img/common/profile-placeholder.jpeg"),
    };
  },
};
</script>

<style>
.header-cls {
  width: 100%;
}
</style>
