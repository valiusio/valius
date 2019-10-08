import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      brandName: "",
      email: "",
      level: 1,
      questions: {},
      marketProfileQuestions: {},
      productProfile: {}
  },
  mutations: {
      state(state, token){
          state = token;
      },
  },
  getters: {
      state(state) {
          return state
      }
  },
  actions: {
      state(context, payload){
          context.commit('state', payload);
      }
  }
})
