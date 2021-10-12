<template>
  <v-footer :padless="padless">
    <v-card flat tile width="100%" class="grey--text text-center custom-footer">
      <v-card-text>
        <span class="grey--text text-center footer-text  text--lighten-1"
          >2021 © Crick Click | Powered by HexaCoders</span
        >
        <span class="float-right">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 grey--text text--lighten-1"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </span>
        <div class="float-none" style="clear: both"></div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      padless: true,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"],
      variant: "default",
    };
  },
};
</script>

<style>
.custom-footer {
  width: 100%;
  height: 100%;

  background: #fcfcfc;
  background: -moz-linear-gradient(
    135deg,
    #fcfcfc 0%,
    #fcfcfc 25%,
    #1d1e2c 25%,
    #1d1e2c 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, #fcfcfc),
    color-stop(25%, #fcfcfc),
    color-stop(25%, #1d1e2c),
    color-stop(100%, #1d1e2c)
  );
  background: -webkit-linear-gradient(
    135deg,
    #fcfcfc 0%,
    #fcfcfc 25%,
    #1d1e2c 25%,
    #1d1e2c 100%
  );
  background: -o-linear-gradient(
    135deg,
    #fcfcfc 0%,
    #fcfcfc 25%,
    #1d1e2c 25%,
    #1d1e2c 100%
  );
  background: -ms-linear-gradient(
    135deg,
    #fcfcfc 0%,
    #fcfcfc 25%,
    #1d1e2c 25%,
    #1d1e2c 100%
  );
  background: linear-gradient(
    135deg,
    #fcfcfc 0%,
    #fcfcfc 25%,
    #1d1e2c 25%,
    #1d1e2c 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ba2737', endColorstr='#efc5ca', GradientType=1);
}

.footer-text {
  line-height: 2.5em;
}
</style>