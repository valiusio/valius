<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Ώρα να αξιολογήσεις την ελκυστικότητα της αγοράς!</h1>

                    <h2 class="market-assassment-intro__subtitle">Διαδικασία αξιολόγησης</h2>

                    <p>
                        Για κάθε ένα από τα τμήματα της αγοράς και με βάση τις
                        παραμέτρους που έθεσες, <b>θα πρέπει να δώσεις μια
                        βαθμολογία σε μια κλίμακα του 10.</b>
                    </p>
                    <p>
                        Η μέθοδος βαθμολόγησης λειτουργεί παρόμοια για
                        παράγοντες που έχουν θετικό αντίκτυπο στην ελκυστικότητα
                        της αγοράς. π.χ. υψηλή κερδοφορία ισοδυναμεί με ένα
                        υψηλό σκορ
                    </p>
                    <p>
                        Για παράγοντες που μειώνουν την ελκυστικότητα της
                        αγοράς, η διαδικασία βαθμολόγησης λειτουργεί
                        αντίστροφα. π.χ. η υψηλή ένταση του ανταγωνισμού
                        ισοδυναμεί με χαμηλό σκορ και αντίστροφα.
                    </p>
                </div>
                <div class="column--right">
                    <img :src="img" class="image">
                </div>
            </div>


            <button @click="next">Got it!</button>
        </div>
    </div>
</template>



<script>
    export default {
        name: 'attractivenessIntro',
        props: [

        ],
        computed : {
            img () {
                return require('./../../assets/images/tools.png');
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/marketsEvaluation');
            }
        }
    }
</script>
<style scoped>
    h1 {
        font-size: 25px;
    }
    img {
        width: 250px;
        transform: rotate(-115deg);
    }
</style>
