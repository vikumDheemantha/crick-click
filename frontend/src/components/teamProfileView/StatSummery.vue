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
          <v-list-item-title>Total Wins</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ winCount }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Total Loose</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ looseCount }}
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Total Drow</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action class="primary--text font-weight-medium">
          {{ drowCount }}
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    matchCount: Number,
    winCount: Number,
    looseCount: Number,
    drowCount: Number,
  },
};
</script>

<style></style>
