<template>

    <div class="offer-page">


        <div class="container container--lg">
            <h1 class="offer-page__header">Πώς προσεγγίζεις το πελατολόγιο σου;</h1>

            <div class="offer-page__container">
                <div class="column--left">
                    <h2 class="offer-page__subheader">Η τμηματοποίηση της αγοράς (market segmentation)</h2>

                    <div class="offer-page__content">
                        <p>
                            Τμηματοποίηση ο διαχωρισμός της αγοράς σε μικρότερα τμήματα
                            πελατών σύμφωνα με τα χαρακτηριστικά τους, τις ανάγκες τους και τις
                            αγοραστικές τους συνήθειες.
                        </p>

                        <p>
                            Αυτά τα τμήματα χαρακτηρίζονται από ομογένεια (για παράδειγμα, έχουν
                            κοινά δημογραφικά στοιχεία ή κοινά ενδιαφέροντα κτλ.) και αναμένεται
                            να ανταποκριθούν παρόμοια σε μια δεδομένη χρονική στιγμή.
                        </p>

                        <p>
                            Για την ολοκλήρωση μιας διαδιακασίας τμηματοποίησης απαιτείται:
                        </p>
                        <ul>
                            <li>O <b>προσδιορισμός των διαστάσεων</b> της τμηματοποίησης</li>
                            <li>Η <b>περιγραφή των τμημάτων</b> που δημιουργούνται</li>
                        </ul>


                        <p>
                            Η τμηματοποίηση της αγοράς επιτρέπει στις επιχειρήσεις να
                            προσεγγίσουν αποτελεσματικά τους πελάτες τους προσφέροντας τους
                            διαφορετικά προϊόντα ή μίγματα marketing για να ικανοποιηθούν.
                        </p>
                    </div>

                </div>
                <div class="column--right">
                    <img :src="segmentationImg">
                </div>
            </div>
            <button
                @click="nextPage"
            >Got It!</button>
        </div>



    </div>

</template>



<script>
    import segmentationImg from './../../assets/images/segmentation.png';

    export default {
        name: 'Best-Competitors',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
                segmentationImg: segmentationImg

            }
        },
        components:{
        },
        computed:{

        },
        methods: {
            nextPage(event) {
                event.preventDefault();
                this.$router.push('/market-focus');
            }
        }

    }
</script>

