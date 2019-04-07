<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">
                        Προσκαλώντας τους πελάτες σου να
                        πάρουν μέρος στη στρατηγική σου!
                    </h1>

                    <h2 class="market-assassment-intro__subtitle">
                        Η επιλογή του σωστού δείγματος πελατών
                    </h2>

                    <p>
                        To Valius σου δίνει τη <b>δυνατότητα να προσκαλέσεις το κατάλληλο δείγμα
                        πελατών σου και να λάβεις feedback για το προϊόν</b> σου!
                    </p>

                    <p>
                        Στόχος όμως δεν είναι η ποσότητα των αποτελεσμάτων, αλλά η ποιότητα
                        για αυτό είναι <b>πολύ σημαντικό να συμμετάσχει στη διαδικασία το σωστό
                        δείγμα πελατών σου,</b> χρήστες δηλαδή που έχουν γνώση για το προϊόν
                        σου και τους ανταγωνιστές, και ταυτόχρονα ανήκουν στις αγορές-στόχους
                        που έχεις θέσει.
                    </p>
                    <p>
                        Για αυτό το λόγο <b>μπορείς να χρησιμοποιήσεις συγκεκριμένες ερωτήσεις
                        για να φιλτράρεις το επιθυμητό δείγμα πελατών σου,</b> το οποίο εν
                        συνεχεία να κατηγοριοποιηθεί στα αντίστοιχα τμήματα της αγοράς που
                        έχεις θέσει.
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
        name: 'customersSampleIntro',
        props: [

        ],
        computed : {
            img () {
                return require('./../../assets/images/select.png');
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/questionnaire');
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
        width: 200px;
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
