<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="First Name" outlined> </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="Last Name" outlined> </v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="City" outlined> </v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="District" outlined> </v-text-field> </v-col
      ></v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-textarea
            label="Description"
            auto-grow
            outlined
            rows="10"
            row-height="15"
          ></v-textarea> </v-col
      ></v-row>

      <v-row>
        <div>
          <div class="mb-6">
            <code>{{ activePicker || "Date of Birth:" }}</code>
          </div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu></div
      ></v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    activePicker: null,
    date: null,
    menu: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>
