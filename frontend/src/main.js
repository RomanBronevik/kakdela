import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import './registerServiceWorker';
import VueSocketIO from 'vue-socket.io';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3334',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}));
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
