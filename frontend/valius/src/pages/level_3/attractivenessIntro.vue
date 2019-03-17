<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Ώρα να αξιολογήσεις την
                        ελκυστικότητα της αγοράς σου!</h1>

                    <h2 class="market-assassment-intro__subtitle">Παράμετροι αξιολόγησης της αγοράς</h2>

                    <p>
                        Για κάθε ένα από τα τμήματα της αγοράς, θα πρέπει να
                        βαθμολογήσεις με υψηλά, μεσαία και χαμηλά scores το κάθε
                        κριτήριο ελκυστικότητας.
                    </p>
                    <p>
                        Όμως πριν αξιολογήσεις τα τμήμα της αγοράς σου είναι σημαντικό να
                        σκεφτείς τι σημαίνει υψηλή, μεσαία ή χαμηλή βαθμολογία για εσένα;
                    </p>
                    <p>
                        <b>Ένα υψηλό score (8 έως 10) σχετίζεται με μια θετική επίδραση ενός
                            κριτηρίου στην ελκυστικότητα της αγοράς.
                        </b>
                    </p>
                    <p>
                        Π.χ. υψηλή κερδοφορία ενός τμήματος της αγοράς ισοδυναμεί με ένα
                        υψηλό σκορ.
                    </p>
                    <p>
                        Αντίθετα για <b>παράγοντες που μειώνουν την ελκυστικότητα της
                        αγοράς, η βαθμολόγια θα πρέπει να ειναι χαμηλή (1 έως 3)</b>
                    </p>
                    <p>
                        π.χ. αν η ένταση του ανταγωνισμού είναι υψηλή αυτό θα έχει αρνητικό
                        αντίκτυπο στην ελκυστικότητα το οποίο ισοδυναμεί με χαμηλό σκορ
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
        width: 550px;
    }

    .column--left {
        flex: 3;
    }

    .column--right {
        flex: 2;
    }
    .warning {
        color: red;
    }

    button {
        margin: 20px auto 10px auto;
    }
</style>
