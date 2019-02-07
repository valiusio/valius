<template>

    <div class="offer-page">


        <div class="container container--lg">
            <h1 class="offer-page__header">Γνωρίζεις τους λόγους για τους οποίους οι πελάτες σου αγοράζουν το προϊόν σου?</h1>

            <div class="offer-page__container">
                <div class="column--left">
                    <h2 class="offer-page__subheader">Κατανόηση των αγοραστικών κριτηρίων των πελατών</h2>

                    <div class="offer-page__content">
                        <p>Καθημερινά οι άνθρωποι έχουν ανάγκες και επιθυμίες που τους ωθούν
                            στην πραγματοποίηση αγορών. Κατά τη διάρκεια της αγοραστικής
                            διαδικασίας, οι πελάτες λαμβάνουν υπόψιν <b>ένα σύνολο χαρακτηριστικών
                                γνωρισμάτων των διαφόρων προϊόντων, τα οποία αξιολογούν</b> ώστε να
                            επιλέξουν το κατάλληλο προϊόν για την ικανοποίηση των αναγκών τους.
                        </p>

                        <p>Αυτά τα χαρακτηριστικά (αντιλαμβανόμενα ή πραγματικά) αποτελούν <b>τα
                            αγοραστικά κριτήρια των πελατών</b> και συνδέονται με την συνολική αξία
                            που λαμβάνουν από το προϊόν που επέλεξαν.
                        </p>

                        <p>
                            Για παράδειγμα, κάποιοι επιλέγουν προϊόντα για τα λειτουργικά τους
                            χαρακτηριστικά (προϊόν), για οικονομία (τιμή), για ευκολία (διανομή)
                            όπως επίσης και για συναισθηματικούς λόγους (branding)
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

