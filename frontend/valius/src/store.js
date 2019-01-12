import Vue from 'vue';
import Vuex from 'vuex';

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
        levels: [
                {
                    start: {
                        locked: false,
                        completed: false,
                        subLevels:
                            {
                                userProfile : {locked : false, rating: 0},
                                organizationProfile : {locked : true, rating: 0},
                                productProfile : {locked : true, rating: 0},
                            }

                    },
                    landscapeIdentification: {
                        locked: true,
                        completed: false,
                    },
                    marketAssessment: {
                        locked: true,
                        completed: false,
                    },
                    productAssessment: {
                        locked: true,
                        completed: false,
                    },
                    readyToStrategize: {
                        locked: true,
                        completed: false,
                    }
                }
        ]

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
        }
    }
});
