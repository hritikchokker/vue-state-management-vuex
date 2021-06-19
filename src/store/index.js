import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import portfolio from "./portfolio";
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    resume: {
      state: {
        forHire: true,
        jobs: ["Librarian", "Jedi", "Cat Herder"],
      },
      getters: {
        totalJobs(state) {
          return state.jobs.length;
        },
      },
    },
    portfolio,
  },
});
