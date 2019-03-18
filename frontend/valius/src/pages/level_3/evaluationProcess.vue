<template>
    <div class="evaluationProcess">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Για τα κριτήρια ελκυστικότητας που επέλεξες, προτείνονται υψηλές,
                    μεσαίες & χαμηλές τιμές για βαθμολογίες από το 1 έως το 10.</h1>
                <p>Μπορείς να αλλάξεις τα προτεινόμενα παραδείγματα για τις ποσοτικές τιμές, καθώς
                    πρέπει να στηρίζονται σε δεδομένα της δικής σου αγοράς.</p>
            </information-banner>

            <div class="evaluationProcess__container">
                <div class="evaluationsTable">
                    <table style="width:100%">
                        <thead>
                            <tr>
                                <th>Κριτήρια ελκυστικότητας των τμημάτων της αγοράς</th>
                                <th>Xαμηλές τιμές (1-3)</th>
                                <th>Μέτριες τιμές (4-7)</th>
                                <th>Υψηλές τιμές (10-8)</th>
                            </tr>
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
                                    <input class="evaluationsTable__low"
                                           v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.low"
                                    >
                                </td>
                                <td>
                                    <input class="evaluationsTable__medium"
                                            v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.medium"
                                    >
                                </td>
                                <td>
                                    <input class="evaluationsTable__high"
                                        v-model="marketAssessments['marketAssessment'+i].attractivenessParameters.high"
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
        created() {
            this.marketAssessments =  this.$store.getters.marketAssessments;
            for(let i=1; i<=5; i++) {
                if(this.marketAssessments["marketAssessment"+i].attractivenessParameters.low === '') {
                    this.marketAssessments["marketAssessment"+i].attractivenessParameters.low = this.getDefaultValue(i,'low');
                }
                if(this.marketAssessments["marketAssessment"+i].attractivenessParameters.medium === '') {
                    this.marketAssessments["marketAssessment"+i].attractivenessParameters.medium = this.getDefaultValue(i,'medium');
                }
                if(this.marketAssessments["marketAssessment"+i].attractivenessParameters.high === '') {
                    this.marketAssessments["marketAssessment"+i].attractivenessParameters.high = this.getDefaultValue(i,'high');
                }
            }
        },
        data(){
            return {
                marketAssessments :  ''
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
            getDefaultValue(i, placeHolderType) {
              const factorName = this.marketAssessments["marketAssessment"+i].name;
              const defaultValue = AttractivenessCriteria.AttractivenessCriteria.filter((factor) => {
                  return factor.name === factorName
              })[0].defaultValue[placeHolderType];

              return defaultValue;
            },
            next() {
                this.$store.dispatch('updateMarketAssessments', this.marketAssessments);
                this.$router.push('/attractivenessIntro');
            }
        }
    }
</script>
<style scoped type="scss">
    .information-banner__text h1{
        font-size: 18px;
    }
    .information-banner__text p{
        font-size: 14px;
    }
</style>
