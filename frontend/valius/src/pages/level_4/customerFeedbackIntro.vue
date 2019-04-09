<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">
                        Eίναι ώρα για την αξιολόγηση της
                        ανταγωνιστικότητας του προϊόντος σου!
                    </h1>

                    <h2 class="market-assassment-intro__subtitle">
                        Συλλέγοντας ρεαλιστικό feedback από τους πελάτες σου
                    </h2>

                    <p>
                        Οι <b>παράγοντες επιτυχίας που επέλεξες θα αξιολογηθούν τώρα
                        αποκλειστικά από τους πελάτες σου!</b>
                    </p>

                    <p>
                        Η αξιολόγηση της απόδοσης του προϊόντος έναντι των άλλων
                        σε κάθε τμήμα της αγοράς είναι απαραίτητο πριν
                        προσδιοριστεί ποιες στρατηγικές είναι κατάλληλες για την
                        επιχείρηση σου και που πως κατανέμεις τους διαθέσιμους
                        πόρους σου.
                    </p>
                    <p>
                        Η <b>συμμετοχή των πελατών σου θα δώσει μια ολοκληρωμένη
                        προσέγγιση στην στρατηγικό σχεδιασμό σου </b>και ταυτόχρονα
                        θα κάνει τους πελάτες να αισθανθούν συν-δημιουργοί αξίας
                        για τα προϊόντα της εταιρίας σου!
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
        name: 'customersFeedbackIntro',
        props: [

        ],
        computed : {
            img () {
                return require('./../../assets/images/customers.png');
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/customersInvitation');
            }
        }
    }
</script>
<style scoped>
    h1 {
        font-size: 28px;
        line-height: 28px;
    }
    .container {
        border-color: #9BD360;
        min-height: 700px;
        height: 700px;
    }
    h2 {
        color: #9BD360;
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
