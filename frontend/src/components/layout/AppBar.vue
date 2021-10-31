<template>
  <v-app-bar app class="nav-header" elevation="2">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink logo-margin"
        contain
        :src="require('@/assets/logo.png')"
        transition="scale-transition"
        width="150"
      />

      <!-- <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      /> -->
    </div>

    <v-spacer></v-spacer>
    <!-- Players details -->
    <v-menu close-on-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          depressed
          class="primary--text nav-btn-custom"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="nav-btn-text">mdi-cricket</v-icon>
          <span class="mr-2 ml-2 nav-btn-text">Player</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/player/create">
          <v-list-item-title>Create Player Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/player/my-profile">
          <v-list-item-title>My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/players">
          <v-list-item-title>View Players</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Team related content -->
    <v-menu close-on-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="secondary"
          depressed
          class="primary--text ml-4 nav-btn-custom"
        >
          <v-icon class="nav-btn-text">mdi-account-group</v-icon>
          <span class="mr-2 ml-2 nav-btn-text">Team Manager</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/team/create">
          <v-list-item-title>Create Team</v-list-item-title>
        </v-list-item>
        <v-list-item to="/teams/profile/1">
          <v-list-item-title>My Teams</v-list-item-title>
        </v-list-item>
        <v-list-item to="/teams">
          <v-list-item-title>View All Teams</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Organization menu -->

    <v-menu close-on-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          depressed
          v-bind="attrs"
          v-on="on"
          class="primary--text ml-4 nav-btn-custom"
        >
          <v-icon class="nav-btn-text">mdi-domain</v-icon>
          <span class="mr-2 ml-2 nav-btn-text">Organizer</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/organization/create">
          <v-list-item-title>Create Organization</v-list-item-title>
        </v-list-item>
        <v-list-item to="/organization/my-organization">
          <v-list-item-title>My Organization</v-list-item-title>
        </v-list-item>
        <v-list-item to="/organization/create-game">
          <v-list-item-title>Create Game</v-list-item-title>
        </v-list-item>
        <v-list-item to="/organizations">
          <v-list-item-title>View Organizations</v-list-item-title>
        </v-list-item>
        <v-list-item to="/matches/updateScore">
          <v-list-item-title>Update Score</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu close-on-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          depressed
          v-on="on"
          v-bind="attrs"
          class="primary--text ml-4 mr-2 nav-btn-custom"
        >
          <v-icon class="nav-btn-text">mdi-account</v-icon>
          <span class="mr-2 ml-2 nav-btn-text">User</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/login">
          <v-list-item-title>Sign In</v-list-item-title>
        </v-list-item>
        <v-list-item to="/register">
          <v-list-item-title>Sign Up</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      links: [],
    };
  },
};
</script>

<style>
@media screen and (min-width: 600px) {
  .nav-header {
    width: 100%;
    height: 100%;

    background: #fcfcfc;
    background: -moz-linear-gradient(
      -45deg,
      #fcfcfc 0%,
      #fcfcfc 75%,
      #1d1e2c 75%,
      #1d1e2c 100%
    );
    background: -webkit-gradient(
      left top,
      right bottom,
      color-stop(0%, #fcfcfc),
      color-stop(75%, #fcfcfc),
      color-stop(75%, #1d1e2c),
      color-stop(100%, #1d1e2c)
    );
    background: -webkit-linear-gradient(
      -45deg,
      #fcfcfc 0%,
      #fcfcfc 75%,
      #1d1e2c 75%,
      #1d1e2c 100%
    );
    background: -o-linear-gradient(
      -45deg,
      #fcfcfc 0%,
      #fcfcfc 75%,
      #1d1e2c 75%,
      #1d1e2c 100%
    );
    background: -ms-linear-gradient(
      -45deg,
      #fcfcfc 0%,
      #fcfcfc 51%,
      #1d1e2c 51%,
      #1d1e2c 100%
    );
    background: linear-gradient(
      -45deg,
      #fcfcfc 0%,
      #fcfcfc 75%,
      #1d1e2c 75%,
      #1d1e2c 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ba2737', endColorstr='#efc5ca', GradientType=1);
  }
}

.nav-header {
  background-color: #1d1e2c !important;
}

.nav-btn-custom {
  transform: skew(-45deg);
}

.nav-btn-text {
  transform: skew(45deg);
}

.logo-margin {
  margin-left: 10px;
}
</style>
