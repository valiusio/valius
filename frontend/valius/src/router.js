import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import WelcomePage from './pages/level_1/welcomescreen.vue';
import WelcomeStrategy from './pages/level_1/welcomescreen-strategy.vue';
import StartGame  from './pages/level_1/startGame.vue';
import GameMap  from './components/gamemap.vue';
import GameNavigation  from './components/gameNavigation.vue';
import UserProfile  from './pages/level_1/userProfile.vue';
import BusinessProfile from './pages/level_1/businessProfile.vue';
import ProductProfile from './pages/level_1/productProfile';
import testpage  from './pages/test.vue';

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
      path: '/start-game',
      name: 'start-game',
      component: StartGame
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
      path: '/test',
      name: 'testpage',
      component: testpage
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
    }

  ]
})
