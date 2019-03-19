<template>
    <div class="market-assassment-intro">
        <div class="container container--exlg">
            <div class="row">
                <div class="column--left">
                    <h1 class="market-assassment-intro__title">Προσδιορισμός της σημαντικότητας των κριτηρίων</h1>

                    <h2 class="market-assassment-intro__subtitle">Κριτήρια ελκυστικότητας & εταιρικοί στόχοι</h2>

                    <p>
                        Τα <b>κριτήρια ελκυστικότητα της αγοράς δεν έχουν την ίδια
                        σημασία</b> για κάθε οργανισμό. Για παράδειγμα, ο
                        ανταγωνισμός ίσως είναι περισσότερο έντονος σε ένα κλάδο
                        από κάποιον άλλο, ενώ η προσβασιμότητα της αγοράς ίσως
                        είναι προτεραιότητα για μια αναπτυσσόμενη επιχείρηση σε
                        σχέση με κάποια άλλη πιο εδραιωμένη.
                    </p>
                    <p>
                        Συνεπώς για καλύτερα αποτελέσματα απαιτείται o
                        <b>προσδιορισμός της σημαντικότητας του κάθε κριτηρίου
                            έναντι των άλλων, σε ποσοστιαίες (%) τιμές.</b>
                    </p>
                    <p>
                        Τα τελικά ποσοστά πρέπει να συμβαδίζουν με τους στόχους
                        της επιχείρησης για όλα τα τμήματα-στόχους της αγοράς.
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
    import img from './../../assets/images/measuring.png'
    export default {
        name: 'importanceOfCriteriaIntro',
        props: [

        ],
        computed : {
            img () {
                return img;
            }
        },
        data(){
            return {

            }
        },
        methods: {
            next() {
                this.$router.push('/importanceOfCriteria');
            }
        }
    }
</script>
<style scoped>
    h1 {
        font-size: 25px;
    }
    .image {
        margin: 100px 0 0 0;
        width: 500px;
    }

    button {
        margin-top: 150px;
    }

</style>
