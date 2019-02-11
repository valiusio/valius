<template>


    <div class="pyramid-game container container--exlg">

        <information-banner
            type="danger"
        >
            <h1>Ας μπούμε στη θέση των πελατών.. χτίζοντας την πυραμίδα αξίας!</h1>

            <p>
                Επέλεξε από την στήλη δεξιά τα αγοραστικά κριτήρια που πιστεύεις ότι χρησιμοποιούν οι πελάτες
                στην αγορά που δραστηριοποιείσαι!
            </p>
        </information-banner>

        <div class="pyramid-game__wrapper">
            <div class="pyramid-game__container">

                <div class="column--left">
                    <div class="pyramid-game__personal-pyramid">

                        <img
                            class="md-image pyramid-game__pyramidBackground"
                            :src="pyramidImg"
                            v-on:drop="drop"
                            v-on:dragover="gragOver"
                        >
                        <template v-for="(i,key) in pyramicIntangibleFactors">
                            <div
                                class="pyramid-game__selected-item"
                                :class= " 'pyramid-game__selected-item--' + (key + 1) "

                            >
                                <img
                                    :src="getIntangibleFactorImg(i)"
                                    draggable="false"
                                >
                                <span
                                    class="remove-item"
                                    @click="removeItem(i)"
                                >x</span>
                            </div>
                        </template>

                    </div>
                </div>
                <div class="column--right">
                    <div
                        class="pyramid-game__intangible-factors__container"
                        :class=" pyramidIsFull ? 'pyramid-game__intangible-factors__container--disabled' : ''"
                        draggable="false"
                    >
                        <template v-for="IntangibleFactor in IntangibleFactors">
                            <img
                                :src="getIntangibleFactorImg(IntangibleFactor)"
                                class="pyramid-game__intangible-factors--img"
                                draggable="true"
                                v-on:dragstart="drag($event, IntangibleFactor)"
                            >
                        </template>
                    </div>
                    <span class="pyramid-game__description">Σύρε τα παραπάνω εικονίδια ξεκινώντας από τη βάση της πυραμίδας προς την κορυφή</span>
                </div>
            </div>
            <span class="pyramid-game__game-subtitle">The Value Proposition Pyramid</span>
            <button
                class="pyramid-game__next-level"
                v-if="pyramidIsFilled"
                @click="goToNextPage"
            >
                Go to next Level
            </button>
        </div>

    </div>

</template>



<script>
    import informationBanner from "./../../components/InformationBanner";
    import pyramidImg from "./../../assets/images/pyramid.png";
    import { IntangibleFactors } from "./../../services/IntangibleFactorsService";

    export default {
        name: 'GameNavigation',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                IntangibleFactors : IntangibleFactors,
                pyramicIntangibleFactors : this.$store.getters.pyramicIntangibleFactors
            }
        },
        components:{
            "informationBanner" : informationBanner
        },
        computed:{
            pyramidImg() {
                return pyramidImg;
            },
            pyramidIsFull() {
                return this.pyramicIntangibleFactors.length >= 15;
            },
            pyramidIsFilled() {
                return this.pyramicIntangibleFactors.length >= 5;
            }
        },
        methods: {
            getIntangibleFactorImg(img) {
                return require("./../../assets/images/IntangibleFactors/" + img + '.png');
            },
            drag(event,IntangibleFactor) {
                event.dataTransfer.setData("tntangible-factor", IntangibleFactor);
            },
            drop(event) {
                event.preventDefault();
                var data = event.dataTransfer.getData("tntangible-factor");

                data && !this.pyramidIsFull
                && this.pyramicIntangibleFactors.push(data)
                && this.IntangibleFactors.splice(this.IntangibleFactors.indexOf(data) ,1);
            },
            gragOver(e) {
                e.preventDefault();
            },
            removeItem(item) {
             item
             && this.pyramicIntangibleFactors.splice(this.pyramicIntangibleFactors.indexOf(item),1)
             && this.IntangibleFactors.push(item);
            },

            goToNextPage(ev) {
                ev.preventDefault();
                this.$store.dispatch('updatePyramicIntangibleFactors', this.pyramicIntangibleFactors);
                this.levels.landscapeIdentification.subLevels.offerOfValue.completed = true;
                this.levels.landscapeIdentification.subLevels.offerOfValue.rating= 3;
                this.levels.landscapeIdentification.subLevels.competitors.locked= false;
                this.$store.dispatch('updateLevels', this.levels);
                this.$router.push('/game-navigation');
            }

        }
    }
</script>

