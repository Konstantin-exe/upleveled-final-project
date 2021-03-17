import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  methods: {
    getAllDataFromApi() {
      axios
        .get('https://entdecken.konzerthaus.at/c-control/wp-json/wp/v2/pages')
        .then(function(response) {
          // handle success
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
  },
});
