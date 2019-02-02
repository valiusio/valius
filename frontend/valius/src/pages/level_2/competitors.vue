<template>

    <div class="competitors">
        <div class="competitors__container">
            <h1 class="competitors__header">Ποιός είναι ο ανταγωνισμους σου;</h1>

            <div class="competitors__panel">
                <div class="column--left">
                    <h2 class="competitors__subheader">
                        Η γνώση των ανταγωνιστών είναι βασικό συστατικό
                        για τη δημιουργία επιτυχημένων στρατηγικών
                    </h2>

                    <p class="competitors__paragraph">
                        <b>Όλες οι επιχειρήσεις</b> ανεξαρτήτου μεγέθους ή αντικειμένου <b>έχουν ανταγωνισμό.</b>
                    </p>
                    <p class="competitors__paragraph">
                        Ακόμα και αν τρέχεις το μοναδικό μπαρ της πόλης,
                        ανταγωνίζεται με σινεμά, εστιατόρια και άλλες επιχειρήσεις
                        όπου στοχέυουν στην προσέλυση των πελατών σου.
                    </p>
                    <p class="competitors__paragraph">
                        Οι ανταγωνιστές σου <b>μπορέι να προσφέρουν</b> λοιπόν <b>κάτι
                        παρόμοιο με εσένα, ή κάποιο υποκατάστατο</b> ακόμα και ένα
                        εντελώς διαφορετικό προιόν.
                    </p>
                    <p class="competitors__paragraph">
                        Η γνώση των ανταγωνιστών σου μπορεί να σε βοηθήσει να
                        δημιουργήσεις καλύτερα προιόντα ή υπηρεσιές, να χτίσεις την
                        τιμολογιακή σου πολιτική και να διαχειριστικές ανταγωνιστικές
                        καμπάνιες μαρκετινγκ.
                    </p>
                </div>
                <div class="column--right competitors__cover__container">
                    <img class="competitors__cover__img" :src="competitionImg">
                </div>
            </div>

            <button class="competitors__button" @click="goTo">
                Got it!
            </button>
        </div>
    </div>

</template>



<script>
    import competitionImg from './../../assets/images/competition -cover.png';

    export default {
        name: 'Competitors',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                competitionImg : competitionImg
            }
        },
        components:{

        },
        computed:{

        },
        methods: {
            goTo(event) {
                event.preventDefault();
                this.$router.push('/best-competitors');
            }
        }
    }
</script>

