import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';

Vue.use(VModal);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
