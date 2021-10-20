<template>
  <v-list class="text-left" one-line>
    <template v-for="player in players">
      <div :key="player.id">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="player.img"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="player.name"></v-list-item-title>
            <v-list-item-subtitle>
              <v-chip
                v-for="(skill, i) in player.skills"
                :key="i"
                color="secondary"
                class="primary--text mx-1 font-weight-medium"
                small
              >
                {{ skill }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <div>
              <v-btn class="mx-2" to="/player/my-profile" icon color="#ACACAC">
                <v-icon dark> mdi-open-in-new </v-icon>
              </v-btn>
              <v-btn class="mx-2" icon color="primary">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </div>
          </v-list-item-action>
        </v-list-item>
        <v-divider />
      </div>
    </template>
  </v-list>
</template>

<script>
export default {
  props: {
    players: Array,
    caption: [String, Object],
  },
};
</script>

<style></style>
