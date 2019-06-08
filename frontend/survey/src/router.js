import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/welcome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/survey',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ]
})
