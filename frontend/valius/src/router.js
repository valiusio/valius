import Vue from 'vue';
import store from './store';
import Router from 'vue-router';
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
import marketAssassmentIntro from './pages/level_3/marketAssessmentIntro';
import selectMarketAssessments from './pages/level_3/selectMarketAssessments'
import importanceOfCriteriaIntro from './pages/level_3/importanceOfCriteriaIntro';
import importanceOfCriteria from './pages/level_3/importanceOfCriteria';
import evaluationProcessIntro from './pages/level_3/evaluationProcessIntro';
import evaluationProcess from './pages/level_3/evaluationProcess';
import attractivenessIntro from './pages/level_3/attractivenessIntro';
import marketEvaluation from './pages/level_3/marketsEvaluation';
import marketEvaluationDepartment from './pages/level_3/marketEvaluationDepartment';
import successFactorsintro from './pages/level_4/successFactorsIntro';
import successFactors from './pages/level_4/successFactors';
import verifySuccessFactors from './pages/level_4/verifySuccessFactors';
import customersSampleIntro from './pages/level_4/customersSampleIntro';
import questionnaire from './pages/level_4/questionnaire';
import customerFeedbackIntro from './pages/level_4/customerFeedbackIntro';
import customersInvitation from './pages/level_4/customersInvitation';
import test from './pages/testpage';

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '*', redirect: '/' },
    { path: '/test', component: test },
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
      component: welcomeToStrategy,
        meta : {
            requiresAuth: true
       }
    },
    {
      path: '/how-it-works',
      name: 'howItWorks',
      component: howItWorks
    }, {
      path: '/valius',
      name: 'valius',
      component: valius,
          meta : {
              requiresAuth: true
          }
    },
    {
      path: '/welcome-strategy',
      name: 'welcome-strategy',
      component: WelcomeStrategy,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/game-map',
      name: 'game-map',
      component: GameMap,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/game-navigation/:level?',
      name: 'gameNavigation',
      component: GameNavigation,
        meta : {
            requiresAuth: true
        }
    },
    {
        path: '/did-you-know',
        name: 'didYouKnow',
        component: GameNavigation,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/user-profile',
      name: 'userProfile',
      component: UserProfile,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/business-profile',
      name: 'businessProfile',
      component: BusinessProfile,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/product-profile',
      name: 'productProfile',
      component: ProductProfile,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/offer',
      name: 'offer',
      component: Offer,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/pyramid-of-value',
      name: 'pyramid',
      component: PyramidOfValue,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/competitors',
      name: 'competitors',
      component: Competitors,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/best-competitors',
      name: 'bestCompetitors',
      component: BestCompetitors,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/market',
      name: 'market',
      component: Market,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/market-focus',
      name: 'marketFocus',
      component: MarketFocus,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/choose-market',
      name: 'chooseMarket',
      component: ChooseMarket,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/market-categories/:filter?',
      name: 'marketCategories',
      component: MarketCategories,
        meta : {
            requiresAuth: true
        }
    },
      {
      path: '/customer-profile-intro/:market?',
      name: 'customerProfileIntro',
      component: CustomerProfileIntro,
          meta : {
              requiresAuth: true
          }
    },
    {
      path: '/customer-profile-b2c',
      name: 'customerProfileB2C',
      component: CustomerProfileB2C,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/business-profile-b2b',
      name: 'businessProfileB2B',
      component: BusinessProfileB2B,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/marketAssassmentIntro',
      name: 'marketAssassmentIntro',
      component: marketAssassmentIntro,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/selectMarketAssessments',
      name: 'selectMarketAssessments',
      component: selectMarketAssessments,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/importanceOfCriteriaIntro',
      name: 'importanceOfCriteriaIntro',
      component: importanceOfCriteriaIntro,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/importanceOfCriteria',
      name: 'importanceOfCriteria',
      component: importanceOfCriteria,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/evaluationProcessIntro',
      name: 'evaluationProcessIntro',
      component: evaluationProcessIntro,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/evaluationProcess',
      name: 'evaluationProcess',
      component: evaluationProcess,
        meta : {
            requiresAuth: true
        }
    },
    {
      path: '/attractivenessIntro',
      name: 'attractivenessIntro',
      component: attractivenessIntro,
      meta : {
          requiresAuth: true
      }
    },
    {
      path: '/marketsEvaluation',
      name: 'marketsEvaluation',
      component: marketEvaluation,
      meta : {
          requiresAuth: true
      }
    },
    {
        path: '/marketsEvaluationDepartment/:market?',
        name: 'marketsEvaluationDepartment',
        component: marketEvaluationDepartment,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/successFactorsIntro',
        name: 'successFactorsIntro',
        component: successFactorsintro,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/successFactors',
        name: 'successFactors',
        component: successFactors,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/verifySuccessFactors',
        name: 'verifySuccessFactors',
        component: verifySuccessFactors,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/customersSampleIntro',
        name: 'customersSampleIntro',
        component: customersSampleIntro,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/questionnaire',
        name: 'questionnaire',
        component: questionnaire,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/customersFeedbackIntro',
        name: 'customerFeedbackIntro',
        component: customerFeedbackIntro,
        meta : {
          requiresAuth: true
        }
    },
    {
        path: '/customersInvitation',
        name: 'customersInvitation',
        component: customersInvitation,
        meta : {
          requiresAuth: true
        }
    }

  ]
});
export default router;
