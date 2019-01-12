import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import router from './router'
Vue.config.productionTip = false;


import VeeValidate from 'vee-validate';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.use(store);

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app');
