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
        marketAssessments: {
            marketAssessment1: {
                name: '',
                weight: 0,
                attractivenessParameters: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            marketAssessment2: {
                name: '',
                weight: 0,
                attractivenessParameters: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            marketAssessment3: {
                name: '',
                weight: 0,
                attractivenessParameters: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            marketAssessment4: {
                name: '',
                weight: 0,
                attractivenessParameters: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            marketAssessment5: {
                name: '',
                weight: 0,
                attractivenessParameters: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
        },
        markets: {
            market1 : {
                name : '',
                attractiveCriteria: {
                    attractiveCriteria1 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria2 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria3 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria4 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria5 : {
                        name: '',
                        value: 0
                    },
                }
            },
            market2 : {
                name : '',
                attractiveCriteria: {
                    attractiveCriteria1 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria2 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria3 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria4 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria5 : {
                        name: '',
                        value: 0
                    },
                }
            },
            market3 : {
                name : '',
                attractiveCriteria: {
                    attractiveCriteria1 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria2 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria3 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria4 : {
                        name: '',
                        value: 0
                    },
                    attractiveCriteria5 : {
                        name: '',
                        value: 0
                    },
                }
            },
        },
        marketCategories: {
            b2c: [
                {
                    name: 'Χρήσης προϊόντος (user-rate)',
                    label: 'Χρήσης προϊόντος (user-rate)'
                },
                {
                    name: 'Ευαισθησία στην τιμή (sensitivity)',
                    label: 'Ευαισθησία στην τιμή (sensitivity)'
                },
                {
                    name: 'Αντιλαμβανόμενα Οφέλη',
                    label: 'Αντιλαμβανόμενο Όφελος'
                },
                {
                    name: 'Πιστότητα στη μάρκα (loyalty)',
                    label: 'Πιστότητα στη μάρκα (loyalty)'
                },
                {
                    name: 'Δημογραφικά',
                    label: 'Δημογραφικά'
                },
                {
                    name: 'Κοινωνικό - Οικονομικό',
                    label: 'Κύριο Κοινωνικό-Οικονομικό Στοιχείο'
                },
                {
                    name: 'Γεωγραφικά',
                    label: 'Κύριο Γεωγραφικό στοιχείο'
                },
                {
                    name: 'Τρόπου ζωής',
                    label: 'Στοιχείο Τρόπου Ζωής'
                },
                {
                    name: 'Κανάλι αγοράς',
                    label: 'Κανάλι αγοράς'
                },
                {
                    name: 'Μέσο ενημέρωσης',
                    label: 'Κύριο Μέσο Ενημέρωσης'
                },
                {
                    name: 'Άλλο',
                    label: 'Άλλο'
                }

            ],
            b2b: [
                {
                    name: 'Πιστότητα στη μάρκα (loyalty)',
                    label: 'Πιστότητα στη μάρκα'
                },
                {
                    name: 'Χρήσης προϊόντος (user-rate)',
                    label: 'Χρήσης προϊόντος'
                },
                {
                    name: 'Ευαισθησία στην τιμή (sensitivity)',
                    label: 'Ευαισθησία στην τιμή'
                },
                {
                    name: 'Αντιλαμβανόμενα Οφέλη',
                    label: 'Αντιλαμβανόμενα Οφέλη'
                },
                {
                    name: 'Μέγεθος αγορών',
                    label: 'Μέγεθος αγορών'
                },
                {
                    name: 'Τομέας',
                    label: 'Τομέας'
                },
                {
                    name: 'Status Χρήστη',
                    label: 'Status Χρήστη'
                },
                {
                    name: 'Γεωγραφικά',
                    label: 'Κύριο Γεωγραφικό στοιχείο'
                },
                {
                    name: 'Μέγεθος εταιρίας',
                    label: 'Μέγεθος εταιρίας'
                },
                {
                    name: 'Σχέση μεταξύ αγοραστή/πωλητή',
                    label: 'Σχέση μεταξύ αγοραστή/πωλητή'
                },
                {
                    name: 'Πολιτικές αγορών',
                    label: 'Πολιτικές αγορών'
                },
                {
                    name: 'Πρόσωπα λήψης αποφάσεων (Key decision marker)',
                    label: 'Πρόσωπα λήψης αποφάσεων'
                },
                {
                    name: 'Άλλο',
                    label: 'Άλλο'
                }
            ]
        },
        marketCategory : '',
        selectedMarket: '',
        selectedAttractiveCriteria:[],
        customers : {
            customer1 : {
                name : '',
                demographicItem: '',
                selectedMarketCategoryAnswer: '',
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
                selectedMarketCategoryAnswer: '',
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
                selectedMarketCategoryAnswer: '',
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
                selectedBusinessCategoryAnswer: '',
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
                selectedBusinessCategoryAnswer: '',
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
                selectedBusinessCategoryAnswer: '',
                desiredFeature: '',
                brandFidelity: '',
                communicationMeans: [],
                distributionChannel: '',
                businessSize: []
            },

        },
        customersPurchasingCriteria: [],
        questionnaire: [],
        levels: {
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
                                offerOfValue        : { locked : false, completed: false, rating: 0},
                                competitors         : { locked : true, completed: false,rating: 0},
                                marketObjective     : { locked : true, completed: false,rating: 0},
                            }
                    },
                    marketAssessment: {
                        locked: true,
                        completed: false,
                        subLevels:
                            {
                                attractivenessCriteria : { locked : false, completed: false, rating: 0},
                                importanceOfCriteria   : { locked : true, completed: false,rating: 0},
                                evaluationProcess      : { locked : true, completed: false,rating: 0},
                            }
                    },
                    productAssessment: {
                        locked: true,
                        completed: false,
                        subLevels:
                            {
                                successFactors    : { locked : false, completed: false, rating: 0},
                                customersSample   : { locked : true, completed: false,rating: 0},
                                customersFeedback : { locked : true, completed: false,rating: 0},
                            }
                    },
                    // readyToStrategize: {
                    //     locked: true,
                    //     completed: false,
                    // }
                },
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
        selectedAttractiveCriteria(state) {
            return state.selectedAttractiveCriteria;
        },
        selectedMarket(state) {
            return state.selectedMarket;
        },
        customers(state) {
            return state.customers;
        },
        businesses(state) {
            return state.businesses;
        },
        marketAssessments(state) {
            return state.marketAssessments;
        },
        customersPurchasingCriteria(state) {
            return state.customersPurchasingCriteria;
        },
        questionnaire(state) {
            return state.questionnaire;
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
        updateSelectedAttractiveCriteria(state, payload) {
          state.selectedAttractiveCriteria = payload;
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
        updateMarketAssessments(state, payload) {
            state.marketAssessments = payload;
        },
        updateCustomersPurchasingCriteria(state, payload) {
            state.customersPurchasingCriteria = payload;
        },
        updateQuestionnaire(state, payload) {
            state.questionnaire = payload;
        }
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
        updateSelectedAttractiveCriteria(context, payload) {
            context.commit('updateSelectedAttractiveCriteria', payload);
        },
        updateCustomers(context, payload) {
            context.commit('updateCustomers', payload);
        },
        updateBusinesses(context, payload) {
            context.commit('updateBusinesses', payload);
        },
        updateMarketAssessments(context, payload) {
            context.commit('updateMarketAssessments', payload);
        },
        updateCustomersPurchasingCriteria(context, payload) {
            context.commit('updateCustomersPurchasingCriteria', payload);
        },
        updateQuestionnaire(context, payload) {
            context.commit('updateQuestionnaire', payload);
        }
    }
});
