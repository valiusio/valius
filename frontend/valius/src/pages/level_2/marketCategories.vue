<template>

    <div class="market-categories">
        <div class="container container--lg">
            <information-banner
                type="danger"
            >
                <h1>Σε ποια αγορά ανήκουν αυτά τα τμήματα-στόχοι;</h1>
                <p>Επίλεξε μια από τις παρακάτω αγορές.</p>
            </information-banner>
        </div>


        <div
            class="market-categories__container"
            :class="'market-categories__container--'+ market "
        >
            <div class="market-categories__column">
                <span
                    v-for="category in marketCategories.slice(0, Math.floor(marketCategories.length / 2))"
                    class="market-categories__category"
                    @click="submitCategory(category)"
                >
                    {{category}}
                </span>
            </div>
            <div class="market-categories__menu"> {{ parameterTitle }} </div>
            <div class="market-categories__column">
                <span
                    v-for="category in marketCategories.slice(Math.floor(marketCategories.length / 2), marketCategories.length)"
                    class="market-categories__category"
                    @click="submitCategory(category)"
                >
                    {{category}}
                </span>
            </div>
        </div>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner'

    export default {
        name: 'marketCategories',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                selectedMarket: this.$route.params.filter,
                marketCategories : this.$store.getters.marketCategories[this.$route.params.filter],
                market: this.$route.params.filter
            }
        },
        components:{
            InformationBanner: InformationBanner
        },
        computed:{
            parameterTitle() {
                if(this.market == 'b2c') {
                    return 'Παράμετροι Καταναλωτικής Αγοράς'
                }else {
                    return 'Παράμετροι Βιομηχανικής Αγοράς'
                }
            }
        },
        methods: {
            submitCategory(category) {
                this.$store.dispatch('updateMarketCategory', category);
                this.$store.dispatch('updateSelectedMarket', this.market);
                this.$router.push('/customer-profile-intro/'+ this.market);
            }
        }

    }
</script>

