<template>
  <v-card class="mt-1">
    <v-card-text>
      <v-row>
        <v-col cols="2">
          <v-autocomplete
            label="Location"
            prepend-inner-icon="mdi-map-marker"
            outlined
            dense
            :items="locations"
            v-model="location"
            clearable
            hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="3">
          <v-menu
            ref="menu"
            v-model="dateMenue"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dateRangeText"
                label="Date Range"
                prepend-inner-icon="mdi-calendar"
                readonly
                dense
                outlined
                v-bind="attrs"
                v-on="on"
                hide-details
              ></v-text-field>
            </template>
            <v-date-picker v-model="dates" range no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="2">
          <v-select
            :items="types"
            label="Type"
            clearable
            dense
            outlined
            hide-details
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-select
            :items="statuses"
            label="Status"
            clearable
            dense
            outlined
            hide-details
          ></v-select>
        </v-col>
        <v-col cols="2">
          <v-autocomplete
            label="Team"
            outlined
            dense
            :items="teams"
            v-model="team"
            clearable
            hide-details
          ></v-autocomplete>
        </v-col>
        <v-col cols="1">
          <v-btn color="primary" block>Search</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dateMenue: false,
      dates: ["2019-09-10", "2019-09-20"],
      location: "",
      team: "",
      locations: [
        "Kandy",
        "Peradeniya",
        "Colombo",
        "Jaffna",
        "Anuradhapura",
        "Welimada",
      ],
      teams: [
        "Kandy Players",
        "Hexa Players",
        "Octa Players",
        "Alpha pack",
        "Anuradhapura",
        "Welimada",
      ],
      types: ["Onday", "Test", "20-20"],
      statuses: ["Ongoing", "Past", "Not Started"],
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },
};
</script>

<style></style>
