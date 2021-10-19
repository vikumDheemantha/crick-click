<template>
  <v-list color="rgba(0, 0, 0, 0)" dense>
    <v-list-item v-for="(item, i) in items" :key="i" :href="item.url" ripple>
      <v-list-item-icon>
        <v-icon v-text="item.icon" :color="item.color"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        <v-list-item-subtitle v-text="item.url"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    items: Array,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
