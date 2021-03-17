import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allDataFromPages: [],
  },
  mutations: {
    SET_PAGES(state, data) {
      state.allDataFromPages = data;
    },
  },
  actions: {
    getAllDataFromPages({ commit }) {
      axios
        .get('https://entdecken.konzerthaus.at/c-control/wp-json/wp/v2/pages')
        .then((res) => {
          commit('SET_PAGES', res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  methods: {},
});
