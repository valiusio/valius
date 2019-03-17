<template>
    <div class="select-marketAssesments">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Ας ξεκινήσουμε τη διαδικασία αξιολόγησης της αγοράς σου.</h1>
                <p>Επίλεξε τα κριτήρια που θέλεις να χρησιμοποιήσεις για την ελκυστικότητας των
                    τμημάτων της αγοράς που έχεις επιλέξει.</p>
            </information-banner>

            <div class="select-marketAssesments__container">
               <div class="selected-assessments">
                    <div v-for="factor in selectedAttractiveCriteria" class="selected-assessments__item">
                        <span class="icon"></span>
                        <span class="label">{{factor.label}}</span>
                    </div>
                   <div v-for="factor in (5 - selectedAttractiveCriteria.length)" class="selected-assessments__item">
                        <span class="icon"></span>
                        <span class="label"></span>
                    </div>
               </div>
               <div class="market-assessments">
                   <span class="market-assessments__helper">Mπορείς να επιλέξεις έως (5) κριτήρια ελκυστικότητας από τις παρακάτω
                        διαθέσιμες κατηγορίες (segment, competitive, social criteria)
                   </span>
                   <div class="market-assessments__navigation">
                        <div
                            class="market-assessments__category"
                            :class="isSelected('segmentFactors') ? 'market-assessments__category__selected': ''"
                            @click="select('segmentFactors')"
                        >
                            <img :src="segmentFactorImg">
                            <span>Segment Criteria</span>
                        </div>
                       <div
                           class="market-assessments__category"
                           :class="isSelected('competitiveFactors') ? 'market-assessments__category__selected': ''"
                           @click="select('competitiveFactors')"
                       >
                           <img :src="competitiveFactorsImg">
                           <span>Competitive Criteria</span>
                       </div>
                       <div
                           class="market-assessments__category"
                           :class="isSelected('socialFactors') ? 'market-assessments__category__selected': ''"
                           @click="select('socialFactors')"
                       >
                           <img :src="socialFactorImg">
                           <span>Social Criteria</span>
                       </div>
                   </div>
                   <div class="market-assessments__elements">

                       <div
                        v-for="factor in getFilteredCriteria"
                        class="market-assessments__item"
                        :class="isFactorSelected(factor) && 'market-assessments__item--selected'"
                        @click="handleFactorAction(factor)"
                       >
                           <img :src="getFactorImg(factor.name)">
                           <span>{{factor.label}}</span>
                       </div>
                   </div>
               </div>
            </div>

            <button @click="next" v-if="selectedAttractiveCriteria.length === 5" class="btn-submit">
                Next
            </button>
        </div>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner'
    import segmentFactorImg from './../../assets/images/attractivenessCriteria/segmentFactors.png'
    import socialFactorImg from './../../assets/images/attractivenessCriteria/socialFactors.png'
    import competitiveFactorsImg from './../../assets/images/attractivenessCriteria/competitiveFactors.png'
    import AttractivenessCriteria from './../../services/AttractivenessCriteria';

    export default {
        name: 'SelectMarketAssessments',
        props: [

        ],
        components: {
            InformationBanner
        },
        computed: {
          getFilteredCriteria() {
              return this.filteredCriteria();
          }
        },
        data(){
            return {
                activeFactor : 'segmentFactors',
                segmentFactorImg,
                socialFactorImg,
                competitiveFactorsImg,
                marketAssessments : this.$store.getters.marketAssessments,
                selectedAttractiveCriteria : this.$store.getters.selectedAttractiveCriteria,
                levels : this.$store.getters.levels
            }
        },
        methods: {
            filteredCriteria() {
                return AttractivenessCriteria.AttractivenessCriteria.filter((factor) => {
                    return factor.category === this.activeFactor
                });
            },
            isSelected(factor) {
                return factor === this.activeFactor
            },
            select(factor) {
                this.activeFactor = factor;
            },
            getFactorImg(name) {
                return require('./../../assets/images/attractivenessCriteria/' + name +'.png');
            },
            handleFactorAction(factor) {

                if(this.isFactorSelected(factor)) {
                    this.selectedAttractiveCriteria = this.selectedAttractiveCriteria.filter((f) => { return f.name !== factor.name});
                }else {
                    this.selectedAttractiveCriteria.length < 5 && this.selectedAttractiveCriteria.push(factor)
                }
            },
            isFactorSelected(factor) {
                return this.selectedAttractiveCriteria.filter((f) => {
                    return f.name === factor.name
                }).length === 1
            },
            next() {
                this.marketAssessments.marketAssessment1.name = this.selectedAttractiveCriteria[0].name;
                this.marketAssessments.marketAssessment2.name = this.selectedAttractiveCriteria[1].name;
                this.marketAssessments.marketAssessment3.name = this.selectedAttractiveCriteria[2].name;
                this.marketAssessments.marketAssessment4.name = this.selectedAttractiveCriteria[3].name;
                this.marketAssessments.marketAssessment5.name = this.selectedAttractiveCriteria[4].name;

                this.levels.marketAssessment.subLevels.attractivenessCriteria.completed = true;
                this.levels.marketAssessment.subLevels.attractivenessCriteria.rating = 3;
                this.levels.marketAssessment.subLevels.importanceOfCriteria.locked = false;
                this.$store.dispatch('updateMarketAssessments', this.marketAssessments);
                this.$store.dispatch('updateSelectedAttractiveCriteria', this.selectedAttractiveCriteria);
                this.$router.push('/game-navigation/marketAssessment');
            }
        }
    }
</script>
