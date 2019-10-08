import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/welcome.vue'
import Description from './views/description'
import Questionnaire from './views/questionnaire'
import Map from './views/map'
import marketProfile from './views/marketProfile'
import productProfile from './views/productProfile'
import marketProductsRating from './views/marketProductsRating'
import productRating from './views/productRating'
import completeSurvey from './views/completeSurvey'
import endSurvey from './views/endSurvey'

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
    {
      path: '/marketProfile',
      name: 'marketProfile',
      component: marketProfile
    },
    {
      path: '/productProfile',
      name: 'productProfile',
      component: productProfile
    },
    {
      path: '/marketProductsRating',
      name: 'marketProductsRating',
      component: marketProductsRating
    },
    {
      path: '/productRating/:criteria',
      name: 'productRating',
      component: productRating
    },
    {
      path: '/completeSurvey',
      name: 'completeSurvey',
      component: completeSurvey
    },
    {
      path: '/endSurvey',
      name: 'endSurvey',
      component: endSurvey
    }
  ]
})
