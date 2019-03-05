<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Πριν την διαδικασία αξιολόγησης. .</h1>

                    <h2 class="market-assassment-intro__subtitle">Παράμετροι αξιολόγησης της αγοράς</h2>

                    <p>
                        Πριν από την αξιολόγηση μπορείς να ορίσεις τις <b>υψηλές,
                        μεσαίες και χαμηλές παραμέτρους για καθένα από τους
                        επιλεγμένα κριτήρια,</b> ώστε να αποφευχθεί η υποκειμενική
                        αξιολόγηση των τμημάτων της αγοράς.
                    </p>
                    <p>
                        Συγκεκριμένα πρέπει να σκεφτείς:
                    </p>
                    <p>
                        <b>Τι σημαίνει υψηλή, μεσαία ή χαμηλή βαθμολογία για εσένα;</b>
                    </p>
                    <p>
                        Οι παράμετροι <b>μπορούν να συνδέονται με ποσοτικές ή
                        ποιοτικές τιμές</b> όπου είναι εφικτό.
                    </p>
                    <p>
                        Για παράδειγμα, οι παράμετροί για την βαθμό του
                        ανταγωνισμού μπορούν να βασιστούν στον αριθμό των
                        ανταγωνιστών σε κάθε τμήμα της αγοράς κοκ.
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
