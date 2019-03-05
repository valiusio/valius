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
                    <div v-for="assessment in selectedAssessments" class="selected-assessments__item">
                        <span class="icon"></span>
                        <span class="label">{{assessment.label}}</span>
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
                        class="market-assessments__item"
                        :class="isFactorSelected(factor) && 'market-assessments__item--selected'"
                        v-for="factor in filteredFactors().factors"
                        @click="handleFactorAction(factor)"
                       >
                           <img :src="getFactorImg(factor.name)">
                           <span>{{factor.label}}</span>
                       </div>

                   </div>
               </div>
            </div>

            <button @click="next" v-if="selectedAssessments.length == 5" class="btn-submit">
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
        created() {
            const allMarketAssessments = this.$store.getters.marketAssessments;
            const allFactors =[
                ...AttractivenessCriteria.AttractivenessCriteria.segmentFactors.factors,
                ...AttractivenessCriteria.AttractivenessCriteria.socialFactors.factors,
                ...AttractivenessCriteria.AttractivenessCriteria.competitiveFactors.factors,
            ];
            this.selectedAssessments = allFactors.filter((factor)=>{
                return (
                    factor.name == allMarketAssessments.marketAssessment1.name ||
                    factor.name == allMarketAssessments.marketAssessment2.name ||
                    factor.name == allMarketAssessments.marketAssessment3.name ||
                    factor.name == allMarketAssessments.marketAssessment4.name ||
                    factor.name == allMarketAssessments.marketAssessment5.name
                );
            })
        },
        data(){
            return {
                activeFactor : 'segmentFactors',
                segmentFactorImg,
                socialFactorImg,
                competitiveFactorsImg,
                marketAssessments : this.$store.getters.marketAssessments,
                selectedAssessments : [],
                levels : this.$store.getters.levels
            }
        },
        methods: {
            filteredFactors() {
                return AttractivenessCriteria.AttractivenessCriteria[this.activeFactor]
            },
            isSelected(str) {
                return str == this.activeFactor
            },
            select(str) {
                this.activeFactor = str;
            },
            getFactorImg(name) {
                return require('./../../assets/images/attractivenessCriteria/' + name +'.png');
            },
            handleFactorAction(factor) {
                this.selectedAssessments.indexOf(factor) == -1
                ? this.selectedAssessments.length < 5 && this.selectedAssessments.push(factor)
                : this.selectedAssessments.splice(this.selectedAssessments.indexOf(factor), 1)
            },
            isFactorSelected(factor) {
                return this.selectedAssessments.indexOf(factor) >= 0
            },
            next() {
                this.marketAssessments.marketAssessment1.name = this.selectedAssessments[0].name;
                this.marketAssessments.marketAssessment2.name = this.selectedAssessments[1].name;
                this.marketAssessments.marketAssessment3.name = this.selectedAssessments[2].name;
                this.marketAssessments.marketAssessment4.name = this.selectedAssessments[3].name;
                this.marketAssessments.marketAssessment5.name = this.selectedAssessments[4].name;

                this.levels.marketAssessment.subLevels.attractivenessCriteria.completed = true;
                this.levels.marketAssessment.subLevels.attractivenessCriteria.rating = 3;
                this.levels.marketAssessment.subLevels.importanceOfCriteria.locked = false;
                this.$store.dispatch('updateMarketAssessments', this.marketAssessments);
                this.$router.push('/game-navigation');
            }
        }
    }
</script>
