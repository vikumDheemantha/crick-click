<template>
  <div class="text-left">
    <div class="text-caption grey--text text--darken-2">{{ title }}</div>
    <div
      class="
        text-body-1
        primary--text
        grey
        ml-1
        mr-1
        pl-3
        py-1
        lighten-3
        elevation-0
        font-weight-medium
        value-custom-style
      "
    >
      <div class="value-custom-text">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      required: false,
      default: "",
    },
  },
};
</script>

<style>
.value-custom-style {
  transform: skew(-20deg);
}

.value-custom-text {
  transform: skew(20deg);
}
</style>
