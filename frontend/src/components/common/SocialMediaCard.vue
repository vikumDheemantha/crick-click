<template>
  <v-list color="rgba(0, 0, 0, 0)">
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
  data() {
    return {
      items: [
        {
          id: 1,
          type: 1,
          icon: "mdi-facebook",
          text: "facebook",
          url: "https://www.facebook.com/thilakarathne.dilshan.3",
          color: "#4267B2",
        },
        {
          id: 2,
          type: 2,
          icon: "mdi-twitter",
          text: "Twitter",
          url: "https://twitter.com/23tmdilshan?lang=en",
          color: "blue",
        },
        {
          id: 3,
          type: 3,
          icon: "mdi-instagram",
          text: "Instagram",
          url: "https://www.instagram.com/tmdilshan_23/",
          color: "#E1306C",
        },
        {
          id: 4,
          type: 4,
          icon: "mdi-youtube",
          text: "YouTube",
          url: "https://www.youtube.com/watch?v=DYdRBBxY9YM",
          color: "#FF0000",
        },
        {
          id: 5,
          type: 5,
          icon: "mdi-linkedin",
          text: "LinkedIn",
          url: "https://www.youtube.com/watch?v=DYdRBBxY9YM",
          color: "#2867B2",
        },
        {
          id: 6,
          type: 6,
          icon: "mdi-web",
          text: "Web",
          url: "https://www.espncricinfo.com/player/tillakaratne-dilshan-48472",
          color: "success",
        },
      ],
    };
  },
};
</script>

<style>
</style>