<template>
  <div>
    <app-bar />
    <slot />
    <footer-bar />
  </div>
</template>

<script>
import AppBar from "../components/layout/AppBar.vue";
import FooterBar from '../components/layout/FooterBar.vue';
export default {
  components: {
    AppBar,
    FooterBar,
  },
};
</script>

<style>
</style>