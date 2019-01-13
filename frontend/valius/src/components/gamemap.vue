<template>
    <div class="game-map">


        <div class="container container--exlg">
            <div class="game-map__map">
                <img :src="getPic()" />

                <img
                    src="../assets/images/gamemapings/horse.png"
                    :class=" !startAnimation ? `horse horse__position--${previusStatus}` : `horse horse__position--${currentStatus}`"
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
                allLevels : [
                    "start", "landscapeIdentification", "marketAssessment", "productAssessment" , "readyToStrategize"
                ],
                previusStatus : '',
                currentStatus : this.$store.getters.currentLevel,
                startAnimation :false
            }
        },
        components:{
            "InformationBanner" : InformationBanner
        },
        methods:{
            getPic() {
                return require('../assets/images/gamemapings/game-map__status--' + this.currentStatus + '.png');
            },
            action(name) {
                !this.$store.getters.levels[0][name].locked &&  this.$router.push('/game-navigation');
            }
        },
        created () {

            ( this.currentStatus == 'start')
                ? this.previusStatus = this.currentStatus
                : this.previusStatus = this.allLevels[ this.allLevels.indexOf(this.currentStatus) - 1  ];

            setTimeout( () => {
                this.startAnimation = true;
            }, 3000)
        }
    }
</script>

