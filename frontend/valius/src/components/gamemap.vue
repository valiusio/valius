<template>
    <div class="game-map">
        <div class="container container--exlg">
            <div class="game-map__map">
                <img :src="getPic()" />
                <img
                    src="../assets/images/gamemapings/horse.png"
                    :class="`horse horse__position--${currentStatus}`"
                >
                <div class="game-map__link  game-map__link--start" @click="action('start')">Start</div>
                <div class="game-map__link  game-map__link--landscapeIdentification" @click="action('landscapeIdentification')">Landscape Identification</div>
                <div class="game-map__link  game-map__link--marketAssessment" @click="action('marketAssessment')">Market Assessment</div>
                <div class="game-map__link  game-map__link--productAssessment" @click="action('productAssessment')">Product <br> Assessment</div>
                <div class="game-map__link  game-map__link--readyToStrategize" @click="action('readyToStrategize')">Ready To Strategize</div>
            </div>
        </div>
    </div>
</template>


<script>
    import router from "../router";
    import InformationBanner from "./InformationBanner.vue";

    export default {
        name: 'GameMap',
        props: {

        },
        data(){
            return {
                currentStatus : this.$store.getters.currentLevel,
            }
        },
        components:{
            "InformationBanner" : InformationBanner
        },
        computed: {
        },
        methods:{
            getPic() {
                return require('../assets/images/gamemapings/game-map__status--' + this.currentStatus + '.png');
            },
            action(name) {
                this.$store.getters.levels[name]
                && !this.$store.getters.levels[name].locked
                &&  this.$router.push('/game-navigation/'+ name);
            }
        }
    }
</script>

