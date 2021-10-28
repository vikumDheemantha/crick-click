<template>
  <div>
    <v-form class="mt-1">
      <v-row>
        <v-col cols="12" xs="12" sm="4" md="3">
          <v-select
            v-model="socialMediaSelect"
            :items="socialMediaTypes"
            item-text="name"
            item-value="id"
            label="Social Media Type"
            return-object
            single-line
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="7">
          <v-text-field
            v-model="url"
            label="url"
            placeholder="URL to your social media profile"
            outlined
            dense
          />
        </v-col>
        <v-col cols="12" xs="12" sm="2" md="2">
          <div class="">
            <v-btn @click="handleClear">Clear</v-btn>
            <v-btn color="primary" class="ml-2" @click="handleAdd">Add</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
    <h3 class="mb-2 primary--text text-center">Social Media Links</h3>
    <v-alert
      text
      outlined
      type="secondary"
      class="mb-2 text-center font-weight-bold"
      v-if="socialMedias.length == 0"
    >
      No social media added here to display !
    </v-alert>
    <social-media-card
      :editable="true"
      :items="socialMedias"
      @delete="handleDelete"
    />
    <v-btn color="primary" @click="handleNext">Finish</v-btn>
  </div>
</template>

<script>
import SocialMediaCard from "../common/SocialMediaCard.vue";
import { addSocialMedia } from "../../firebase/organisations.firebase";
import { mapGetters } from "vuex";

export default {
  components: { SocialMediaCard },
  props: {
    id: String,
  },
  data() {
    return {
      socialMedias: [],
      typeId: null,
      url: "",
      socialMediaSelect: null,
    };
  },
  methods: {
    handleAdd() {
      let socialMedia = {
        id: this.socialMedias.length,
        type: this.socialMediaSelect.id,
        icon: this.socialMediaSelect.icon,
        text: this.socialMediaSelect.name,
        url: this.url,
        color: this.socialMediaSelect.color,
      };
      this.socialMedias.push(socialMedia);
      this.handleClear();
    },
    handleClear() {
      this.socialMediaSelect = null;
      this.url = "";
    },
    handleDelete(id) {
      this.socialMedias = this.socialMedias.filter((item) => item.id !== id);
    },
    async handleNext() {
      let socialMediaList = this.socialMedias.map((item) => ({
        typeId: item.type,
        url: item.url,
      }));

      let res = await addSocialMedia(this.id, socialMediaList);
      this.$emit("next", res);
    },
  },
  computed: {
    ...mapGetters({ socialMediaTypes: "getSocialMediaList" }),
  },
};
</script>

<style>
.clear-both {
  clear: both;
}
</style>
