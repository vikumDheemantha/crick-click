<template>
  <div class="image-container">
    <v-avatar :size="imageSize" class="profile-img-avetar">
      <img id="Preview_image_create" :src="url" class="" />
    </v-avatar>
    <h1 class="primary--text">{{ name }}</h1>
    <v-chip
      v-for="(skill, i) in skills"
      :key="i"
      color="secondary"
      class="primary--text mx-1 font-weight-medium"
      small
    >
      {{ skill }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    imageSize: {
      type: [Number, String],
      default: "200",
    },
    url: {
      default: require("../../assets/img/common/profile-placeholder.jpeg"),
    },
    name: {
      type: String,
    },
    skills: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.profile-img-avetar {
  position: relative !important;
  border: 1px solid #bbbebf;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  text-align: center;
}

.image-container {
  position: relative;
  text-align: center;
}
</style>