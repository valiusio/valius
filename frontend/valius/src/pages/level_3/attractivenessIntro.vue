<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Πριν την διαδικασία αξιολόγησης. .</h1>

                    <h2 class="market-assassment-intro__subtitle">Παράμετροι αξιολόγησης της αγοράς</h2>

                    <p>
                        Πριν από τη διαδικασία αξιολόγησης είναι σημαντικό να
                        καταλάβεις πως η βαθμολογία που θα δώσεις σε κάποιο τμήμα
                        σε σχέση με την ελκυστικότητα του, θα πρέπει να στηρίζεται σε
                        κάποια <span class="warning">λογική σκέψη</span> ή σε συγκεκριμένα δεδομένα.
                    </p>
                    <p>
                        Για να επιτευχθεί αυτό μπορείς να θέσεις συγκεκριμένες
                        παραμέτρους οι οποίες <b>μπορούν να βασίζονται σε ποσοτικές
                        ή ποιοτικές τιμές.</b>
                    </p>
                    <p>
                        Για παράδειγμα, οι παράμετροι για να αξιολογηθεί το μέγεθος
                        μιας αγοράς μπορούν να βασιστούν σε συγκεκριμένους
                        αριθμούς πωλήσεων $, οι αριθμών καταναλωτών κτλ.
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
        font-size: 28px;
    }
    img {
        width: 250px;
        transform: rotate(-115deg);
    }

    .warning {
        color: red;
    }
</style>
