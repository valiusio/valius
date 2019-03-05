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
                    @click="next('market1')"
                >
                    {{markets.market1.name}}
                </span>
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--athletes"
                    @click="next('market2')"
                >
                    {{markets.market2.name}}
                </span>
                <span
                    class="marketsEvaluation__category marketsEvaluation__category--gamers"
                    @click="next('market3')"
                >
                    {{markets.market3.name}}
                </span>
            </div>
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
            }
        },
        data(){
            return {
                markets : this.$store.getters.markets
            }
        },
        methods: {
            next(market) {
                this.$router.push('/marketsEvaluationDepartment/'+market);
            }
        }
    }
</script>
