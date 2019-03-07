<template>
    <div class="marketEvaluationDepartment">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Πόσο ελκυστικό είναι το τμήμα "{{ this.markets[market].name }}" της αγοράς;</h1>
                <p>Βαθμολόγησε από το (1) έως το (10) την επίδοση αυτού του τμήματος της
                    αγοράς για καθένα από τα κριτήρια που επέλεξες.</p>
            </information-banner>

            <div class="marketEvaluationDepartment__container">
                <div class="row">
                    <div class="icon__container">
                        <span>{{ this.markets[market].name }}</span>
                        <img class="marketEvaluationDepartment__icon":src="img">
                    </div>
                </div>

                <div class="row marketEvaluationDepartment__flags">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                </div>
                <div class="row element-row" v-for="i in 5">
                    <img class="marketEvaluationDepartment__factor-icon" :src="getFactorImg(i)">
                    <div class="marketEvaluationDepartment__factor">{{getFactorName(i)}}</div>
                    <app-slider
                        v-model="markets[market].attractiveCriteria['attractiveCriteria'+i].value"
                    >

                    </app-slider>
                </div>
            </div>

            <button class="marketEvaluationDepartment__submit" @click="next">
                Got it!
            </button>
        </div>
    </div>
</template>



<script>
    import informationBanner from './../../components/InformationBanner';
    import appSlider from './../../components/Vslider';
    import AttractiveCriteria from './../../services/AttractivenessCriteria';

    export default {
        name: 'marketEvaluationDepartment',
        components: {informationBanner, appSlider},
        props: [

        ],
        comments: {
            informationBanner
        },
        created() {
            this.market = this.$route.params.market;
            this.markets = this.$store.getters.markets;
            this.markets.market1.attractiveCriteria.attractiveCriteria1.name = this.marketAssessments.marketAssessment1.name;
            this.markets.market1.attractiveCriteria.attractiveCriteria2.name = this.marketAssessments.marketAssessment2.name;
            this.markets.market1.attractiveCriteria.attractiveCriteria3.name = this.marketAssessments.marketAssessment3.name;
            this.markets.market1.attractiveCriteria.attractiveCriteria4.name = this.marketAssessments.marketAssessment4.name;
            this.markets.market1.attractiveCriteria.attractiveCriteria5.name = this.marketAssessments.marketAssessment5.name;

            this.markets.market2.attractiveCriteria.attractiveCriteria1.name = this.marketAssessments.marketAssessment1.name;
            this.markets.market2.attractiveCriteria.attractiveCriteria2.name = this.marketAssessments.marketAssessment2.name;
            this.markets.market2.attractiveCriteria.attractiveCriteria3.name = this.marketAssessments.marketAssessment3.name;
            this.markets.market2.attractiveCriteria.attractiveCriteria4.name = this.marketAssessments.marketAssessment4.name;
            this.markets.market2.attractiveCriteria.attractiveCriteria5.name = this.marketAssessments.marketAssessment5.name;

            this.markets.market3.attractiveCriteria.attractiveCriteria1.name = this.marketAssessments.marketAssessment1.name;
            this.markets.market3.attractiveCriteria.attractiveCriteria2.name = this.marketAssessments.marketAssessment2.name;
            this.markets.market3.attractiveCriteria.attractiveCriteria3.name = this.marketAssessments.marketAssessment3.name;
            this.markets.market3.attractiveCriteria.attractiveCriteria4.name = this.marketAssessments.marketAssessment4.name;
            this.markets.market3.attractiveCriteria.attractiveCriteria5.name = this.marketAssessments.marketAssessment5.name;
        },
        computed : {
            img () {
                return require('./../../assets/images/segmenticon.png');
            }
        },
        data(){
            return {
                market: '',
                marketAssessments: this.$store.getters.marketAssessments,
                markets: {}
            }
        },
        methods: {
            next() {
                this.$store.dispatch('updateMarkets', this.markets);
                this.$router.push('/marketsEvaluation');
            },
            getFactorName(i) {
                const factorName = this.markets[this.market].attractiveCriteria['attractiveCriteria'+i].name;
                return AttractiveCriteria.AttractivenessCriteria.filter((factor) => {
                    return factor.name === factorName
                })[0].label;
            },
            getFactorImg(i) {
                const factorName = this.markets[this.market].attractiveCriteria['attractiveCriteria'+i].name;
                return require('./../../assets/images/attractivenessCriteria/'+factorName+'.png');
            }
        }
    }
</script>
