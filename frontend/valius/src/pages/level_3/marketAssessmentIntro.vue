<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Τι κάνει μια αγορά ελκυστική;</h1>

                    <h2 class="market-assassment-intro__subtitle">Χρησιμοποιώντας Κριτήρια Ελκυστικότητας της Αγοράς</h2>

                    <p>Μετά την τμηματοποίηση της αγοράς, σειρά έχει η αποτίμηση της ελκυστικότητας
                        κάθε τμήματος λαμβάνοντας υπόψη τους στόχους της εταιρίας σου.
                    </p>

                    <p>
                        Ένα ελκυστικό τμήμα της αγοράς είναι αυτό που προσφέρει ισχυρές δυνατότητες
                        κέρδους ή πωλήσεων για μια επιχείρησή βραχυπρόθεσμα η μακροπρόθεσμα.
                    </p>

                    <p>
                        Για την αξιολόγηση του κάθε τμήματος λοιπόν, είναι σημαντικός ο <b>προσδιορισμός
                        των παραγόντων (κριτήρια ελκυστικότητας αγοράς) που κάνουν ένα τμήμα
                        ελκυστικό.</b>
                    </p>

                    <ul style="list-style: none">
                        <li>π.χ.</li>
                       <li>Μέγεθος του τμήματος</li>
                       <li>Ρυθμός ανάπτυξης,</li>
                       <li>Κερδοφορία,</li>
                       <li>Ένταση του Ανταγωνισμού,</li>
                       <li>Προσβασιμότητα κτλ.</li>
                    </ul>
                </div>
                <div class="column--right">
                    <img :src="growthIcon">
                </div>
            </div>
            <div class="row">
                <button @click="next">Got it!</button>
            </div>
        </div>
    </div>
</template>



<script>
import growthIcon from './../../assets/images/growth icon.png'

    export default {
        name: 'MarketAssassmentIntro',
        props: [

        ],
        data(){
            return {
                growthIcon
            }
        },
        methods: {
            next() {
                this.$router.push('/selectMarketAssessments');
            }
        }
    }
</script>
<style scoped>
    button {
        margin: 70px auto 10px auto;
    }
</style>
