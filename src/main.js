import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '../src/assets/css/style.css';
import 'jquery';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
