<template>
    <div class="evaluationProcess">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Μπορείς να θέσεις τις κατάλληλες παραμέτρους ελκυστικότητας της αγοράς;</h1>
                <p>Συμπλήρωσε όσα από τα παρακάτω κενά γνωρίζεις. Μπορείς να βασιστείς
                    σε εμπειρική γνώση αλλά και διαθέσιμα δεδομένα</p>
            </information-banner>

            <div class="evaluationProcess__container">
                <div class="evaluationsTable">
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Κριτήρια ελκυστικότητας των τμημάτων της αγοράς</th>
                                <th>Low (1-3)</th>
                                <th>Παράμετροι Medium (4-7)</th>
                                <th>High (10-8)</th>
                            </tr>
                        <tr class="space"></tr>
                        </thead>
                        <tbody>
                            <tr v-for="i in 5">
                                <td>
                                    <div class="evaluationsTable__label-container">
                                        <img class="evaluationsTable__icon" :src="getFactorImg(i)">
                                        <span class="evaluationsTable__factor">{{getFactorsLabel(i)}}</span>
                                    </div>
                                </td>
                                <td>
                                    <input v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.low"
                                           :placeholder="getPlaceholderText(i, 'low')"
                                    >
                                </td>
                                <td>
                                    <input v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.medium"
                                           :placeholder="getPlaceholderText(i, 'medium')"
                                    >
                                </td>
                                <td>
                                    <input v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.high"
                                           :placeholder="getPlaceholderText(i, 'high')"
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button @click="next" class="evaluationProcess__submit">
                    Got it!
                </button>
            </div>
        </div>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner';
    import AttractivenessCriteria from '../../services/AttractivenessCriteria';

    export default {
        name: 'evaluationProcess',
        props: [

        ],
        components: {
            InformationBanner
        },
        computed : {
        },
        data(){
            return {
                marketAssessments : this.$store.getters.marketAssessments,
            }
        },
        methods: {
            getFactorsLabel(i) {
                const factorName = this.marketAssessments["marketAssessment"+i].name;
                const factorLabel = AttractivenessCriteria.AttractivenessCriteria.filter((factor) => {
                    return factor.name === factorName
                })[0].label;

                return factorLabel
            },
            getFactorImg(i) {
               const factorName = this.marketAssessments["marketAssessment"+i].name;
               return require("./../../assets/images/attractivenessCriteria/"+factorName+'.png');
            },
            getPlaceholderText(i, placeHolderType) {
              const factorName = this.marketAssessments["marketAssessment"+i].name;
              const placeHolder = AttractivenessCriteria.AttractivenessCriteria.filter((factor) => {
                  return factor.name === factorName
              })[0].placeholders[placeHolderType];

              return placeHolder;
            },
            next() {
                this.$store.dispatch('updateMarketAssessments', this.marketAssessments);
                this.$router.push('/attractivenessIntro');
            }
        }
    }
</script>
