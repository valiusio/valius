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
                        <img class="marketEvaluationDepartment__icon":src="img">
                        <span>{{ this.markets[market].name }}</span>
                    </div>
                </div>

                <div class="row marketEvaluationDepartment__flags">
                    <span>Low (1-3)</span>
                    <span>Medium (4-7)</span>
                    <span>High (8-10)</span>
                </div>
                <div class="row element-row" v-for="i in 5">
                    <img class="marketEvaluationDepartment__factor-icon" :src="getFactorImg(i)">
                    <div class="marketEvaluationDepartment__factor">{{getFactorName(i)}}</div>
                    <app-slider
                        v-model="markets[market].attractiveCriteria['attractiveCriteria'+i].value"
                    >
                    </app-slider>
                    <div class="marketAssessment-banner">
                        {{ getAttractivenessCriteriaValue(markets[market].attractiveCriteria['attractiveCriteria'+i]) }}
                    </div>
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
    import levelupdate  from './../../services/levelUpdate';
    import greenIcon from './../../assets/images/market--green.png';
    import blueIcon from './../../assets/images/market--blue.png';
    import redIcon from './../../assets/images/market--red.png';

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
                return this.marketIcon[this.market]
            }
        },
        data(){
            return {
                market: '',
                marketAssessments: this.$store.getters.marketAssessments,
                markets: {},
                marketIcon: {
                    market1 : blueIcon,
                    market2: redIcon,
                    market3: greenIcon
                }
            }
        },
        methods: {
            next() {
                this.$store.dispatch('updateMarkets', this.markets);
                levelupdate.levelUpdate(this.$store);
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
            },
            getAttractivenessCriteriaValue(obj) {
                const name = obj.name;
                const value = obj.value;

                let valueLevel = null;
                if(value <= 3) {
                    valueLevel = 'low';
                }
                if(value >=4 && value <=7) {
                    valueLevel = 'medium';
                }
                if(value > 7) {
                    valueLevel = 'high';
                }

                if(this.marketAssessments.marketAssessment1.name === name) {
                    return this.marketAssessments.marketAssessment1.attractivenessParameters[valueLevel];
                }
                if(this.marketAssessments.marketAssessment2.name === name) {
                    return this.marketAssessments.marketAssessment2.attractivenessParameters[valueLevel];
                }
                if(this.marketAssessments.marketAssessment3.name === name) {
                    return this.marketAssessments.marketAssessment3.attractivenessParameters[valueLevel];
                }
                if(this.marketAssessments.marketAssessment4.name === name) {
                    return this.marketAssessments.marketAssessment4.attractivenessParameters[valueLevel];
                }
                if(this.marketAssessments.marketAssessment5.name === name) {
                    return this.marketAssessments.marketAssessment5.attractivenessParameters[valueLevel];
                }
            }
        }
    }
</script>
