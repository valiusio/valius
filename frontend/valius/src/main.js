import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import router from './router'
import Axios from 'axios';

Vue.config.productionTip = false;


import VeeValidate from 'vee-validate';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VeeValidate);
Vue.use(VueMaterial);
Vue.use(store);

const app = new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app');

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (app.$store.getters.isLoggedIn) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
});

