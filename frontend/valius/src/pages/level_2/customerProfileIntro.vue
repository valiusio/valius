<template>

    <div class="offer-page">
        <div class="container container--lg">
            <h1 class="offer-page__header">Μετά την τμηματοποίηση σειρά έχει η
                δημιουργία κατάλληλων προφίλ των πελατών</h1>

            <div class="offer-page__container">
                <div class="column--left">
                    <h2 class="offer-page__subheader">Γιατί τα προφίλ των πελατών είναι σημαντικά</h2>

                    <div class="offer-page__content">
                        <p>Τα προφίλ των πελατών (buyers personas) αποτελούν την αναπαράσταση του
                            αγοραστικού κοινού μιας επιχείρησης με βάση τα πραγματικά δεδομένα που έχει
                            στη διάθεση της. (π.χ. συλλογή δημογραφικών στοιχείων, προφίλ αγοραστικής
                            συμπεριφοράς κ.ά.)
                        </p>

                        <p>
                            Τα buyers personas αντικατοπτρίζουν τις σκέψεις, τα κίνητρα, τις απόψεις, τις
                            συμπεριφορές, καθώς και τις προκλήσεις που αντιμετωπίζουν οι πελάτες σου. <b>Η
                            καλύτερη κατανόηση του αγοραστικού κοινού</b>, σου επιτρέπει να το
                            ικανοποιήσεις αποτελεσματικότερα με την παραγωγή <b>κατάλληλων ενεργειών
                            marketing.</b>
                        </p>

                        <p>
                            Τέλος με τη δημιουργία personas, μπορείς να <b>προσκαλέσεις μέσω του Valius
                            κατάλληλο δείγμα πελατών σου</b> για να λάβεις feedback για το προϊόν σου!
                        </p>
                    </div>

                </div>
                <div class="column--right">
                    <img :src="idCardImg">
                </div>
            </div>
            <button
                @click="nextPage"
            >Got It!</button>
        </div>

    </div>

</template>



<script>
    import idCardImg from './../../assets/images/id-card.png';

    export default {
        name: 'CustomerProfileIntro',
        props: [

        ],
        data(){
            return {
                idCardImg : idCardImg,
                market: this.$route.params.market
            }
        },
        components:{
        },
        computed:{


        },
        methods: {
            nextPage(event) {
                event.preventDefault();
                var newPage = '';
                if(this.market === 'b2b'){
                    newPage = 'business-profile-b2b'
                }else {
                    newPage = 'customer-profile-b2c'
                }
                this.$router.push('/' + newPage);
            }
        }

    }
</script>

