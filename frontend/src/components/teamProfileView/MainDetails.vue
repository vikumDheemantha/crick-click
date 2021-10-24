<template>
  <v-card class="mt-15">
    <v-btn
      color="primary"
      class="float-end mt-3 mr-3"
      fab
      small
      dark
      @click="enableEdit"
      v-if="!editing"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-card-text class="text-body-1 summery-text clear-both pt-0">
      <p class="text-justify" v-if="!editing">
        {{ description }}
      </p>
      <v-textarea
        outlined
        name="description"
        label="Team Description"
        v-model="editDescription"
        v-else
      ></v-textarea>
    </v-card-text>

    <contact-card class="mx-2" :editing="editing" />
    <div class="float-end mr-3 mt-1" v-if="editing">
      <v-btn class="ml-2" color="success" small @click="handleSave">Save</v-btn>
      <v-btn class="ml-2" small @click="handleCancel">Cancel</v-btn>
    </div>
    <div class="strike clear-both">
      <span class="text-h6 primary--text font-weight-medium"> Players </span>
      <v-card-text>
        <v-btn color="primary" class="float-end mt-3 mr-3" dark>
          <v-icon>mdi-plus</v-icon>
          Player
        </v-btn>
        <div class="clear-both"></div>
        <team-players-list :players="players" />
      </v-card-text>
      <div class="strike">
        <span class="text-h6 primary--text font-weight-medium">
          Achievements
        </span>
      </div>
      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
            xl="4"
            xs="12"
            v-for="(achievement, i) in achievements"
            :key="i"
          >
            <achievement-card
              :title="achievement.title"
              :description="achievement.desciptoin"
              :date="achievement.date"
              :editable="editable"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
import AchievementCard from "../common/AchievementCard.vue";
import SingleIineInfo from "../common/SingleIineInfo.vue";
import ContactCard from "../teamProfileView/ContactCard.vue";
import TeamPlayersList from "./TeamPlayersList.vue";
export default {
  components: { AchievementCard, TeamPlayersList, ContactCard },
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editing: false,
      description:
        "Do do esse qui ullamco cillum quis voluptate velit tempor pariatur. Tempor veniam aute adipisicing laborum aliqua sint est incididunt magna culpa. Nostrud nulla ex reprehenderit ut sunt. Aute quis ad officia sunt laboris in tempor ipsum duis tempor mollit. Occaecat sint ad esse non eu Lorem consectetur fugiat laborum commodo sit enim.",
      editDescription:
        "Do do esse qui ullamco cillum quis voluptate velit tempor pariatur. Tempor veniam aute adipisicing laborum aliqua sint est incididunt magna culpa. Nostrud nulla ex reprehenderit ut sunt. Aute quis ad officia sunt laboris in tempor ipsum duis tempor mollit. Occaecat sint ad esse non eu Lorem consectetur fugiat laborum commodo sit enim.",
      players: [
        {
          img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Brunch this weekend?",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Oui oui",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Birthday gift",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Recipe to try",
          skills: ["Batting", "Bowling"],
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          name: "Brunch this weekend?",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          name: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          name: "Oui oui",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Birthday gift",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Recipe to try",
          skills: ["Batting", "Bowling"],
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          name: "Birthday gift",
          skills: ["Batting", "Bowling"],
        },

        {
          img: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          name: "Recipe to try",
          skills: ["Batting", "Bowling"],
        },
      ],
      achievements: [
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
        {
          title: "All Island Cricekt Championship",
          desciptoin:
            "in All island cricket championship I have played as a team capton and had a chance to win the championship",
          date: "2021-12-12",
        },
      ],
    };
  },
  methods: {
    enableEdit() {
      this.editing = true;
    },
    async handleSave() {
      // TODO: Save edited content to firebase
      this.editing = false;
    },
    handleCancel() {
      this.editing = false;
    },
  },
};
</script>

<style>
.summery-text p:first-child::first-letter {
  /* padding: 0 0.3rem; */
  /* margin: 0 0.3rem 0 0; */
  font-size: 4rem;
  line-height: 1;
}

.strike {
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.strike > span {
  position: relative;
  display: inline-block;
}

.strike > span:before,
.strike > span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 9999px;
  height: 3px;
  background: #ffcf00;
}

.strike > span:before {
  right: 100%;
  margin-right: 15px;
}

.strike > span:after {
  left: 100%;
  margin-left: 15px;
}

.clear-both {
  clear: both;
}
</style>
