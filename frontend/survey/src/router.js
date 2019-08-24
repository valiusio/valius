import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/welcome.vue'
import Description from './views/description'
import Questionnaire from './views/questionnaire'
import Map from './views/map'

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
    {
      path: '/description',
      name: 'description',
      component: Description
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
  ]
})
