const levelUpdate = (store, nextLevel) => {
    const levels = {
        "start": 1,
        "landscapeIdentification": 2,
        "marketAssessment": 3,
        "productAssessment": 4,
        "readyToStrategize": 5
    }

    const currentLevel = store.getters.currentLevel;
    const powerCurrentLevel = levels[ currentLevel ];
    const powernextLevel = levels[nextLevel] || 0;

    if(powernextLevel > powerCurrentLevel) {
        store.dispatch('setCurrentLevel', nextLevel);
    }
};

export default  { levelUpdate };

