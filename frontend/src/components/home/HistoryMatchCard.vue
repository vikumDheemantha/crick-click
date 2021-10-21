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
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
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
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <div class="text-subtitle-2 grey--text">{{ team2.name }}</div>
        </v-col>
      </v-row>
      <div class="text-caption text-center grey--text pt-0">
        {{ winner.name }} WON BY {{ wonBy }}
      </div>
      <v-row>
        <v-col cols="5" class="text-center">
          <div class="text-h5 grey--text font-weight-medium mark-txt">
            {{ team1.score }}-{{ team1.wickets }}
          </div>
          <div class="text-subtitle-2 grey--text font-weight-medium">
            {{ team1.balls / 6 }}.{{ team1.balls % 6 }}({{ numberOfOvers }})
          </div>
        </v-col>
        <v-spacer />
        <v-col cols="5" class="text-center">
          <div class="text-h5 grey--text font-weight-medium mark-txt">
            {{ team2.score }}-{{ team2.wickets }}
          </div>
          <div class="text-subtitle-2 grey--text font-weight-medium">
            {{ ~~(team2.balls / 6) }}.{{ team2.balls % 6 }}({{ numberOfOvers }})
          </div>
        </v-col>
      </v-row>
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
    winner: Object,
    wonBy: String,
    numberOfOvers: Number,
  },
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
