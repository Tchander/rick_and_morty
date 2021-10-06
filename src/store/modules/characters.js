import { getAllCharacters } from "@/api/charactersApi";

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
    getCharacterById({ commit }, id) {
      commit("updateCurrentCharacter", id);
    },
  },
  mutations: {
    updateCharacters(state, payload) {
      state.characters = { ...payload };
    },
    updateCurrentCharacter(state, id) {
      console.log(id)
      state.currentCharacter = state.characters.results.find(
        (x) => x.id === Number(id)
      );
    },
  },
  getters: {
    characters: (state) => state.characters,
    character: (state) => state.currentCharacter
  },
  state: {
    characters: null,
    currentCharacter: null,
  },
};
