<template>
    <div class="pyramid-game container container--exlg">

        <information-banner
            type="success"
        >
            <h1>Για την επιλογή των παραγόντων επιτυχίας αρκεί να χρησιμοποιήσεις
                την πυραμίδα με τα αγοραστικά κριτήρια των πελατών σου!
            </h1>

            <p>
                <b>Eπίλεξε τους τέσσερεις (4) παράγοντες επιτυχίας που πιστεύεις ότι κρίνουν περισσότερο τις
                    αποφάσεις των τμημάτων της αγοράς σου.
                </b>
            </p>
        </information-banner>

        <div class="pyramid-game__wrapper">
            <div class="pyramid-game__container">

                <div class="column">
                    <div class="pyramid-game__personal-pyramid">
                        <img
                            draggable="true"
                            class="md-image pyramid-game__pyramidBackground"
                            :src="pyramidImg"
                        >
                        <template v-for="(i,key) in pyramicIntangibleFactors">
                            <div
                                class="pyramid-game__selected-item"
                                :class= " 'pyramid-game__selected-item--' + (key + 1) "
                                @click="selectItem(i)"
                            >
                                <img
                                    :src="getIntangibleFactorImg(i)"
                                    draggable="false"
                                >
                                <span v-if="isItemSelected(i)" class="item-selected">
                                </span>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <span class="pyramid-game__game-subtitle">The Value Proposition Pyramid</span>
            <button
                v-if="selectionCompleted"
                class="pyramid-game__next-level"
                @click="goToNextPage"
            >
               Next
            </button>
        </div>

    </div>

</template>



<script>
    import informationBanner from "./../../components/InformationBanner";
    import pyramidImg from "./../../assets/images/pyramid.png";
    import { IntangibleFactors } from "./../../services/IntangibleFactorsService";

    export default {
        name: 'successFactors',
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                IntangibleFactors : IntangibleFactors,
                pyramicIntangibleFactors : this.$store.getters.pyramicIntangibleFactors,
                customersPurchasingCriteria : this.$store.getters.customersPurchasingCriteria
            }
        },
        components:{
            "informationBanner" : informationBanner
        },
        computed:{
            pyramidImg() {
                return pyramidImg;
            },
            selectionCompleted() {
                return this.customersPurchasingCriteria.length === 4;
            }
        },
        methods: {
            getIntangibleFactorImg(img) {
                return require("./../../assets/images/IntangibleFactors/boxedIcons/" + img + '.png');
            },
            selectItem(item) {
                if(this.customersPurchasingCriteria.indexOf(item) >= 0 ) {
                    let indexOfItem = this.customersPurchasingCriteria.indexOf(item);
                    this.customersPurchasingCriteria.splice(indexOfItem, 1);
                }else {
                    this.customersPurchasingCriteria.length <= 3 &&  this.customersPurchasingCriteria.push(item)
                }
            },
            isItemSelected(item) {
                return this.customersPurchasingCriteria.indexOf(item) >=0;
            },
            goToNextPage(ev) {
                ev.preventDefault();
                this.$store.dispatch('updateCustomersPurchasingCriteria', this.customersPurchasingCriteria);
                this.$router.push('/verifySuccessFactors');
            }

        }
    }
</script>
<style lang="scss" scoped>

    .information-banner {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 14px;
            font-weight: 800;
        }
    }

    .column {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pyramid-game {
        font-size: 15px;
    }

    .item-selected {
        position: absolute;
        z-index: 3;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 2px solid white;
        background-color: yellow;
        opacity: 0.52;
        top: 0;
        left: 0;

        &:after {
            position: absolute;
            right: 0;
            top: -6px;
            content: 'x';
            background: red;
            color: white;
            border: 1px solid black;
            border-radius: 2em;
            display: inline-block;
            font-size: 12px;
            height: 20px;
            line-height: 2px;
            margin: 0 0 8px;
            padding: 7px 0 0 0;
            text-align: center;
            width: 20px;
            font-weight: 900;
        }
    }
</style>

