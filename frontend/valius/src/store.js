import Vue from 'vue';
import Vuex from 'vuex';
import { IntangibleFactors } from "./services/IntangibleFactorsService";
import router from './router';
import http from './services/httpService';
Vue.use(Vuex);

export const store =  new  Vuex.Store({
    state : {
        token: null,
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
        competitors: {
            competitor1: {
                name:'',
                profile: '',
            },
            competitor2: {
                name:'',
                profile: ''
            },
            competitor3: {
                name:'',
                profile: ''
            },
        },
        markets: {
            market1 : {
                name : ''
            },
            market2 : {
                name : ''
            },
            market3 : {
                name : ''
            },
        },
        marketCategories : {
            b2c : [
                "Χρήσης προϊόντος (user-rate)",
                "Ευαισθησία στην τιμή (sensitivity)",
                "Αντιλαμβανόμενα Οφέλη",
                "Πιστότητα στη μάρκα (loyality)",
                "Δημογραφικά",
                "Κοινωνικό - Οικονομικό",
                "Γεωγραφικά",
                "Τρόπου ζωής",
                "Κανάλι αγοράς",
                "Μέσο ενημέρωσης",
                "Άλλο"
            ],
            b2b : [
                "Πιστότητα στη μάρκα (loyality)",
                "Χρήσης προϊόντος (user-rate)",
                "Ευαισθησία στην τιμή (sensitivity)",
                "Αντιλαμβανόμενα Οφέλη",
                "Μέγεθος αγορών",
                "Τομέας",
                "Status Χρήστη",
                "Γεωγραφικά",
                "Μέγεθος εταιρίας",
                "Σχέση μεταξύ αγοραστή/πωλητή",
                "Πολιτικές αγορών",
                "Πρόσωπα λήψης αποφάσεων (Key decision marker)"
            ]
        },
        marketCategory : '',
        selectedMarket: '',
        customers : {
            customer1 : {
                name : '',
                demographicItem: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                lifeStyle: []
            },
            customer2 : {
                name : '',
                demographicItem: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                lifeStyle: []
            },
            customer3 : {
                name : '',
                demographicItem: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                lifeStyle: []
            }
        },
        businesses: {
            business1 : {
                name: '',
                category: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                businessSize: []
            },
            business2 : {
                name: '',
                category: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                businessSize: []
            },
            business3 : {
                name: '',
                category: '',
                productUsage: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                businessSize: []
            },

        },
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
        isLoggedIn(state) {
            return !!state.token;
        },

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
        },
        marketCategories(state) {
            return state.marketCategories;
        },
        marketCategory(state) {
            return state.marketCategory;
        },
        selectedMarket(state) {
            return state.selectedMarket;
        },
        customers(state) {
            return state.customers;
        },
        businesses(state) {
            return state.businesses;
        }
    },
    mutations: {
        auth_success(state, token){
            state.token = token;
        },
        logout(state){
            state.token = '';
            localStorage.removeItem('token');
            router.push('/')
        },

        updateToken(state, payload) {
          state.token = payload;
        },
        updateLevels (state, payload) {
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
        },
        updateMarketCategory(state, payload) {
            state.marketCategory = payload;
        },
        updateSelectedMarket(state, payload) {
            state.selectedMarket = payload;
        },
        updateCustomers(state, payload) {
            state.customers = payload;
        },
        updateBusinesses(state, payload) {
            state.businesses = payload;
        },
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
               http.post( process.env.VUE_APP_API_BASE_URL +'/login', { email : user.email , password : user.password })
                    .then(resp => {
                        const token = resp.data.token;
                        localStorage.setItem('token', token);
                        Object.assign(http.defaults.headers, {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization' : 'Bearer ' + token
                        });
                        commit('auth_success', token);
                        resolve(resp);
                    })
                    .catch(err => {
                        localStorage.removeItem('token');
                        reject(err);
                    })
            })
        },
        logout(context){
            return new Promise((resolve, reject) => {
                context.commit('logout');
                resolve();
            })
        },
        auth_success(context, payload){
            context.commit('auth_success', payload);
        },
        updateToken(context, payload) {
          context.commit('updateToken', payload);
        },
        updateLevels(context, payload) {
            context.commit('updateLevels', payload);
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
        },
        updateMarketCategory(context, payload) {
            context.commit('updateMarketCategory', payload);
        },
        updateSelectedMarket(context, payload) {
            context.commit('updateSelectedMarket', payload);
        },
        updateCustomers(context, payload) {
            context.commit('updateCustomers', payload);
        },
        updateBusinesses(context, payload) {
            context.commit('updateBusinesses', payload);
        }
    }
});
