import { getEpisodeByApi } from "@/api/episodesApi";

export default {
  namespaced: true,
  actions: {
    async getEpisodeByApi({ commit }, id) {
      try {
        const { data } = await getEpisodeByApi(id);
        commit("updateCurrentEpisode", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateCurrentEpisode(state, payload) {
      state.currentEpisode = { ...payload };
    },
  },
  getters: {
    currentEpisode: (state) => state.currentEpisode,
  },
  state: {
    currentEpisode: null,
  },
};
