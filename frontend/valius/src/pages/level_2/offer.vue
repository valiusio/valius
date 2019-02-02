<template>

    <div class="offer-page">


        <div class="container container--lg">
            <h1 class="offer-page__header">Γνωρίζεις τους λόγους για τους οποίους οι πελάτες σου αγοράζουν το προϊόν σου?</h1>

            <div class="offer-page__container">
                <div class="column--left">
                    <h2 class="offer-page__subheader">Κατανόηση των αγοραστικών κριτηρίων των πελατών</h2>

                    <div class="offer-page__content">
                        <p>Οι πελάτες δεν παρακινούνται μόνο από τα χαρακτηριστικά ενός
                            προϊόντος, αλλά από ένα <b>δυναμικό εύρος κριτηρίων</b>. Τό σύνολο
                            αυτών των αγοραστικών κριτηρίων παρακινεί τους ανθρώπους για
                            την πραγματοποίηση της τελικής αγοράς και <b>αποτελούν την
                                πρόταση αξίας ενός προιόντος.</b>
                        </p>

                        <p>Για παράδειγμα, κάποιοι επιλέγουν προϊόντα για τα λειτουργικά
                            τους χαρακτηριστικά (προϊόν), για οικονομία (τιμή), για ευκολία και
                            διαθεσιμότητα (διανομή) όπως επίσης και για συναισθηματικούς
                            λόγους (branding)
                        </p>

                        <p>
                            Στην περίπτωση αυτή, τα αγοραστικά κριτήρια του προιόντος είναι:
                        </p>


                        <ul>
                            <li>Ποιότητα, Τιμή, Διανομή, Branding κτλ.</li>
                        </ul>


                    </div>

                </div>
                <div class="column--right">
                    <img :src="getImg">
                </div>
            </div>
            <button @click="goToPyramid">Got It!</button>
        </div>



    </div>

</template>



<script>
import buyingCriteriaImg from "./../../assets/images/buyingCriteriaImg.png";

    export default {
        name: 'GameNavigation',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel
            }
        },
        components:{

        },
        computed:{
            getImg : () => {
                return buyingCriteriaImg
            }
        },
        methods: {
            goToPyramid() {
                this.$router.push("/pyramid-of-value");
            }

        }
    }
</script>

