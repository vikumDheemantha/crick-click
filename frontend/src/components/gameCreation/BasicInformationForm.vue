<template>
  <v-form class="mt-2">
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4">
        <v-text-field
          label="Game Name"
          placeholder="Name..."
          outlined
          v-model="name"
        ></v-text-field>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="startDate"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="startDate"
              label="Start Date"
              prepend-inner-icon="mdi-calendar"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="startDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(startDate)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-select
          :items="types"
          v-model="type"
          label="Game Type"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-btn color="primary" @click="handleNext">Next</v-btn>
  </v-form>
</template>

<script>
import { createGameWithBasicInfo } from "../../firebase/games.firebase";
import { upladProfileImage } from "../../firebase/imageUpload.firebase";
import { Timestamp } from "firebase/firestore";

export default {
  components: {},
  props: {
    orgId: String,
  },
  data() {
    return {
      name: "",
      type: "",
      startDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      types: ["Tour", "Tournament"],
    };
  },
  methods: {
    async handleNext() {
      // First save image before handling others
      let imageUrl = null;
      if (this.profileImage !== null && this.profileImage !== undefined) {
        let iamgeExt = this.profileImage.name.split(".").pop();
        let imgSaveRes = await upladProfileImage(
          1,
          this.profileImage,
          iamgeExt
        );
        if (imgSaveRes.success) {
          imageUrl = imgSaveRes.url;
        }
      }
      let gameObj = {
        name: this.name,
        type: this.type == "Tour" ? 0 : 1,
        status: 0,
        organizationId: this.orgId,
        startedDate: Timestamp.fromDate(new Date(this.startDate)),
        createdAt: Timestamp.fromDate(new Date()),
      };
      let res = await createGameWithBasicInfo(gameObj);
      this.$emit("next", res);
    },
  },
};
</script>

<style></style>
