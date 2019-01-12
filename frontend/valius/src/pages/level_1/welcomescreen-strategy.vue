<template>

    <div class="welcome-page">
        <div class="container container--lg">
            <h2 class="welcome-page__header">Did you know?</h2>


            <div class="welcome-page__description-container">
                <div class="welcome-page__description">
                    <p>Η στρατηγική λειτουργεί με τον ίδιο τρόπο, αντιπροσωπεύει το μέσο για την επίτευξη στόχων.</p>
                    <p>Η χρησιμοποίηση της στρατηγικής είναι ένας τρόπος για να διαμορφώνεις το μέλλον!</p>
                </div>
                <div class="welcome-page__image  welcome-page__image--strategy">
                    <img src="../../assets/images/strategy.png">
                </div>
            </div>

            <button class="welcome-page__button" v-on:click="nextPage">
                Next
            </button>
        </div>
    </div>

</template>



<script>

    import router from "../../router";

    export default {
        name: 'welcome-strategy',
        props: {

        },
        data(){
            return {

            }
        },
        methods:{
            nextPage() {
                this.$router.push("/start-game")
            }

        }
    }
</script>

