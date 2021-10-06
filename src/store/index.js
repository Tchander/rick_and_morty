import Vue from "vue";
import Vuex from "vuex";
import characters from "./modules/characters";

Vue.use(Vuex);
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    characters,
  },
  plugins: [vuexLocal.plugin],
});
