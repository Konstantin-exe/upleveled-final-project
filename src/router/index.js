import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Main from '../components/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Außen',
    alias: '/ausen',
    component: Main,
  },
  { path: '/:id', name: 'Main', component: Main },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
