import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import characters from "@/store/modules/characters";
import currentPage from "@/store/modules/currentPage";
import episodes from "@/store/modules/episodes";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    characters,
    currentPage,
    episodes,
  },
  plugins: [vuexLocal.plugin],
});
