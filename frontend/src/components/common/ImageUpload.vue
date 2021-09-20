<template>
  <div class="image-upload-container">
    <v-avatar :size="imageSize" class="profile-img-avetar">
      <img id="Preview_image_create" :src="url" class="" />
    </v-avatar>
    <v-file-input
      v-model="image"
      :prepend-icon="btnIcon"
      class="pt-0 mt-0 input-btn"
      clearable
      hide-input
      filled
      dark
      danger
    ></v-file-input>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
    imageSize: {
      type: [Number, String],
      default: "200",
    },
    btnIcon: {
      type: String,
      default: "mdi-camera",
    },
  },
  data() {
    return {
      image: null,
    };
  },
  methods: {
    previewImage() {
      this.url = URL.createObjectURL(this.image);
    },
  },
  computed: {
    url() {
      if (this.image !== null && this.image !== undefined) {
        return URL.createObjectURL(this.image);
      } else {
        return require("../../assets/img/common/profile-placeholder.jpeg");
      }
    },
  },
  watch: {
    image(val) {
      if (this.value !== val) {
        this.$emit("input", val);
        console.log("image wather triggered");
      }
    },
    value(val) {
      if (this.image !== val) {
        this.image = val;
        console.log("value wather triggered");
      }
    },
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

.input-btn {
  position: absolute;
  /* top: 100%; */
  /* left: 100%; */
  bottom: 85px;
  left: 65px;
  transform: translate(50%, 50%);
  z-index: 1000;
}

.input-btn button {
  background-color: black;
  border-radius: 50%;
  padding: 3px;
}

.image-upload-container {
  position: relative;
  text-align: center;
}
</style>
