<template>

    <div class="game-navigation">
        <div class="container container--lg">

            <div class="game-navigation__current-level">
                <img src="../assets/images/gameNavigation/level1/start.png" class="game-navigation__icon">
                Start


                <div class="game-navigation__actions-container">
                    <profile-navigation
                        type="user"
                        rating="0"
                        :locked="false"

                    />
                    <profile-navigation
                        type="organization"
                        rating="0"
                        :locked="true"
                    />
                    <profile-navigation
                        type="product"
                        rating="0"
                        :locked="true"
                    />
                </div>
            </div>

        </div>
    </div>

</template>



<script>

    import router from "../router";
    import ProfileNavigation from "./../components/ProfileNavigation.vue";

    export default {
        name: 'GameNavigation',
        props: [

        ],
        data(){
            return {

            }
        },
        created(){
        },
        components:{
            "ProfileNavigation" : ProfileNavigation
        },
        methods:{

        }
    }
</script>

