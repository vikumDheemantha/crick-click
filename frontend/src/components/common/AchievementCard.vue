<template>
  <v-card class="achievemnt-crd">
    <v-card-title class="text-center primary--text"> {{ title }}</v-card-title>
    <v-card-subtitle> {{ date }}</v-card-subtitle>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions class="float-end">
      <v-btn class="" icon small color="seconday">
        <v-icon dark> mdi-pencil </v-icon>
      </v-btn>
      <v-btn class="" icon small color="primary">
        <v-icon dark> mdi-delete </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { required: false },
    editable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.achievemnt-crd {
  width: 100%;
  height: 100%;

  background: #ffcf00;
  background: -moz-linear-gradient(
    45deg,
    #ffcf00 0%,
    #ffcf00 51%,
    #ffff 51%,
    #ffff 100%
  );
  background: -webkit-gradient(
    left top,
    right bottom,
    color-stop(0%, #ffcf00),
    color-stop(51%, #ffcf00),
    color-stop(51%, #ffff),
    color-stop(100%, #ffff)
  );
  background: -webkit-linear-gradient(
    45deg,
    #ffcf00 0%,
    #ffcf00 51%,
    #ffff 51%,
    #ffff 100%
  );
  background: -o-linear-gradient(
    45deg,
    #ffcf00 0%,
    #ffcf00 51%,
    #ffff 51%,
    #ffff 100%
  );
  background: -ms-linear-gradient(
    45deg,
    #ffcf00 0%,
    #ffcf00 51%,
    #ffff 51%,
    #ffff 100%
  );
  background: linear-gradient(
    45deg,
    #ffcf00 0%,
    #ffcf00 30%,
    #ffff 30%,
    #ffff 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ba2737', endColorstr='#efc5ca', GradientType=1);
}
</style>
