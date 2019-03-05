import app from './../main';
import http from './httpService';

const persistStore = (store) => {

    const storeToSave = {
        user : store.state.user,
        business : store.state.business,
        product : store.state.product,
        currentLevel : store.state.currentLevel,
        IntangibleFactors : store.state.IntangibleFactors,
        pyramicIntangibleFactors : store.state.pyramicIntangibleFactors,
        competitors : store.state.competitors,
        markets :store.state.markets,
        marketCategory : store.state.marketCategory,
        selectedMarket : store.state.selectedMarket,
        selectedAttractiveCriteria: store.state.selectedAttractiveCriteria,
        customers : store.state.customers,
        businesses : store.state.businesses,
        levels : store.state.levels,
        marketAssessments: store.state.marketAssessments
    };

    return new Promise((resolve, reject)=>{

        http.post('/saveState',{state :JSON.stringify(storeToSave)}).then(()=>{
            resolve();
        }).catch(()=>{
            reject();
        })
    });
};

export default  persistStore;
