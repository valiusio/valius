import http from './httpService';

const Initializator = (store) => {

    let savedState = null;


    return new Promise( (resolve , reject) => {
        http.get('/getState').then( res => {
               const savedState = res.data;
               const convertedState = res.data !== '' && JSON.parse(savedState);
                if(res.data !== '' && convertedState && typeof convertedState === 'object'){
                     store.dispatch('updateBusiness', convertedState.business);
                     store.dispatch('updateBusinesses', convertedState.businesses);
                     store.dispatch('updateCompetitors', convertedState.competitors);
                     store.dispatch('setCurrentLevel', convertedState.currentLevel);
                     store.dispatch('updateCustomers', convertedState.customers);
                     store.dispatch('updateLevels', convertedState.levels);
                     store.dispatch('updateMarketCategory', convertedState.marketCategory);
                     store.dispatch('updateMarkets', convertedState.markets);
                     store.dispatch('updateProduct', convertedState.product);
                     store.dispatch('updatePyramicIntangibleFactors', convertedState.pyramicIntangibleFactors);
                     store.dispatch('updateSelectedMarket', convertedState.selectedMarket);
                     store.dispatch('saveUser', convertedState.user);
                    resolve();
                }

        });
    })


}

export default Initializator;
