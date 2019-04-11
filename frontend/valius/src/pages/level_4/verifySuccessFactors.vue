<template>
    <div class="container container--exlg">
        <information-banner
            type="success"
        >
            <h1>Τώρα μπορείς να υποβάλλεις τις επιλογές σου!</h1>
            <p>Μπορείς ακόμα να αλλάξεις κάποιο από τα παρακάτω στοιχεία, μόλις υποβληθούν δεν θα μπορείς
                να κάνεις άλλες αλλαγές.</p>
        </information-banner>

        <div class="market-categories__container">
            <div
                v-for="i in customersPurchasingCriteria"
                class="market-categories__row"
            >
                <img :src="getFactorImg(i)">

                <span>
                    {{ getByingCriteriaLabel(i) }}
                </span>
            </div>
        </div>
        <button class="back" @click="back">
            Go back to edit
        </button>
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
    import { IntangibleFactors } from './../../services/IntangibleFactorsService';

    export default {
        name: 'verifySuccessFactors',
        props: [

        ],
        data() {
            return {
                selectedMarketAssessments : this.$store.getters.marketAssessments,
                levels: this.$store.getters.levels,
                customersPurchasingCriteria : this.$store.getters.customersPurchasingCriteria
            }
        },
        computed:{

        },
        components:{
            "information-banner" : InformationBanner
        },
        methods: {
            getFactorImg(i) {
                return require(`./../../assets/images/IntangibleFactors/icons/${i}.png`)
            },
            getByingCriteriaLabel(criteria) {
                return IntangibleFactors.filter(el => {
                    return el.name === criteria;
                })[0].label;
            },
            nextPage() {
                this.levels.productAssessment.subLevels.successFactors.completed = true;
                this.levels.productAssessment.subLevels.successFactors.rating = 3;
                this.levels.productAssessment.subLevels.customersSample.locked = false;
                this.$store.dispatch('updateLevels', this.levels).then(()=>{
                    this.$router.push('/game-navigation/productAssessment');
                });
            },
            back() {
                this.$router.push('/successFactors');
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
            margin-bottom: 20px;

            img {
                width: 100px;
                height: 100px;
                margin-right: 20px;
            }

            span {
                display: flex;
                flex: 3;
                width: 300px;
                height: 70px;
                border-radius: 10px;
                justify-content: center;
                align-items: center;
                background-color: #CCEA82;
                font-style: italic;
            }
        }
    }
    .back {
        width: 120px;
        height: 40px;
        margin: 0 auto 0 0;
        display: block;
        outline: none;
        background-color: rgba(210,51,37,0.95);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        cursor: pointer;
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
