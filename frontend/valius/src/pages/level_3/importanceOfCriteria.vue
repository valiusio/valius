<template>
   <div class="importanceOfCriteria">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Πόσο σημαντικά είναι τα κριτήρια που επέλεξες;</h1>
                <p>Σε ποσοστό 1-100% προσδιόρισε το βαθμό σημαντικότητας του κάθε κριτηρίου για τον οργανισμό σου.</p>
            </information-banner>

            <div class="importanceOfCriteria__container">
                <div class="importanceOfCriteria__headers">
                    <div class="column__left">Market Attractiveness Factors</div>
                    <div class="column__right">weights</div>
                </div>

                <div class="row">
                    <div class="column__left">
                        <div class="attractiveness-factor">
                            <img class="attractiveness-factor__img" :src="getFactorImg(marketAssessments.marketAssessment1.name)">
                            <span class="attractiveness-factor__label">{{getLabelByFactor(marketAssessments.marketAssessment1.name)}}</span>
                        </div>
                    </div>
                    <div class="column__right">
                        <input class="importanceOfCriteria_weight" type="number" min="0" max="100" v-model="marketAssessments.marketAssessment1.weight" placeholder="e.g 20%">
                    </div>
                </div>
                <div class="row">
                    <div class="column__left">
                        <div class="attractiveness-factor">
                            <img class="attractiveness-factor__img" :src="getFactorImg(marketAssessments.marketAssessment2.name)">
                            <span class="attractiveness-factor__label">{{getLabelByFactor(marketAssessments.marketAssessment2.name)}}</span>
                        </div>
                    </div>
                    <div class="column__right">
                        <input class="importanceOfCriteria_weight" type="number" min="0" max="100"  v-model="marketAssessments.marketAssessment2.weight" >
                    </div>
                </div>
                <div class="row">
                    <div class="column__left">
                        <div class="attractiveness-factor">
                            <img class="attractiveness-factor__img" :src="getFactorImg(marketAssessments.marketAssessment3.name)">
                            <span class="attractiveness-factor__label">{{getLabelByFactor(marketAssessments.marketAssessment3.name)}}</span>
                        </div>
                    </div>
                    <div class="column__right">
                        <input class="importanceOfCriteria_weight"  type="number" min="0" max="100"  v-model="marketAssessments.marketAssessment3.weight">
                    </div>
                </div>
                <div class="row">
                    <div class="column__left">
                        <div class="attractiveness-factor">
                            <img class="attractiveness-factor__img" :src="getFactorImg(marketAssessments.marketAssessment4.name)">
                            <span class="attractiveness-factor__label">{{getLabelByFactor(marketAssessments.marketAssessment4.name)}}</span>
                        </div>
                    </div>
                    <div class="column__right">
                        <input class="importanceOfCriteria_weight"  type="number" min="0" max="100"  v-model="marketAssessments.marketAssessment4.weight">
                    </div>
                </div>
                <div class="row">
                    <div class="column__left">
                        <div class="attractiveness-factor">
                            <img class="attractiveness-factor__img" :src="getFactorImg(marketAssessments.marketAssessment5.name)">
                            <span class="attractiveness-factor__label">{{getLabelByFactor(marketAssessments.marketAssessment5.name)}}</span>
                        </div>
                    </div>
                    <div class="column__right">
                        <input class="importanceOfCriteria_weight" type="number" min="0" max="100"  v-model="marketAssessments.marketAssessment5.weight">
                    </div>
                </div>
                <div class="row">
                    <div class="column__left">

                    </div>
                    <div class="column__right">
                       <span
                           class="total-value"
                           :class="getTotalClass"
                       >{{ getTotal }} %</span>
                    </div>
                </div>
            </div>

            <button class="importanceOfCriteria__button" v-if="getTotal == 100" @click="next">
                Next
            </button>
        </div>
   </div>
</template>



<script>
    import informationBanner from './../../components/InformationBanner';
    import InformationBanner from "../../components/InformationBanner";
    import AttractivenessCriteria from './../../services/AttractivenessCriteria';

    export default {
        name: 'importanceOfCriteria',
        components: {InformationBanner},
        props: [

        ],
        comments : [
            informationBanner
        ],
        data(){
            return {
                marketAssessments : this.$store.getters.marketAssessments,
                levels            : this.$store.getters.levels,
                allAttractivenessCriteriaFactors : () => {
                    return [
                        ...AttractivenessCriteria.AttractivenessCriteria.competitiveFactors.factors,
                        ...AttractivenessCriteria.AttractivenessCriteria.socialFactors.factors,
                        ...AttractivenessCriteria.AttractivenessCriteria.segmentFactors.factors,
                    ]
                }
            }
        },
        computed: {
            getTotal() {
                return Number(this.marketAssessments.marketAssessment1.weight) +
                    Number(this.marketAssessments.marketAssessment2.weight) +
                    Number(this.marketAssessments.marketAssessment3.weight) +
                    Number(this.marketAssessments.marketAssessment4.weight) +
                    Number(this.marketAssessments.marketAssessment5.weight)
            },
            getTotalClass() {
                if(this.getTotal === 100){
                    return 'total-value--completed'
                }
                if(this.getTotal > 100){
                    return 'total-value--error'
                }
            }
        },
        methods: {

            getLabelByFactor(name) {
                return this.allAttractivenessCriteriaFactors().filter((factor) => {
                    return factor.name == name
                })[0].label;
            },
            getFactorImg(name) {
                return require('./../../assets/images/attractivenessCriteria/' + name +'.png');
            },
            next() {
                this.levels.marketAssessment.subLevels.importanceOfCriteria.completed = true;
                this.levels.marketAssessment.subLevels.importanceOfCriteria.rating = 3;
                this.levels.marketAssessment.subLevels.evaluationProcess.locked = false;
                this.$store.dispatch('updateMarketAssessments', this.marketAssessments);
                this.$store.dispatch('updateLevels', this.levels);
                this.$router.push('/game-navigation');
            }
        }

    }
</script>

