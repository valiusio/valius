import app from './../main';

const persistStore = () => {
    const store = app.$store;

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
        customers : store.state.customers,
        businesses : store.state.businesses,
        levels : store.state.levels
    }
    return new Promise((resolve, reject)=>{
        app.$http.post('/saveState',{state :JSON.stringify(storeToSave)}).then(()=>{
            resolve();
        }).catch(()=>{
            reject();
        })
    });
};

export default  persistStore;
