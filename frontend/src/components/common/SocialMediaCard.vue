<template>
  <v-list color="rgba(0, 0, 0, 0)" dense>
    <v-list-item v-for="(item, i) in items" :key="i" ripple>
      <v-list-item-icon>
        <v-icon v-text="item.icon" :color="item.color"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
        <v-list-item-subtitle v-text="item.url"></v-list-item-subtitle>
      </v-list-item-content>

      <!-- Only necessory when edit is available. -->
      <v-list-item-action v-if="editable">
        <div>
          <v-btn class="mx-2" :href="item.url" icon color="#ACACAC">
            <v-icon dark> mdi-open-in-new </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            @click="handleDelete(item.id)"
            icon
            color="primary"
          >
            <v-icon dark> mdi-delete </v-icon>
          </v-btn>
        </div>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    items: Array,
    editable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleDelete(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style></style>
