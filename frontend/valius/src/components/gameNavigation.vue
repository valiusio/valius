<template>

    <div class="game-navigation">
        <div class="container container--lg">

            <div class="game-navigation__current-level">
                <img :src=" backgroundImg " class="game-navigation__icon">
                Start

                <div class="game-navigation__actions-container">
                    <profile-navigation
                        v-for=" (level , key)  in levels[0][currentLevel].subLevels "
                        :type="key"
                        :rating="level.rating"
                        :locked="level.locked"
                        link="user-profile"
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

            isLevelCompleted () {
               return this.levels[0][this.currentLevel].completed;
            }
        },
        methods: {

            goToGameMap(){
                this.$router.push("/game-map");
            }
        }
    }
</script>

