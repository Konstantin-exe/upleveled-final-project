import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import '../src/assets/css/style.css';
import 'jquery';
import PortalVue from 'portal-vue';

new Vue({
  router,
  store,
  PortalVue,
  render: (h) => h(App),
}).$mount('#app');
