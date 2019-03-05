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

                <div class="row" v-for="i in 5">
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import informationBanner from './../../components/InformationBanner';
    import appSlider from './../../components/Vslider';

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
            this.markets[this.market].attractiveCriteria.attractiveCriteria1.name = this.marketAssessments.marketAssessment1.name;
            this.markets[this.market].attractiveCriteria.attractiveCriteria2.name = this.marketAssessments.marketAssessment2.name;
            this.markets[this.market].attractiveCriteria.attractiveCriteria3.name = this.marketAssessments.marketAssessment3.name;
            this.markets[this.market].attractiveCriteria.attractiveCriteria4.name = this.marketAssessments.marketAssessment4.name;
            this.markets[this.market].attractiveCriteria.attractiveCriteria5.name = this.marketAssessments.marketAssessment5.name;
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
                markets: this.$store.getters.markets
            }
        },
        methods: {
            next() {
                this.$router.push('/importanceOfCriteria');
            }
        }
    }
</script>
