<template>
  <div class="text-left">
    <div class="text-caption grey--text text--darken-2">{{ title }}</div>
    <div
      class="
        text-body-1
        primary--text
        secondary
        pl-2
        py-1
        lighten-0
        elevation-3
        font-weight-medium
      "
    >
      {{ value }}
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
</style>