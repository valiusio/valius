const initMarkets = (markets) => {
var markets = markets;
    for(var i=1; i<=3; i++) {
        if(!markets['market'+i].attractiveCriteria) {
            markets['market'+i]['attractiveCriteria'] = {
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
                }
            }
        }
    }

    return markets;
};

const initLevels = (levels) => {
var levels = levels;
    if(!levels.start) {
        levels['start'] = {
            locked: false,
            completed: false,
            subLevels:
                {
                    userProfile         : { locked : false, completed: true, rating: 0},
                    organizationProfile : { locked : true,  completed: true, rating: 0},
                    productProfile      : { locked : true,  completed: true, rating: 0},
                }

        };
    }

    if(!levels.landscapeIdentification) {
        levels['landscapeIdentification'] = {
            locked: true,
            completed: false,
            subLevels:
                {
                    offerOfValue        : { locked : false, completed: false, rating: 0},
                    competitors         : { locked : true, completed: false,rating: 0},
                    marketObjective     : { locked : true, completed: false,rating: 0},
                }
        };
    }

    if(!levels.marketAssessment) {
        levels['marketAssessment'] = {
            locked: true,
            completed: false,
            subLevels:
                {
                    attractivenessCriteria : { locked : false, completed: false, rating: 0},
                    importanceOfCriteria   : { locked : true, completed: false,rating: 0},
                    evaluationProcess      : { locked : true, completed: false,rating: 0},
                }
        };
    }
    if(!levels.productAssessment) {
        levels['productAssessment'] = {
            locked: true,
            completed: false,
            subLevels:
                {
                    successFactors    : { locked : false, completed: false, rating: 0},
                    customersSample   : { locked : true, completed: false,rating: 0},
                    customersFeedback : { locked : true, completed: false,rating: 0},
                }
        };
    }

    return levels
};


const initCustomers = (customers) => {
    if(!customers.customer1.selectedMarketCategoryAnswer) {
        customers.customer1.selectedMarketCategoryAnswer = '';
    }
    if(!customers.customer2.selectedMarketCategoryAnswer) {
        customers.customer2.selectedMarketCategoryAnswer = '';
    }
    if(!customers.customer3.selectedMarketCategoryAnswer) {
        customers.customer3.selectedMarketCategoryAnswer = '';
    }
};

const initBusinesses = (businesses) => {
    if(!businesses.business1.selectedBusinessCategoryAnswer) {
        businesses.business1.selectedBusinessCategoryAnswer = '';
    }
    if(!businesses.business2.selectedBusinessCategoryAnswer) {
        businesses.business2.selectedBusinessCategoryAnswer = '';
    }
    if(!businesses.business3.selectedBusinessCategoryAnswer) {
        businesses.business3.selectedBusinessCategoryAnswer = '';
    }
};

export default {initMarkets,initLevels, initCustomers, initBusinesses}
