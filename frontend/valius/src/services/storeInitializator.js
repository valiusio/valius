import http from './httpService';
import modelReinitializator from './modelReinitializator';

const Initializator = (store) => {
    return new Promise( (resolve , reject) => {
        http.get('/getState').then( res => {
               const savedState = res.data;
               const convertedState = res.data !== '' && JSON.parse(savedState);
                if(res.data !== '' && convertedState && typeof convertedState === 'object'){
                    convertedState.business && store.dispatch('updateBusiness', convertedState.business);
                    convertedState.businesses && store.dispatch('updateBusinesses', convertedState.businesses);
                    convertedState.competitors && store.dispatch('updateCompetitors', convertedState.competitors);
                    convertedState.currentLevel && store.dispatch('setCurrentLevel', convertedState.currentLevel);
                    convertedState.customers && store.dispatch('updateCustomers', convertedState.customers);
                    convertedState.levels && store.dispatch('updateLevels', modelReinitializator.initLevels(convertedState.levels));
                    convertedState.marketCategory && store.dispatch('updateMarketCategory', convertedState.marketCategory);
                    convertedState.markets && store.dispatch('updateMarkets', modelReinitializator.initMarkets(convertedState.markets));
                    convertedState.selectedAttractiveCriteria && store.dispatch('updateSelectedAttractiveCriteria', convertedState.selectedAttractiveCriteria);
                    convertedState.product && store.dispatch('updateProduct', convertedState.product);
                    convertedState.pyramicIntangibleFactors && store.dispatch('updatePyramicIntangibleFactors', convertedState.pyramicIntangibleFactors);
                    convertedState.selectedMarket && store.dispatch('updateSelectedMarket', convertedState.selectedMarket);
                    convertedState.user && store.dispatch('saveUser', convertedState.user);
                    convertedState.marketAssessments && store.dispatch('updateMarketAssessments', convertedState.marketAssessments);
                    resolve();
                }

        });
    })
}

export default Initializator;
