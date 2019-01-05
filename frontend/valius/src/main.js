import Vue from 'vue'
import App from './App.vue'
import router from './router'
import backendServerIp from '../config/configuration';
Vue.config.productionTip = false;


import VeeValidate from 'vee-validate';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VeeValidate);
Vue.use(VueMaterial);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
