<template>
  <div class="text-center py-5">
    <v-btn
      v-for="item in items"
      :key="item.icon"
      class="mx-4 text--lighten-1 text-center"
      :style="{ color: item.color }"
      icon
    >
      <v-icon size="30px">
        {{ item.icon }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style></style>
