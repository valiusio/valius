import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import welcomeToStrategy from './pages/level_1/welcomeToStrategyGame';
import howItWorks from './pages/level_1/howItWorks';
import valius from './pages/level_1/valius.vue';
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
import MarketCategories from './pages/level_2/marketCategories';
import CustomerProfileIntro from './pages/level_2/customerProfileIntro';
import CustomerProfileB2C from './pages/level_2/customerProfileB2C';
import BusinessProfileB2B from './pages/level_2/businessProfileB2B';


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
      component: welcomeToStrategy
    },
    {
      path: '/how-it-works',
      name: 'howItWorks',
      component: howItWorks
    }, {
      path: '/valius',
      name: 'valius',
      component: valius
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
      path: '/game-navigation/:level?',
      name: 'gameNavigation',
      component: GameNavigation
    },
    {
        path: '/did-you-know',
        name: 'didYouKnow',
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
    {
      path: '/market-categories/:filter?',
      name: 'marketCategories',
      component: MarketCategories
    },
      {
      path: '/customer-profile-intro/:market?',
      name: 'customerProfileIntro',
      component: CustomerProfileIntro
    },
    {
      path: '/customer-profile-b2c',
      name: 'customerProfileB2C',
      component: CustomerProfileB2C
    },
    {
      path: '/business-profile-b2b',
      name: 'businessProfileB2B',
      component: BusinessProfileB2B
    },



  ]
})
