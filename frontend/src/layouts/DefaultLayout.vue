<template>
  <div>
    <app-bar />
    <slot />
  </div>
</template>

<script>
import AppBar from "../components/layout/AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>

<style>
</style>