<template>

    <div class="choose-market">
        <div class="container container--lg">
            <information-banner>
                <h1>Σε ποια αγορά ανήκουν αυτά τα τμήματα-στόχοι;</h1>
                <p>Επίλεξε μια από τις παρακάτω αγορές.</p>
            </information-banner>
            <div class="choose-market__banner">
                <div
                    class="choose-market__option-wrapper choose-market__option-wrapper--b2c"
                    @click="goTo('b2c')"
                >
                    <div class="choose-market__option option">Καταναλοτική αγορά (B2C)</div>
                </div>
                <div
                    class="choose-market__option-wrapper choose-market__option-wrapper--b2b"
                    @click="goTo('b2b')"
                >
                    <div class="choose-market__option option">Βιομηχανική αγορά (B2B)</div>
                </div>
            </div>
        </div>
    </div>

</template>



<script>
    import InformationBanner from './../../components/InformationBanner';

    export default {
        name: 'MarketFocus',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
            }
        },
        components:{
            InformationBanner: InformationBanner
        },
        computed:{
        },
        methods: {
            goTo(filter) {
                this.$router.push('/market-categories/'+filter)
            }
        }
    }
</script>

