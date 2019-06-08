<template>
    <div class="marketsEvaluation">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Κάντε κλικ στα παρακάτω εικονίδια για να ξεκινήσεις την
                    αξιολόγηση!</h1>
            </information-banner>

            <div class="marketsEvaluation__container">
                    <img class="marketsEvaluation__cover" :src="img">
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--3"
                    :class="hasRating(markets.market3) && 'marketsEvaluation__completed'"

                >
                    {{markets.market3.name}}
                </span>
                <div class="clickable clickable--3" @click="next('market3')"></div>

                <span
                    class="marketsEvaluation__category marketsEvaluation__category--1"
                    :class="hasRating(markets.market1) && 'marketsEvaluation__completed'"
                >
                    {{markets.market1.name}}
                </span>
                <div class="clickable clickable--1" @click="next('market1')"></div>

                <span
                    class="marketsEvaluation__category marketsEvaluation__category--2"
                    :class="hasRating(markets.market2) && 'marketsEvaluation__completed'"

                >
                    {{markets.market2.name}}
                </span>
                <div class="clickable clickable--2" @click="next('market2')"></div>
            </div>

            <button v-if="levelComplete" @click="complete" class="marketsEvaluation__submit">
                Next
            </button>
        </div>
    </div>
</template>



<script>
    import informationBanner from './../../components/InformationBanner';
    import levelUpdate from './../../services/levelUpdate';

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
                this.levels.productAssessment.locked = false;
                this.$store.dispatch('updateLevels', this.levels);
                levelUpdate.levelUpdate(this.$store, 'productAssessment');
                console.log(this.this.$store.state)
                //this.$router.push('/game-navigation/marketAssessment');
            }
        }
    }
</script>
