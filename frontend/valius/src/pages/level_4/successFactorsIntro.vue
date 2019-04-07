<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">
                        Η αξιολόγηση του προϊόντος σου έναντι των
                        άλλων προϊόντων είναι απαραίτητη για τη
                        δημιουργία ανταγωνιστικών στρατηγικών
                    </h1>

                    <h2 class="market-assassment-intro__subtitle">O ρόλος των κρίσιμων παραγόντων επιτυχίας</h2>

                    <p>
                        Για έναν ολοκληρωμένο στρατηγικό σχεδιασμό, είναι <b>σημαντικό μια επιχείρηση
                        να γνωρίζει πως τον προϊόν της ανταγωνίζεται στην αγορά,</b> πριν αποφασίσει πού
                        να εστιάσει τις ενεργείς marketing και τα διαθέσιμους πόρους της.
                    </p>
                    <p>
                        Ωστόσο, ανεξάρτητα από το πόσο ικανή είναι μια επιχείρηση για την κάλυψη των
                        αναγκών των διαφόρων τμημάτων της αγοράς, <b>οι πελάτες είναι αυτοί που θα
                        πάρουν την τελική τους απόφαση με βάση ποια προϊόντα, είναι κατά την
                        άποψή τους, «καλύτερα».</b>
                    </p>
                    <p>
                        Επομένως, η αξιολόγηση της ανταγωνιστικότητα των διαφόρων προϊόντων πρέπει
                        να βασιστεί στα αγοραστικά κριτήρια των πελατών.
                    </p>

                    <p>
                        Τα πιο σημαντικά αγοραστικά κριτήρια των πελατών είναι και αυτά που
                        καθορίζουν και το ‘τελικό’ αποτέλεσμα και αποτελούν τους κρίσιμους παράγοντες
                        επιτυχίας για μια επιχείρηση!
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
        name: 'successFactorsIntro',
        props: [

        ],
        computed : {
            img () {
                return require('./../../assets/images/successFactors.png');
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/successFactors');
            }
        }
    }
</script>
<style scoped>
    .container {
        border-color: green;
    }

    h1 {
        font-size: 28px;
        line-height: 28px;
    }
    h2 {
        font-size: 22px;
        color: green;
    }
    img {
        width: 300px;
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
