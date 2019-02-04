<template>

    <div class="welcome-page">
        <div class="container container--lg">
            <h2 class="welcome-page__header">Ήξερες ότι..</h2>


            <div class="welcome-page__description-container">
                <div class="welcome-page__description">
                    <p>Ο Βάλιος ήταν ένα από τα αθάνατα άλογα του Αχιλλέα, ενός από τους καλύτερους πολεμιστές στην Αρχαία Ελληνική Μυθολογία.</p>
                    <p>Ο Βάλιος ήταν για εκείνον το μέσο, για να πετύχει σημαντικές νίκες στη μάχη.</p>
                </div>
                <div class="welcome-page__image  welcome-page__image--strategy">
                    <img src="../../assets/images/horse.png">
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
        name: 'Login',
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
                this.$router.push("/welcome-strategy")
            }

        }
    }
</script>

