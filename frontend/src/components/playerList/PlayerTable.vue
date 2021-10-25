<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="players"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    players: {
      type: Array,
      //default: [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "displayName",
        },
        { text: "Skills", value: "skills" },
        { text: "City", value: "city" },
        { text: "Region", value: "region" },
        { text: "Total matches", value: "matchCount" },
        { text: "Personal Best", value: "personalBest" },
      ],
    };
  },
};
</script>

<style></style>
