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
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Skills", value: "skills" },
        { text: "City", value: "city" },
        { text: "Region", value: "region" },
        { text: "Total matches", value: "matchesPlayed" },
        { text: "Personal Best", value: "personalBest" },
      ],
      players: [
        {
          name: "Frozen Yogurt",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Ice cream sandwich",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Eclair",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Cupcake",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Gingerbread",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Jelly bean",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Lollipop",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Honeycomb",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "Donut",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
        {
          name: "KitKat",
          skills: ["Batting, Bowling"],
          city: "Kandy",
          region: "Kandy",
          matchesPlayed: 15,
          personalBest: 150,
        },
      ],
    };
  },
};
</script>

<style></style>
