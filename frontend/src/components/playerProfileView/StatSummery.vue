<template>
  <v-card>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>No. OF Matches</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ matchCount }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Total Score</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ totalScore }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Total Wickets</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ totalWickets }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Personal Best</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ personalBest }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Man of the matches</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ manOfMatches }}
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    matchCount: Number,
    totalScore: Number,
    manOfMatches: Number,
    personalBest: Number,
    totalWickets: Number,
  },
};
</script>

<style></style>
