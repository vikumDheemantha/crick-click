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

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      color="secondary"
      depressed
      class="primary--text nav-btn-custom"
    >
      <v-icon class="nav-btn-text">mdi-cricket</v-icon>
      <span class="mr-2 ml-2 nav-btn-text">Player</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      color="secondary"
      depressed
      class="primary--text ml-4 nav-btn-custom"
    >
      <v-icon class="nav-btn-text">mdi-account-group</v-icon>
      <span class="mr-2 ml-2 nav-btn-text">Team Manager</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      color="secondary"
      depressed
      class="primary--text ml-4 nav-btn-custom"
    >
      <v-icon class="nav-btn-text">mdi-domain</v-icon>
      <span class="mr-2 ml-2 nav-btn-text">Organizer</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      color="secondary"
      depressed
      class="primary--text ml-4 mr-2 nav-btn-custom"
    >
      <v-icon class="nav-btn-text">mdi-account</v-icon>
      <span class="mr-2 ml-2 nav-btn-text">User</span>
    </v-btn>
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

.nav-btn-custom {
  transform: skew(-45deg);
}

.nav-btn-text {
  transform: skew(45deg);
}

.logo-margin {
  margin-left: 100px;
}
</style>
