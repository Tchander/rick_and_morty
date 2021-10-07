export default {
  namespaced: true,
  actions: {
    changeCurrentPage({ commit }, data) {
      try {
        commit("updateCurrentPage", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mutations: {
    updateCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
  getters: {
    currentPage: (state) => state.currentPage,
  },
  state: {
    currentPage: 1,
  },
};
