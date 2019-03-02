<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Τι κάνει μια αγορά ελκυστική;</h1>

                    <h2 class="market-assassment-intro__subtitle">Χρησιμοποιώντας Κριτήρια Ελκυστικότητας της Αγοράς</h2>

                    <p>Η ελκυστικότητα της αγοράς είναι βασίζεται <b>στο potential του
                        κάθε τμήματος, όσον αφορά την ικανότητα του να αποφέρει
                        πωλήσεις και κέρδη για το προϊόν μας.</b>
                    </p>

                    <p>
                        Το συνολικό αποτέλεσμα προκύπτει από ένα δυναμικό
                       <b>συνδυασμό κριτηρίων τα οποία συνεισφέρουν άμεσα ή έμμεσα
                        στην αύξηση των εσόδων.</b> Για παράδειγμα:
                    </p>

                    <ul>
                        <li>
                            Μέγεθος, Κερδοφορία, Ένταση του Ανταγωνισμού,
                            Προσβασιμότητα της αγοράς κτλ.
                        </li>
                    </ul>

                    <p>
                        Τα κριτήρια αυτά πρέπει να σχετίζονται με τους επιδιωκόμενους
                        εταιρικούς στόχους, αλλά πρέπει να είναι ανεξάρτητα από τη
                        θέση του οργανισμού στην συγκεκριμένη αγορά.
                    </p>
                </div>
                <div class="column--right">
                    <img :src="growthIcon">
                </div>
            </div>


            <button @click="next">Got it!</button>
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
