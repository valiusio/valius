<template>

    <div class="game-navigation">
        <div class="game-navigation__container">
            <img :src="backgroundCover" class="game-navigation__coverImg"/>

            <div class="game-navigation__level">
                <img :src=" backgroundImg">
                <span>Start</span>
            </div>

            <div class="game-navigation__actions-container">

                <profile-navigation
                    v-for="(level, key) in levels[currentLevel].subLevels "
                    :type="key"
                    :rating="level.rating"
                    :locked="level.locked"
                />
            </div>
            <button
                v-if="isLevelCompleted"
                class="game-navigation__next-level"
                @click="goToGameMap"
            >
                Next Level
            </button>
        </div>
    </div>

</template>



<script>

    import router from "../router";
    import ProfileNavigation from "./ProfileNavigation.vue";

    export default {
        name: 'GameNavigation',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel
            }
        },
        components:{
            "ProfileNavigation" : ProfileNavigation
        },
        computed:{

            backgroundImg () {
                return require("../assets/images/gameNavigation/backgroundImages/level__" + this.currentLevel + ".png");
            },
            backgroundCover () {
                return require("../assets/images/gameNavigation/covers/level__" + this.currentLevel + ".png");
            },

            isLevelCompleted () {
               return this.levels[this.currentLevel].completed;
            }
        },
        methods: {

            goToGameMap(){
                this.$store.dispatch('setCurrentLevel','landscapeIdentification');
                this.$router.push("/game-map");
            }
        }
    }
</script>

