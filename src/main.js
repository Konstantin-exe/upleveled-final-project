import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import '../public/css/style.css';
import 'jquery';
import 'popper.js';

Vue.use(VModal);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
