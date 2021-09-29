<template>
  <v-footer :padless="padless">
    <v-card flat tile width="100%" class="acent white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      padless: true,
      icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
      variant: "default",
    };
  },
};
</script>

<style>
</style>