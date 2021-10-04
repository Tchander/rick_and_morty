import { getAllCharacters } from "../../api/charactersApi";

export default {
  namespaced: true,
  actions: {
    async getAllCharacters({ commit }, apiUrl) {
      try {
        const { data } = await getAllCharacters(apiUrl);
        commit("updateCharacters", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateCharacters(state, payload) {
      state.characters = payload;
    },
  },
  state: {
    characters: {},
  },
};
