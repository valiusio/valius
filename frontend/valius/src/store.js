import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { IntangibleFactors } from "./services/IntangibleFactorsService";
Vue.use(Vuex);

export const store =  new  Vuex.Store({
    state : {
        user: {
            username:'',
            firstname:'',
            lastname:'',
            email:'',
            backupemail:'',
            employer:'',
            title:'',
            typeofemployer:'',
            phone:'',
            mobile:'',
            maillingaddress:'',
            city:'',
            state:'',
            prsa:false,
            password:''
        },
        business: {
            business: '',
            profile: '',
            subject : '',
            services: '',
            vision: ''
        },
        product: {
            brandName: '',
            offers: '',
            targetMarket: '',
            strengths: [],
            weaknesses: []
        },
        currentLevel: 'start' ,
        IntangibleFactors: IntangibleFactors,
        pyramicIntangibleFactors : [],
        competitors: [],
        markets:[],
        levels:
                {
                    start: {
                        locked: false,
                        completed: false,
                        subLevels:
                            {
                                userProfile         : { locked : false, completed: true, rating: 0},
                                organizationProfile : { locked : true,  completed: true, rating: 0},
                                productProfile      : { locked : true,  completed: true, rating: 0},
                            }

                    },
                    landscapeIdentification: {
                        locked: true,
                        completed: false,
                        subLevels:
                            {
                                offerOfValue        : { locked : true, completed: false, rating: 0},
                                competitors         : { locked : true, completed: false,rating: 0},
                                marketObjective     : { locked : true, completed: false,rating: 0},
                            }
                    },
                    // marketAssessment: {
                    //     locked: true,
                    //     completed: false,
                    // },
                    // productAssessment: {
                    //     locked: true,
                    //     completed: false,
                    // },
                    // readyToStrategize: {
                    //     locked: true,
                    //     completed: false,
                    // }
                }
    },
    getters: {
        levels(state) {
            return state.levels;
        },

        currentLevel(state) {
            return state.currentLevel;
        },

        user(state) {
            return state.user;
        },
        business(state) {
            return state.business;
        },
        product(state) {
            return state.product;
        },
        IntangibleFactors(state) {
            return state.IntangibleFactors;
        },
        pyramicIntangibleFactors(state) {
            return state.pyramicIntangibleFactors;
        },
        competitors(state) {
            return state.competitors;
        },
        markets(state) {
            return state.markets;
        }
    },
    mutations: {
        setLevels (state, payload) {
            state.levels = payload
        },
        setCurrentLevel (state, payload) {
            state.currentLevel = payload;
        },

        saveUser(state, payload) {
            state.user = payload;
        },
        updateBusiness(state, payload) {
            state.business = payload;
        },
        updateProduct(state, payload) {
            state.product = payload;
        },
        updatePyramicIntangibleFactors(state, payload) {
            state.pyramicIntangibleFactors = payload;
        },
        updateCompetitors(state, payload) {
            state.competitors = payload;
        },
        updateMarkets(state, payload) {
            state.markets = payload;
        }
    },
    actions: {
        setLevels(context, payload) {
            context.commit('setLevels', payload);
        },
        setCurrentLevel (context, payload) {
            context.commit('setCurrentLevel', payload);
        },
        saveUser(context, payload) {
            context.commit('saveUser', payload);
        },
        updateBusiness(context, payload) {
            context.commit('updateBusiness',payload);
        },
        updateProduct(context, payload) {
            context.commit('updateProduct',payload);
        },
        updatePyramicIntangibleFactors(context, payload) {
            context.commit('updatePyramicIntangibleFactors', payload);
        },
        updateCompetitors(context, payload) {
            context.commit('updateCompetitors', payload);
        },
        updateMarkets(context, payload) {
            context.commit('updateMarkets', payload);
        }
    }
});
