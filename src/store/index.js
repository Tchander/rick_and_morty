import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import characters from "./modules/characters";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    characters,
  },
  plugins: [vuexLocal.plugin],
});
