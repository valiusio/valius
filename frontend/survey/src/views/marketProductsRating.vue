<template>
    <div class="container container--exlg">
        <information-banner
            type="blue"
        >
            <h1>Με βάση αυτά τα στοιχεία, αξιολογήστε τα διάφορα προϊόντα της αγοράς</h1>
        </information-banner>

        <div class="wrapper">
            <div class="criteria-container">
                <span>Κάνε κλικ σε ένα από τα παρακάτω κριτήρια για να ξεκινήσεις</span>
                <div v-for="criteria in Object.keys(state.productProfile.criteria)"
                     class="criteria-btn"
                     :class="isProductRated(state.productProfile.criteria[criteria]) && 'criteria-btn--disabled'"
                    @click="rateProduct(state.productProfile.criteria[criteria].name)"
                >
                    {{state.productProfile.criteria[criteria].label}}
                </div>
            </div>
        </div>

        <button v-if="isLevelCompleted" @click="next">
            Επόμενο
        </button>
    </div>
</template>

<script>
    import informationBanner from '../components/InformationBanner';
    import httpService from '../httpService';

    export default {
        name: 'marketProductsRating',
        components: {
            informationBanner: informationBanner
        },
        data() {
            return {
                state: this.$store.getters.state
            }
        },
        computed: {
            isLevelCompleted() {
                return this.isProductRated(this.state.productProfile.criteria[1])
                && this.isProductRated(this.state.productProfile.criteria[2])
                && this.isProductRated(this.state.productProfile.criteria[3])
                && this.isProductRated(this.state.productProfile.criteria[4])
            }
        },
        methods: {
            rateProduct(name) {
                this.$router.push('/productRating/'+name);
            },
            isProductRated(product) {
                return product.productsBrandsAttractiveness[1].value > 0 &&
                       product.productsBrandsAttractiveness[2].value > 0 &&
                       product.productsBrandsAttractiveness[3].value > 0 &&
                       product.productsBrandsAttractiveness[4].value > 0
            },
            next() {
                this.state.level++;
                httpService.post('/survey/saveSurvey',this.state);
                this.$store.dispatch('state', this.state).then(() => {
                    this.$router.push('/completeSurvey');
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 25px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        width: 900px;
        margin: 100px auto 0 auto;
    }

    .criteria-container {
        margin: 0 auto 0 auto;
        width: 400px;

        span {
            text-align: center;
            display: block;
            color: gray;
            margin: 0 0 40px 0;
            font-size: 14px;
        }

        .criteria-btn {
            border-radius: 4px;
            text-align: center;
            color: white;
            padding:  10px;
            font-size: 22px;
            background-color: #177cc5;
            margin: 0 0 15px 0;

            &:hover {
                color: #9bd360;
                cursor: pointer;
                box-shadow: 5px 8px 20px gray;
            }

            &--disabled {
                background-color: gray;
                color: white;
                &:hover {
                    box-shadow: 0 0 0 0;
                    color: white;
                }
            }
        }
    }

    button {
        width: 200px;
        height: 50px;
        border-radius: 4px;
        background-color: #17B5F0;
        color: white;
        font-size: 18px;
        margin: 100px auto 0 auto;
        display: block;
    }
</style>
