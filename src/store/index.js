import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: "all",
    beforeEdit: ""
  },
  getters: {
    getFilter(state) {
      return state.filter;
    },
    getBeforeEdit(state) {
      return state.beforeEdit;
    }
  },
  mutations: {
    setFilter(state, value) {
      state.filter = value;
    },
    setBeforeEdit(state, value) {
      state.beforeEdit = value;
    }
  },
  actions: {},
  modules: {}
});
