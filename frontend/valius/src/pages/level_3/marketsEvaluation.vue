<template>
    <div class="marketsEvaluation">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Βαθμολόγησε το κάθε τμήματος της αγοράς σου.</h1>
                <p>Κάντε κλικ στα παρακάτω εικονίδια για να ξεκινήσεις!</p>
            </information-banner>

            <div class="marketsEvaluation__container">
                    <img class="marketsEvaluation__cover" :src="img">
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--travellers"
                    :class="hasRating(markets.market1) && 'marketsEvaluation__completed'"
                    @click="next('market1')"
                >
                    {{markets.market1.name}}
                </span>
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--athletes"
                    :class="hasRating(markets.market2) && 'marketsEvaluation__completed'"
                    @click="next('market2')"
                >
                    {{markets.market2.name}}
                </span>
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--gamers"
                    :class="hasRating(markets.market3) && 'marketsEvaluation__completed'"
                    @click="next('market3')"
                >
                    {{markets.market3.name}}
                </span>
            </div>

            <button v-if="levelComplete" @click="complete" class="marketsEvaluation__submit">
                Next
            </button>
        </div>
    </div>
</template>



<script>
    import informationBanner from './../../components/InformationBanner';

    export default {
        name: 'marketsEvaluation',
        components: {informationBanner},
        props: [

        ],
        comments: {
            informationBanner
        },
        computed : {
            img () {
                return require('./../../assets/images/marketEvaluation.png');
            },
            levelComplete() {
                return this.hasRating(this.markets.market1) && this.hasRating(this.markets.market2) && this.hasRating(this.markets.market3);
            }
        },
        data(){
            return {
                markets : this.$store.getters.markets,
                levels  : this.$store.getters.levels,
            }
        },
        methods: {
            hasRating(market) {
              return  market.attractiveCriteria.attractiveCriteria1.value !== 0 ||
                      market.attractiveCriteria.attractiveCriteria2.value !== 0 ||
                      market.attractiveCriteria.attractiveCriteria3.value !== 0 ||
                      market.attractiveCriteria.attractiveCriteria4.value !== 0 ||
                      market.attractiveCriteria.attractiveCriteria5.value !== 0
            },
            next(market) {
                this.$router.push('/marketsEvaluationDepartment/'+market);
            },
            complete() {
                this.levels.marketAssessment.subLevels.evaluationProcess.completed = true;
                this.levels.marketAssessment.subLevels.evaluationProcess.rating    = 3;
                this.levels.marketAssessment.completed = true;

                this.$store.dispatch('updateLevels', this.levels);
                this.$store.dispatch('setCurrentLevel', 'productAssessment');
                this.$router.push('/game-navigation/marketAssessment');
            }
        }
    }
</script>
