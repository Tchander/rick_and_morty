import { getAllCharacters, getCharacterById } from "@/api/charactersApi";

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
    async getCharacterById({ commit }, id) {
      try {
        const { data } = await getCharacterById(id);
        commit("updateCurrentCharacter", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateCharacters(state, payload) {
      state.characters = { ...payload };
    },
    updateCurrentCharacter(state, payload) {
      state.currentCharacter = { ...payload };
    },
  },
  getters: {
    characters: (state) => state.characters,
    character: (state) => state.currentCharacter,
  },
  state: {
    characters: null,
    currentCharacter: null,
  },
};
