import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import WelcomePage from './pages/level_1/welcomescreen.vue';
import WelcomeStrategy from './pages/level_1/welcomescreen-strategy.vue';
import GameMap  from './components/gamemap.vue';
import GameNavigation  from './components/gameNavigation.vue';
import UserProfile  from './pages/level_1/userProfile.vue';
import BusinessProfile from './pages/level_1/businessProfile.vue';
import ProductProfile from './pages/level_1/productProfile';
import Offer from './pages/level_2/offer';
import PyramidOfValue from './pages/level_2/pyramidOfValue';
import Competitors from './pages/level_2/competitors';
import BestCompetitors from './pages/level_2/bestCompetitors';
import Market from './pages/level_2/market';
import MarketFocus from './pages/level_2/marketFocus';
import ChooseMarket from './pages/level_2/chooseMarket';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'valius.src.pages.login_register.register',
      component: Register
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomePage
    },
    {
      path: '/welcome-strategy',
      name: 'welcome-strategy',
      component: WelcomeStrategy
    },
    {
      path: '/game-map',
      name: 'game-map',
      component: GameMap
    },
    {
      path: '/game-navigation/',
      name: 'gameNavigation',
      component: GameNavigation
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: UserProfile
    },
    {
      path: '/business-profile',
      name: 'businessProfile',
      component: BusinessProfile
    },
    {
      path: '/product-profile',
      name: 'productProfile',
      component: ProductProfile
    },
    {
      path: '/offer',
      name: 'offer',
      component: Offer
    },
    {
      path: '/pyramid-of-value',
      name: 'pyramid',
      component: PyramidOfValue
    },
    {
      path: '/competitors',
      name: 'competitors',
      component: Competitors
    },
    {
      path: '/best-competitors',
      name: 'bestCompetitors',
      component: BestCompetitors
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/market-focus',
      name: 'marketFocus',
      component: MarketFocus
    },
    {
      path: '/choose-market',
      name: 'chooseMarket',
      component: ChooseMarket
    },



  ]
})
