<template>
    <div class="container container--exlg">
        <information-banner
            type="success"
        >
            <h1>Σε ποια παράμετρο βασίστηκες για την τμηματοποίηση της αγοράς σου;</h1>
            <p>Επίλεξε μία από τις παρακάτω παραμέτρους.</p>
        </information-banner>


        <div class="market-categories__container">
            <div
                v-for="i in getSelectedMarketAssessments()"
                class="market-categories__row"
            >
                <img :src="getMarketAssessmentImgFromName(i)">
                <span>
                    {{ getAttractivenessCriteriaLabelByName(i) }}
                </span>
            </div>
        </div>

        <button
            class="submit"
            @click="nextPage()"
        >
            Submit
        </button>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner';
    import AttractivenessCriteriaService from './../../services/AttractivenessCriteria';

    export default {
        name: 'verifyAttractivenessCriteria',
        props: [

        ],
        data() {
            return {
                selectedMarketAssessments : this.$store.getters.marketAssessments,
                levels: this.$store.getters.levels
            }
        },
        computed:{

        },
        components:{
            "information-banner" : InformationBanner
        },
        methods: {
            getSelectedMarketAssessments() {
                let selectedMarketAssessments = [];
                let marketKeys = Object.keys(this.selectedMarketAssessments);
                marketKeys.map( (key) => {
                    selectedMarketAssessments.push(this.selectedMarketAssessments[key].name);
                });

                return selectedMarketAssessments;
            },
            getAttractivenessCriteriaLabelByName(name) {
                return AttractivenessCriteriaService.AttractivenessCriteria.filter((el) => {
                    return el.name === name;
                })[0].label;
            },
            getMarketAssessmentImgFromName(assessment) {
                return require(`./../../assets/images/attractivenessCriteria/${assessment}.png`);
            },
            nextPage() {
                this.levels.productAssessment.subLevels.successFactors.completed = true;
                this.levels.productAssessment.subLevels.successFactors.rating = 3;
                this.levels.productAssessment.subLevels.customersSample.locked = false;
                this.$store.dispatch('updateLevels', this.levels).then(()=>{
                    this.$router.push('/game-navigation/productAssessment');
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .information-banner {
        font-size: 10px;
    }

    .market-categories {
        &__container {
            width: 400px;
            min-height: 400px;
            display: flex;
            flex-direction: column;
        }

        &__row {
            display: flex;

            img {
                width: 50px;
                height: 50px;
                margin-right: 20px;
            }

            span {
                display: flex;
                flex: 3;
                width: 300px;
                height: 50px;
                border-radius: 10px;
                justify-content: center;
                align-items: center;
                background-color: #CCEA82;
                font-style: italic;
            }
        }
    }
    .submit {
        width: 200px;
        height: 50px;
        margin: 50px auto;
        display: block;
        outline: none;
        background-color: #17B5F0;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
    }
</style>
