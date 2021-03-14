import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';

import '../src/assets/css/style.css';
import 'jquery';

Vue.use(VModal);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
