<template>

    <div class="customer-profile">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Ας χτίσουμε το προφίλ των πελατών σου για κάθε τμήμα της αγοράς!</h1>
                <p>Aπάντησε στις ερωτήσεις που γνωρίζεις συμπληρώνοντας
                    τα παρακάτω κενά ή επιλέγοντας το κατάλληλο στοιχείο</p>
            </information-banner>
            <form @submit="saveCustomers">
            <div class="customer-profile__forms">

                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''" v-model="customer1.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="customer1.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="customer1.productUsage">
                                <md-optgroup>
                                    <md-option value="Υψηλή χρήση" >Υψηλή χρήση</md-option>
                                    <md-option value="Τακτική χρήση" >Τακτική χρήση</md-option>
                                    <md-option value="Πρώτη φορά" >Πρώτη φορά</md-option>
                                    <md-option value="Μή-χρήση">Μή χρήση</md-option>
                                    <md-option value="Δυνητική χρήση">Δυνητική χρήση</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>
                        <md-field>
                            <label>Επιθυμητό χαρακτηριστικό</label>
                            <md-input name="desiredFeature" v-validate="''" v-model="customer1.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="customer1.brandFidelity">
                                <md-optgroup>
                                    <md-option value="Πιστοί/ Ικανοποιημένοι" >Πιστοί/ Ικανοποιημένοι</md-option>
                                    <md-option value="Πρώιμοι πελάτες" >Πρώιμοι πελάτες</md-option>
                                    <md-option value="Ευκαιριακοί" >Ευκαιριακοί</md-option>
                                    <md-option value="Μη ικανοποιημένο">Μη ικανοποιημένο</md-option>
                                    <md-option value="Μη πληροφορημένοι">Μη πληροφορημένοι</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Mέσα επικοινωνίας</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer1.communicationMeans" multiple >
                                    <md-option value="TV" >TV</md-option>
                                    <md-option value="Ραδιόφωνο" >Ραδιόφωνο</md-option>
                                    <md-option value="Διαφήμιση Online" >Διαφήμιση Online</md-option>
                                    <md-option value="Social media">Social media</md-option>
                                    <md-option value="Blogs">Blogs</md-option>
                                    <md-option value="Influencers">Influencers</md-option>
                                    <md-option value="Word-of-mouth">Word-of-mouth</md-option>
                                    <md-option value="Περιοδικά/Εφημερίδες">Περιοδικά/Εφημερίδες</md-option>
                                    <md-option value="Events">Events</md-option>
                                    <md-option value="Εξωτερικοί χώρο">Εξωτερικοί χώρο</md-option>
                                    <md-option value="Προσωπική πώληση">Προσωπική πώληση</md-option>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Κανάλι διανομής</label>
                            <md-input name="distributionChannel" v-validate="''" v-model="customer1.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer1.lifeStyle" multiple >
                                <md-option value="Αθλητικοί" >Αθλητικοί</md-option>
                                <md-option value="Αισθητικοί" >Αισθητικοί</md-option>
                                <md-option value="Αισιόδοξοι" >Αισιόδοξοι</md-option>
                                <md-option value="Αλαζονικοί" >Αλαζονικοί</md-option>
                                <md-option value="Ανεξάρτητοι" >Ανεξάρτητοι</md-option>
                                <md-option value="Αυθεντικοί" >Αυθεντικοί</md-option>
                                <md-option value="Ανταγωνιστικοί" >Ανταγωνιστικοί</md-option>
                                <md-option value="Απαθής" >Απαθής</md-option>
                                <md-option value="Απαιτητικοί" >Απαιτητικοί</md-option>
                                <md-option value="Αποφασιστικοί" >Αποφασιστικοί</md-option>
                            </md-select>
                        </md-field>
                </div>
                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''"  v-model="customer2.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="customer2.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="customer2.productUsage">
                                <md-optgroup>
                                    <md-option value="Υψηλή χρήση" >Υψηλή χρήση</md-option>
                                    <md-option value="Τακτική χρήση" >Τακτική χρήση</md-option>
                                    <md-option value="Πρώτη φορά" >Πρώτη φορά</md-option>
                                    <md-option value="Μή-χρήση">Μή χρήση</md-option>
                                    <md-option value="Δυνητική χρήση">Δυνητική χρήση</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>
                        <md-field>
                            <label>Επιθυμητό χαρακτηριστικό</label>
                            <md-input name="desiredFeature" v-validate="''" v-model="customer2.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="customer2.brandFidelity">
                                <md-optgroup>
                                    <md-option value="Πιστοί/ Ικανοποιημένοι" >Πιστοί/ Ικανοποιημένοι</md-option>
                                    <md-option value="Πρώιμοι πελάτες" >Πρώιμοι πελάτες</md-option>
                                    <md-option value="Ευκαιριακοί" >Ευκαιριακοί</md-option>
                                    <md-option value="Μη ικανοποιημένο">Μη ικανοποιημένο</md-option>
                                    <md-option value="Μη πληροφορημένοι">Μη πληροφορημένοι</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Mέσα επικοινωνίας</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer2.communicationMeans" multiple >
                                    <md-option value="TV" >TV</md-option>
                                    <md-option value="Ραδιόφωνο" >Ραδιόφωνο</md-option>
                                    <md-option value="Διαφήμιση Online" >Διαφήμιση Online</md-option>
                                    <md-option value="Social media">Social media</md-option>
                                    <md-option value="Blogs">Blogs</md-option>
                                    <md-option value="Influencers">Influencers</md-option>
                                    <md-option value="Word-of-mouth">Word-of-mouth</md-option>
                                    <md-option value="Περιοδικά/Εφημερίδες">Περιοδικά/Εφημερίδες</md-option>
                                    <md-option value="Events">Events</md-option>
                                    <md-option value="Εξωτερικοί χώρο">Εξωτερικοί χώρο</md-option>
                                    <md-option value="Προσωπική πώληση">Προσωπική πώληση</md-option>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Κανάλι διανομής</label>
                            <md-input name="distributionChannel" v-validate="''" v-model="customer2.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer2.lifeStyle" multiple >
                                <md-option value="Αθλητικοί" >Αθλητικοί</md-option>
                                <md-option value="Αισθητικοί" >Αισθητικοί</md-option>
                                <md-option value="Αισιόδοξοι" >Αισιόδοξοι</md-option>
                                <md-option value="Αλαζονικοί" >Αλαζονικοί</md-option>
                                <md-option value="Ανεξάρτητοι" >Ανεξάρτητοι</md-option>
                                <md-option value="Αυθεντικοί" >Αυθεντικοί</md-option>
                                <md-option value="Ανταγωνιστικοί" >Ανταγωνιστικοί</md-option>
                                <md-option value="Απαθής" >Απαθής</md-option>
                                <md-option value="Απαιτητικοί" >Απαιτητικοί</md-option>
                                <md-option value="Αποφασιστικοί" >Αποφασιστικοί</md-option>
                            </md-select>
                        </md-field>
                </div>
                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''"  v-model="customer3.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="customer3.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="customer3.productUsage">
                                <md-optgroup>
                                    <md-option value="Υψηλή χρήση" >Υψηλή χρήση</md-option>
                                    <md-option value="Τακτική χρήση" >Τακτική χρήση</md-option>
                                    <md-option value="Πρώτη φορά" >Πρώτη φορά</md-option>
                                    <md-option value="Μή-χρήση">Μή χρήση</md-option>
                                    <md-option value="Δυνητική χρήση">Δυνητική χρήση</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>
                        <md-field>
                            <label>Επιθυμητό χαρακτηριστικό</label>
                            <md-input name="desiredFeature" v-validate="''" v-model="customer3.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="customer3.brandFidelity">
                                <md-optgroup>
                                    <md-option value="Πιστοί/ Ικανοποιημένοι" >Πιστοί/ Ικανοποιημένοι</md-option>
                                    <md-option value="Πρώιμοι πελάτες" >Πρώιμοι πελάτες</md-option>
                                    <md-option value="Ευκαιριακοί" >Ευκαιριακοί</md-option>
                                    <md-option value="Μη ικανοποιημένο">Μη ικανοποιημένο</md-option>
                                    <md-option value="Μη πληροφορημένοι">Μη πληροφορημένοι</md-option>
                                </md-optgroup>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Mέσα επικοινωνίας</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer3.communicationMeans" multiple >
                                    <md-option value="TV" >TV</md-option>
                                    <md-option value="Ραδιόφωνο" >Ραδιόφωνο</md-option>
                                    <md-option value="Διαφήμιση Online" >Διαφήμιση Online</md-option>
                                    <md-option value="Social media">Social media</md-option>
                                    <md-option value="Blogs">Blogs</md-option>
                                    <md-option value="Influencers">Influencers</md-option>
                                    <md-option value="Word-of-mouth">Word-of-mouth</md-option>
                                    <md-option value="Περιοδικά/Εφημερίδες">Περιοδικά/Εφημερίδες</md-option>
                                    <md-option value="Events">Events</md-option>
                                    <md-option value="Εξωτερικοί χώρο">Εξωτερικοί χώρο</md-option>
                                    <md-option value="Προσωπική πώληση">Προσωπική πώληση</md-option>
                            </md-select>
                        </md-field>

                        <md-field>
                            <label>Κανάλι διανομής</label>
                            <md-input name="distributionChannel" v-validate="''" v-model="customer3.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="customer3.lifeStyle" multiple >
                                <md-option value="Αθλητικοί" >Αθλητικοί</md-option>
                                <md-option value="Αισθητικοί" >Αισθητικοί</md-option>
                                <md-option value="Αισιόδοξοι" >Αισιόδοξοι</md-option>
                                <md-option value="Αλαζονικοί" >Αλαζονικοί</md-option>
                                <md-option value="Ανεξάρτητοι" >Ανεξάρτητοι</md-option>
                                <md-option value="Αυθεντικοί" >Αυθεντικοί</md-option>
                                <md-option value="Ανταγωνιστικοί" >Ανταγωνιστικοί</md-option>
                                <md-option value="Απαθής" >Απαθής</md-option>
                                <md-option value="Απαιτητικοί" >Απαιτητικοί</md-option>
                                <md-option value="Αποφασιστικοί" >Αποφασιστικοί</md-option>
                            </md-select>
                        </md-field>
                </div>

            </div>
            <button
                class="customer-profile__form-container__submit"
                type="submit"
            >
                Save Customers
            </button>
            </form>
        </div>

    </div>

</template>



<script>
    import InformationBanner from './../../components/InformationBanner';

    export default {
        name: 'CustomerProfile',
        props: [

        ],
        data() {
            return {
                customer1 : {
                    name : this.$store.getters.markets[0].name,
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
                customer2 : {
                    name :this.$store.getters.markets[1].name,
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
                customer3 : {
                    name : this.$store.getters.markets[2].name,
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
                customers : this.$store.getters.customers,
                levels: this.$store.getters.levels
            }
        },
        components:{
            InformationBanner : InformationBanner
        },
        computed:{


        },
        created() {
          console.log(this.$store.getters.markets)
        },
        methods: {
            nextPage(event) {

                this.$router.push('/market-focus');
            },
            saveCustomers(event) {
                event.preventDefault();
                this.customers.customer1 = this.customer1;
                this.customers.customer2 = this.customer2;
                this.customers.customer3 = this.customer3;
                event.preventDefault();
                this.levels.landscapeIdentification.subLevels.marketObjective.completed = true;
                this.levels.landscapeIdentification.subLevels.marketObjective.rating= 3;
                this.levels.landscapeIdentification.completed = true;

                this.$store.dispatch('updateLevels', this.levels);
                this.$store.dispatch('updateCustomers', this.customers);
                this.$router.push('/game-navigation/landscapeIdentification');
            }
        }

    }
</script>

