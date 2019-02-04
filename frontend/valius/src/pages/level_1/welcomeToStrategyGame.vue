<template>

    <div class="welcome-page">
        <div class="container container--lg">
            <h2 class="welcome-page__header">Καλώς ήρθες στο «παιχνίδι» στρατηγικής!</h2>


            <div class="welcome-page__description-container">
                <div class="welcome-page__description">
                    <p class="welcome-page__paragraph--welcome-to-strategy">
                        Το Valius μπορεί να σε βοηθήσει να δομήσεις τις ιδέες σου,
                        να αναλύσεις τα δεδομένα σου και να λάβεις
                        ολοκληρωμένες προτάσεις στρατηγικής marketing!
                    </p>
                </div>
                <div class="welcome-page__image  welcome-page__image--strategy">
                    <img src="../../assets/images/mountain.png">
                </div>
            </div>

            <button class="welcome-page__button" v-on:click="nextPage">
                Next
            </button>
        </div>

    </div>

</template>



<script>

    export default {
        name: 'welcomeToStrategy',
        props: {

        },
        data(){
            return {

            }
        },
        components:{

        },
        methods:{
            nextPage() {
                this.$router.push("/how-it-works")
            }

        }
    }
</script>

