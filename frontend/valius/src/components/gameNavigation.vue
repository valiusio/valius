<template>

    <div class="game-navigation">
        <div class="container container--lg">

            <div class="game-navigation__current-level">
                <img src="../assets/images/gameNavigation/level1/start.png" class="game-navigation__icon">
                Start


                <div class="game-navigation__actions-container">
                    <profile-navigation
                        type="user"
                        :rating="levels[0].start.subLevels.userProfile.rating"
                        :locked="levels[0].start.subLevels.userProfile.locked"
                        link="user-profile"
                    />
                    <profile-navigation
                        type="organization"
                        :rating="levels[0].start.subLevels.organizationProfile.rating"
                        :locked="levels[0].start.subLevels.organizationProfile.locked"
                        link="business-profile"
                    />
                    <profile-navigation
                        type="product"
                        :rating="levels[0].start.subLevels.productProfile.rating"
                        :locked="levels[0].start.subLevels.productProfile.locked"
                        link="product-profile"
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

