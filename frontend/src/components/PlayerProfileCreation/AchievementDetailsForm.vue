<template>
  <div>
    <v-form class="mt-1">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="8">
          <v-text-field
            v-model="title"
            label="Title"
            placeholder="Achievement Title"
            outlined
          />
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-menu
            ref="menu"
            v-model="dateMenue"
            :close-on-content-click="false"
            :return-value.sync="dateMenu"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Achievement Date"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(dateMenu)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="description"
            label="Description"
            placeholder="Details about achievement"
            outlined
          />
        </v-col>
      </v-row>

      <div class="float-end mb-1">
        <v-btn @click="handleClear">Clear</v-btn>
        <v-btn color="primary" class="ml-2" @click="handleAdd">Add</v-btn>
      </div>
      <div class="clear-both"></div>
    </v-form>
    <h3 class="mb-2 primary--text text-center">Achievements</h3>
    <v-alert
      text
      outlined
      type="secondary"
      class="mb-2 text-center font-weight-bold"
      v-if="achievements.length == 0"
    >
      No achievements added here to display !
    </v-alert>
    <v-row class="mb-1" v-else>
      <v-col
        cols="12"
        xs="12"
        md="4"
        xl="3"
        v-for="(achievement, i) in achievements"
        :key="i"
      >
        <achievement-card
          :title="achievement.title"
          :description="achievement.description"
          :date="achievement.date"
        />
      </v-col>
    </v-row>
    <v-btn color="primary" @click="handleNext">Next</v-btn>
  </div>
</template>

<script>
import AchievementCard from "../common/AchievementCard.vue";
export default {
  components: { AchievementCard },
  data() {
    return {
      achievements: [],
      dateMenue: false,
      date: "",
      title: "",
      description: "",
    };
  },
  methods: {
    handleAdd() {
      let achievement = {
        title: this.title,
        description: this.description,
        date: this.date,
      };
      this.achievements.push(achievement);
      this.handleClear();
    },
    handleClear() {
      this.title = "";
      this.description = "";
      this.date = "";
    },
    handleNext() {
      this.$emit("next", {});
    },
  },
};
</script>

<style>
.clear-both {
  clear: both;
}
</style>
