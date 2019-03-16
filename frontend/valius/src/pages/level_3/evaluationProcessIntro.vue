<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Πριν την διαδικασία αξιολόγησης. .</h1>

                    <h2 class="market-assassment-intro__subtitle">Τιμές αξιολόγησης της αγοράς</h2>

                    <p>
                        Οι βαθμολογίες της ελκυστικότητας των τμημάτων θα πρέπει να
                        στηρίζονται σε κάποια λογική ή συγκεκριμένα δεδομένα.
                    </p>
                    <p>
                        Για να επιτευχθεί αυτό μπορούν να χρησιμοποιηθούν συγκεκριμένες
                        <b>ποσοτικές ή ποιοτικές τιμές.</b>
                    </p>
                    <p>
                        Για παράδειγμα, οι τιμές για το μέγεθος ενός τμήματος της αγοράς
                        είναι ποσοτικές και μπορούν να βασιστούν σε συγκεκριμένους
                        αριθμούς πωλήσεων ($), αγορών ή καταναλωτών.
                    </p>
                    <p>
                        Ενώ π.χ. η πολυπλοκότητα ενός τμήματος της αγοράς είναι ποιοτική
                        τιμή και μπορεί να χαρακτηριστεί ως μικρή, μεσαία, μεγάλη.
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
        name: 'evaluationProcessIntro',
        props: [

        ],
        computed : {
            img () {
                return require('./../../assets/images/circleRuller.png');
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/evaluationProcess');
            }
        }
    }
</script>
<style scoped>
    .image {
        width: 500px;
    }

    button {
        margin-top: 50px;
    }
</style>
