<template>
  <section>
    <v-parallax :src="image" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1
          class="white--text mb-2 display-1 text-xs-center"
          style="font-weight: 900; text-shadow: 3px 2px #000000"
        >
          Sri Lanka's first free cricket scoring platform
        </h1>
        <div
          class="white--text subheading mb-3 text-xs-center"
          style="font-weight: 900; text-shadow: 2px 2px #000000"
        >
          You play the match we care about scoring and publisity.
        </div>
        <v-btn class="blue lighten-2 mt-5" dark large href="/">
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/home/header.jpeg"),
    };
  },
};
</script>

<style>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
