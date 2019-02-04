<template>

    <div class="welcome-page">
        <div class="container container--lg">
            <h2 class="welcome-page__header">Πως δουλεύει..</h2>


            <div class="welcome-page__description-container">
                <div class="welcome-page__how-it-works-container">
                    <div class="row">
                        <img :src="bookImg">
                        <p class="welcome-page__paragraph--how-it-works img--book">
                            Σκοπός του «παιχνιδιού» είναι η ολοκλήρωση όλων των διαφορετικών επίπεδων
                            απαντώντας ερωτήσεις και παιχνιδοποιημένες ασκήσεις, σχετικά με το προϊόν σου και
                            την αγορά που δραστηριοποιείσαι.
                        </p>
                    </div>

                    <div class="row">
                        <img :src="ratingImg">
                        <p class="welcome-page__paragraph--how-it-works img--book">
                            Ταυτόχρονα θα έχεις τη δυνατότητα να προσκαλέσεις δείγμα των πελατών σου, ώστε
                            να πάρουν και αυτοί μέρος στη στρατηγική σου δίνοντας τη γνώμη τους!
                        </p>
                    </div>

                    <div class="row">
                        <img :src="arrowsImg">
                        <p class="welcome-page__paragraph--how-it-works img--book">
                            Το Valius στο τέλος θα αναλύσει και θα παρουσιάσει όλα τα δεδομένα τα οποία θα σε
                            βοηθήσουν στην λήψη των αποφάσεων σου!
                        </p>
                    </div>
                    <div class="row">
                        <img :src="medalImg">
                        <p class="welcome-page__paragraph--how-it-works img--book">
                            Για αυτό δώσε χρόνο στον εαυτό σου, σκέψου στρατηγικά, γίνει chief-commander!
                        </p>
                    </div>
                </div>
            </div>

            <button class="welcome-page__button" v-on:click="nextPage">
                Next
            </button>
        </div>

    </div>

</template>



<script>
    import bookImg from './../../assets/images/book.png';
    import ratingImg from './../../assets/images/rating.png';
    import arrowsImg from './../../assets/images/arrows.png';
    import medalImg from './../../assets/images/medal.png';


    export default {
        name: 'welcomeToStrategy',
        props: {

        },
        data(){
            return {
                bookImg :bookImg,
                ratingImg: ratingImg,
                arrowsImg: arrowsImg,
                medalImg: medalImg
            }
        },
        components:{

        },
        methods:{
            nextPage() {
                this.$router.push("/valius")
            }

        }
    }
</script>

