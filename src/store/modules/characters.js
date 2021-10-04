import { getAllCharacters } from "../../api/charactersApi";

export default {
  namespaced: true,
  actions: {
    async getAllCharacters({ commit }) {
      try {
        const { data } = await getAllCharacters();
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
