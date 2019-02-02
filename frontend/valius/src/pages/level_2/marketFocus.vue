<template>

    <div class="market-focus">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Ποια είναι τα τμήματα της αγοράς που θα ήθελες να εστιάσεις;</h1>
                <p>Συμπλήρωσε τα πιο σημαντικά τμήματα της αγοράς για το προϊόν σου. (key market segments)</p>
            </information-banner>
            <div class="market-focus__container">
                <img
                    :src="MarketSagmentsImg"
                    class="market-focus__img"
                >

                <input
                    class="market-focus__input market-focus__input--1"
                    type="text"
                    placeholder="e.g. Athletes"
                    v-model="market1.name"
                >
                <input
                    class="market-focus__input market-focus__input--2"
                    type="text"
                    placeholder="e.g. Games"
                    v-model="market2.name"
                >
                <input
                    class="market-focus__input market-focus__input--3"
                    type="text"
                    placeholder="e.g. Travelers"
                    v-model="market3.name"
                >
            </div>
            <button
                class="market-focus__button"
                @click="nextPage"
            >
                Got it!
            </button>
        </div>
    </div>

</template>



<script>
    import InformationBanner from './../../components/InformationBanner';
    import MarketSagmentsImg from './../../assets/images/market_segments_overview.png';

    export default {
        name: 'MarketFocus',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                markets : this.$store.getters.markets,
                MarketSagmentsImg: MarketSagmentsImg,
                market1 : {
                    name: ''
                },
                market2 : {
                    name: ''
                },
                market3 : {
                    name: ''
                },
            }
        },
        components:{
            InformationBanner: InformationBanner
        },
        computed:{
        },
        methods: {
            nextPage(event) {
                event.preventDefault();
                if(this.market1.name){
                    this.markets.push({...this.market1});
                }
                if(this.market2.name){
                    this.markets.push({...this.market2});
                }
                if(this.market3.name){
                    this.markets.push({...this.market3});
                }
                this.$store.dispatch('updateMarkets', this.markets).then(()=> {
                    this.$router.push("/choose-market");
                });
            }
        }
    }
</script>

