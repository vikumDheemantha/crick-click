import Vue from "vue";
import Vuex from "vuex";
import { getAllSocialMedias } from "../firebase/socialmedia.firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    socialMediaTypes: [],
  }),
  mutations: {
    SET_SOCIAL_MEDIA_TYPES(state, payload) {
      state.socialMediaTypes = payload;
    },
  },
  actions: {
    fetchSocialMediaList: async ({ commit, state }) => {
      if (state.socialMediaTypes.length === 0) {
        let socialMedias = await getAllSocialMedias();
        commit("SET_SOCIAL_MEDIA_TYPES", socialMedias);
      } else {
        console.log("Social Medias are already loaded, no need to load again");
      }
    },
  },
  getters: {
    getSocialMediaList: (state) => {
      return state.socialMediaTypes;
    },
  },
  modules: {},
});
