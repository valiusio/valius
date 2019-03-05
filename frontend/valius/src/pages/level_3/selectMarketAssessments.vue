<template>
    <div class="select-marketAssesments">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Ποια είναι τα κριτήρια ελκυστικότητας των τμημάτων της αγοράς σου;</h1>
                <p>Επέλεξε τους παράγοντες που θέλεις να εξετάσεις για την αξιολόγηση της ελκυστικότητας της αγοράς σου.</p>
            </information-banner>

            <div class="select-marketAssesments__container">
               <div class="selected-assessments">
                    <div v-for="factor in selectedAttractiveCriteria" class="selected-assessments__item">
                        <span class="icon"></span>
                        <span class="label">{{factor.label}}</span>
                    </div>
               </div>
               <div class="market-assessments">
                   <div class="market-assessments__navigation">
                        <div
                            class="market-assessments__category"
                            :class="isSelected('segmentFactors') ? 'market-assessments__category__selected': ''"
                            @click="select('segmentFactors')"
                        >
                            <img :src="segmentFactorImg">
                            <span>Segment factors</span>
                        </div>
                       <div
                           class="market-assessments__category"
                           :class="isSelected('socialFactors') ? 'market-assessments__category__selected': ''"
                           @click="select('socialFactors')"
                       >
                           <img :src="socialFactorImg">
                           <span>Social factors</span>
                       </div>
                       <div
                           class="market-assessments__category"
                           :class="isSelected('competitiveFactors') ? 'market-assessments__category__selected': ''"
                           @click="select('competitiveFactors')"
                       >
                           <img :src="competitiveFactorsImg">
                           <span>Competitive factors</span>
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
                this.selectedAttractiveCriteria.indexOf(factor) === -1
                ? this.selectedAttractiveCriteria.length < 5 && this.selectedAttractiveCriteria.push(factor)
                : this.selectedAttractiveCriteria.splice(this.selectedAttractiveCriteria.indexOf(factor), 1)
            },
            isFactorSelected(factor) {
                return this.selectedAttractiveCriteria.indexOf(factor) >= 0
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
