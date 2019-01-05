import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login';
import Register from './pages/register';
import WelcomePage from './pages/welcomescreen.vue';
import WelcomeStrategy from './pages/welcomescreen-strategy.vue';
import StartGame  from './pages/startGame.vue';
import GameMap  from './pages/gamemap.vue';
import GameNavigation  from './pages/gameNavigation.vue';
import UserProfile  from './pages/userProfile.vue';
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
      name: 'register',
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
    }

  ]
})
