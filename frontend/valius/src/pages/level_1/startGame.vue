<template>

    <div class="welcome-page">
        <div class="container container--lg">
            <h2 class="welcome-page__header">Καλώς ήρθες στο «παιχνίδι» στρατηγικής!</h2>

            <div class="welcome-page__description-container">
                <div class="welcome-page__description">
                    <h3 class="welcome-page__subheader">Παιχνιδοποίηση διαδικασιών & ψυχολογική ροή</h3>
                    <p>«Δεν υπάρχει λόγος να πιστεύουμε πια ότι μόνο το παιχνίδι μπορεί είναι κάτι διασκεδαστικό, ενώ για παράδειγμα η εργασία πρέπει να θεωρείται κάτι μονότονο και βαρετό».</p>
                    <p>«Μόλις συνειδητοποιήσουμε ότι τα όρια μεταξύ εργασίας και παιχνιδιού είναι τεχνητά, μπορούμε να πάρουμε τον έλεγχο στην καθημερινότητα μας και να την κάνουμε πιο ζωντανή και ευχάριστη»</p>
                    <p>Mihaly Csikszentimihalyi</p>
                </div>
                <div class="welcome-page__Mihaly-container">
                    <img src="../../assets/images/Csikszentmihalyi.png">
                    <h3>Mihaly Csikszentmihalyi</h3>
                    <p>
                        Διακεκριμένος καθηγητής Ψυχολογίας και Μανατζμεντ.
                        Διέκρινε την έννοια της ψυχολογικής ροής, μια διανοητική κατάσταση όπου το άτομο,
                        επιγκεντρώνει πλήρως την προσοχή του σε μια απαιτητική δραστηριότητα χωρίς να
                        αποσπάται η προσοχή του
                    </p>
                </div>
            </div>

            <button class="welcome-page__button" v-on:click="nextPage">
                Let's Start
            </button>
        </div>

    </div>

</template>



<script>

    import router from "../../router";

    export default {
        name: 'start-game',
        props: {

        },
        data(){
            return {

            }
        },
        methods:{
            nextPage() {
                this.$router.push("/game-map");
            }

        }
    }
</script>

