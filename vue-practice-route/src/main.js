import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue';
import Users from './components/Users.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    components: HelloWorld
  },
  {
    path: '/users',
    components: Users
  },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
