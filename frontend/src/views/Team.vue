<template>
    <!-- root -->
    <div class ="pa-5">
      <v-form>
        <v-text-field outlined label="Team Name" v-model="team_name"/>
        <v-select outlined :items="team_type" label="Team Type"/> 
        <v-textarea outlined label="About The Team" v-model="about"/>
        <v-btn outlined>submit</v-btn>
      </v-form>
      
      <v-list three-line>
      <template v-for="(item, index) in players">
        <!-- <v-subheader
          :key="item.header"
          v-text="Players"
        ></v-subheader> -->

        <!-- <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader> -->

        <v-divider
          v-if="index != 0"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>

    </div>
</template>

<script>
export default {
  name: "Team",

  components: {},
  data() {
    return {
      team_name: '',
      about: '',
      team_type: ['Club', 'School', 'Temprary'],
      players: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        // { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        // { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        // { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        // { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }
  },
  methods: {
    submit() {

    }
  }
};
</script>

<style scoped>

</style>