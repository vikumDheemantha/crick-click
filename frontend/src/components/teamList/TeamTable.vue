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
        { text: "Type", value: "type" },
        { text: "City", value: "city" },
        { text: "Region", value: "region" },
        { text: "Email", value: "email" },
        { text: "Phone No.", value: "phone" },
      ],
      players: [
        {
          name: "Frozen Yogurt",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Ice cream sandwich",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Eclair",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Cupcake",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Gingerbread",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Jelly bean",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Lollipop",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Honeycomb",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "Donut",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
        {
          name: "KitKat",
          type: "club",
          city: "Kandy",
          region: "Kandy",
          email: "info@abc.com",
          phone: "94523342203",
        },
      ],
    };
  },
};
</script>

<style></style>
