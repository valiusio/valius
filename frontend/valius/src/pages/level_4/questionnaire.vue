<template>
    <div class="questionnaire">
        <div class="container container--exlg">
            <information-banner
                type="success"
            >
                <h1>Παρακάτω είναι μερικές ερωτήσεις που μπορούν να χρησιμοποιηθούν
                    για την επιλογή του κατάλληλου δείγματος πελατών.
                </h1>

                <p>Θα ήθελες να αλλάξεις ή να προσθέσεις κάποια ερώτηση;</p>
            </information-banner>

            <div class="questionnaire__container">
                <h2 class="questionnaire__title">Λίστα ερωτήσεων για επιλογή δείγματος πελατών</h2>
                <div class="row">
                    <span class="icon"></span>
                    <input type="text" v-model="questionsObject[1]">
                </div>
                <div class="row answer">
                    <md-checkbox disabled>Ναι</md-checkbox>
                    <md-checkbox disabled>Οχι</md-checkbox>
                </div>
                <div class="row">
                    <span class="icon"></span>
                    <input type="text" v-model="questionsObject[2]">
                </div>

                <div v-if="getAllBrands()" class="row brands__container">
                    <span v-for="brand in getAllBrands()" class="brands__item">{{ brand }}</span>
                </div>
                <div v-if="getAllBrands()" class="row answer">
                    <md-checkbox disabled>Ναι</md-checkbox>
                    <md-checkbox disabled>Οχι</md-checkbox>
                </div>
                <div class="row">
                    <span class="icon"></span>
                    <input type="text" v-model="questionsObject[3]">
                </div>
                <div class="row answer">
                    <md-checkbox disabled>Ναι</md-checkbox>
                    <md-checkbox disabled>Οχι</md-checkbox>
                </div>
                <div class="row">
                    <span class="icon"></span>
                    <input type="text" v-model="questionsObject[4]">
                </div>
                <div v-if="getAllProductAnswers()" class="row brands__container">
                    <span v-for="product in getAllProductAnswers()" class="brands__item">{{ product }}</span>
                </div>
            </div>

            <button
                @click="nextPage()"
            >
                Submit
            </button>
        </div>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner';

    export default {
        name: 'questionnaire',
        props: [

        ],
        components: {
            InformationBanner: InformationBanner
        },
        computed : {
        },
        data(){
            return {
                selectedMarket: this.$store.getters.selectedMarket,
                marketCategory : this.$store.getters.marketCategory,
                levels: this.$store.getters.levels,
                business: this.$store.getters.business,
                product: this.$store.getters.product,
                questionnaire: this.$store.getters.questionnaire,
                questionsObject: {
                    1: '',
                    2: '',
                    3:'',
                    4: ''
                }
            }
        },
        created() {
          if(this.questionnaire.length === 0) {
              this.questionnaire = this.initQuestions();
          }
          this.questionsObject[1] = this.questionnaire[0];
          this.questionsObject[2] = this.questionnaire[1];
          this.questionsObject[3] = this.questionnaire[2];
          this.questionsObject[4] = this.questionnaire[3];
        },
        methods: {
            initQuestions() {
                let questions = {};
                if(this.selectedMarket === 'b2c') {
                    questions = [
                        `Χρησιμοποιείς προϊόντα  '${this.business.subject}' ?`,
                         'Γνωρίζεις κάποιο από τα παρακάτω brands?',
                         `Έχεις ποτέ χρησιμοποιήσει προϊόν '${this.product.brandName}'?`,
                         this.getLastQuestion()
                    ]
                }

                if(this.selectedMarket === 'b2b') {
                    questions = [
                        `Xρησιμοποιείς υπηρεσίες '${this.business.subject}' ?`,
                        'Γνωρίζεις κάποιο από τα παρακάτω brands?',
                        `Έχεις ποτέ συνεργαστεί με την εταιρεία '${this.business.business}'?`,
                        this.getLastQuestion()
                    ]
                }

                return questions;
            },
            getAllBrands() {
                let brands = [];
                this.$store.getters.product.brandName && brands.push(this.$store.getters.product.brandName);
                this.$store.getters.competitors.competitor1.name && brands.push(this.$store.getters.competitors.competitor1.name);
                this.$store.getters.competitors.competitor2.name && brands.push(this.$store.getters.competitors.competitor2.name);
                this.$store.getters.competitors.competitor3.name && brands.push(this.$store.getters.competitors.competitor3.name);

                return brands;
            },

            getAllProductAnswers() {
                let spesificCategories = {
                    b2c :[
                        'Δημογραφικά',
                        'Χρήσης προϊόντος (user-rate)',
                        'Πιστότητα στη μάρκα (loyalty)',
                        'Μέσο ενημέρωσης',
                        'Τρόπου ζωής'
                    ],
                    b2b :[
                        'Τομέας',
                        'Χρήσης προϊόντος (user-rate)',
                        'Πιστότητα στη μάρκα (loyalty)',
                        'Μέγεθος εταιρίας'
                    ]
                }

                let productAnswers = [];
                if(this.selectedMarket === 'b2c') {
                    if(spesificCategories.b2c.indexOf(this.marketCategory) === -1) {
                        productAnswers = [
                            this.$store.getters.customers.customer1.selectedMarketCategoryAnswer,
                            this.$store.getters.customers.customer2.selectedMarketCategoryAnswer,
                            this.$store.getters.customers.customer3.selectedMarketCategoryAnswer,
                        ]
                    }else {
                        productAnswers = [
                            this.$store.getters.customers.customer1.productUsage,
                            this.$store.getters.customers.customer2.productUsage,
                            this.$store.getters.customers.customer3.productUsage,
                        ];
                    }
                }

                if(this.selectedMarket === 'b2b') {
                    if(spesificCategories.b2b.indexOf(this.marketCategory) === -1) {
                        productAnswers = [
                            this.$store.getters.businesses.business1.selectedBusinessCategoryAnswer,
                            this.$store.getters.businesses.business2.selectedBusinessCategoryAnswer,
                            this.$store.getters.businesses.business2.selectedBusinessCategoryAnswer,
                        ]
                    }else {
                        productAnswers = [
                            this.$store.getters.businesses.business1.productUsage,
                            this.$store.getters.businesses.business2.productUsage,
                            this.$store.getters.businesses.business3.productUsage,
                        ];
                    }
                }
                return productAnswers;
            },
            getLastQuestion() {
                let marketCategory = this.$store.getters.marketCategory;
                let selectedMarketGroup = this.$store.getters.selectedMarket;

                let posibleQuestions = {
                    b2c : {
                        "Χρήσης προϊόντος (user-rate)":'Που θα κατατάσσατε τον εαυτό σας ως προς τη χρήση προϊόντος;',
                        "Ευαισθησία στην τιμή (sensitivity)" : "Πως θα περιγράφατε τον εαυτό σας ως προς στην ευαισθησία σας ως προς την τιμή;",
                        "Αντιλαμβανόμενα Οφέλη" : "Πως θα περιγράφατε τον εαυτό σας ως προς τα αντιλαμβανόμενα οφέλη του συγκεκριμένου προϊόντος;",
                        "Πιστότητα στη μάρκα (loyalty)" : "Που θα κατατάσσατε τον εαυτό σας ως προς την πιστότητα της μάρκας του συγκεκριμένου προϊόντος;",
                        "Δημογραφικά" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω δημογραφικά στοιχεία;",
                        "Κοινωνικό - Οικονομικό" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω κοινωνικά/οικονομικά κριτήρια;",
                        "Γεωγραφικά" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω γεωγραφικά στοιχεία;",
                        "Τρόπου ζωής" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα  παρακάτω στοιχεία τρόπου ζωής;",
                        "Κανάλι αγοράς" : "Ποιο από τα παρακάτω κανάλια διανομής χρησιμοποιείται κυρίως;",
                        "Μέσο ενημέρωσης" : "Ποιο από τα παρακάτω μέσα ενημέρωσης χρησιμοποιείται κυρίως;",
                        "Άλλο" : "Πως θα περιγράφατε τον εαυτό σας ως προς το ____ στοιχείο"
                    },
                    b2b: {
                        "Πιστότητα στη μάρκα (loyalty)" : "Που θα κατατάσσατε τον εαυτό σας ως προς την πιστότητα της μάρκας;",
                        "Χρήσης προϊόντος (user-rate)" : "Που θα κατατάσσατε τον εαυτό σας ως προς τη χρήση προιόντος;",
                        "Ευαισθησία στην τιμή (sensitivity)" : "Πως θα περιγράφατε τον εαυτό σας ως προς στην ευαισθησία σας ως προς την τιμή του συγκεκριμένου προϊόντος;",
                        "Αντιλαμβανόμενα Οφέλη" : "Πως θα περιγράφατε τον εαυτό σας ως προς τα αντιλαμβανόμενα οφέλη του συγκεκριμένου προϊόντος;",
                        "Μέγεθος αγορών" : "Που θα κατατάσσατε τον εαυτό σας ως προς το μέγεθος των αγορών σας του συγκεκριμένου προϊόντος; ;",
                        "Τομέας" : "Πως θα περιγράφατε τον εαυτό σας ως προς τον τομέα του οργανισμού σας;",
                        "Status Χρήστη" : "Ποιο από τα παρακάτω στοιχεία ταιριάζει καλύτερα στο αγοραστικό προφίλ σας;",
                        "Γεωγραφικά" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω γεωγραφικά στοιχεία;",
                        "Μέγεθος εταιρίας" : "Που από τα παρακάτω ταιριάζει καλύτερα με το μέγεθος του οργανισμού σας;",
                        "Σχέση μεταξύ αγοραστή/πωλητή" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω στοιχεία;",
                        "Πολιτικές αγορών" : "Που θα κατατάσσατε τον εαυτό σας ως προς τα παρακάτω στοιχεία;",
                        "Πρόσωπα λήψης αποφάσεων (Key decision marker)" : "Ποιο από τα παρακάτω στοιχεία ταιριάζει καλύτερα στο επαγγελματικό προφίλ σας;"
                    }
                }
                return posibleQuestions[selectedMarketGroup][marketCategory];
            },
            nextPage() {
                this.questionnaire[0] = this.questionsObject[1];
                this.questionnaire[1] = this.questionsObject[2];
                this.questionnaire[2] = this.questionsObject[3];
                this.questionnaire[3] = this.questionsObject[4];

                this.$store.dispatch('updateQuestionnaire', this.questionnaire).then(() => {
                    this.levels.productAssessment.subLevels.customersSample.completed = true;
                    this.levels.productAssessment.subLevels.customersSample.rating = 3;
                    this.levels.productAssessment.subLevels.customersFeedback.locked = false;

                    this.$store.dispatch('updateLevels', this.levels).then(()=>{
                        this.$router.push('/game-navigation/productAssessment');
                    })
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner {
        h1 {
            font-size: 16px;
        }
        p {
            font-size: 13px;
        }
    }

    button {
        width: 200px;
        height: 50px;
        margin: 50px auto;
        display: block;
        outline: none;
        background-color: #38BBD5;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        color: white;
        &:hover{
            cursor: pointer;
        }
    }
    .questionnaire {
        &__container {
            width: 700px;
            margin: 50px auto 10px auto;

            .row {
                display: flex;
                margin: 0;

                .icon {
                    width: 55px;
                    height: 55px;
                    border: 10px solid #38BBD5;
                    border-radius: 50%;
                    margin-right: 20px;
                }

                input {
                    border: 2px solid gray;
                    text-align: left;
                    border-radius: 10px;
                    width: 600px;
                    padding: 20px 10px;
                    outline: none;

                    &:focus {
                        -moz-box-shadow:    3px 3px 5px 6px #ccc;
                        -webkit-box-shadow: 3px 3px 5px 6px #ccc;
                        box-shadow:         3px 3px 5px 6px #ccc;
                    }
                }
            }
        }

        &__title {
            text-align: center;
            font-size: 18px;
            margin-bottom: 30px;
        }
    }
    .answer {
        padding: 0 0 20px 90px;
    }
    .brands {
        &__container {
            padding-top: 10px;
            align-items: flex-start;
            padding-left: 80px;
        }

        &__item {
            padding: 4px 10px;
            background-color: rgba(225,101,17,0.95);
            color: white;
            margin-right: 10px;
            border-radius: 5px;
        }
    }
</style>
