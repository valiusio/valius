<template>

    <div class="customer-profile">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Ας χτίσουμε το προφίλ των πελατών σου για κάθε τμήμα της αγοράς!</h1>
                <p>Aπάντησε στις ερωτήσεις που γνωρίζεις συμπληρώνοντας
                    τα παρακάτω κενά ή επιλέγοντας το κατάλληλο στοιχείο.</p>
            </information-banner>
            <form @submit="saveCustomers">
            <div class="customer-profile__forms">

                    <div v-for="i in 3" class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''" v-model="customers[`customer${i}`].name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="customers[`customer${i}`].demographicItem"></md-input>
                        </md-field>

                        <md-field v-if="displayExtraOption">
                            <label>{{ marketCategory }}</label>
                            <md-input name="demographicItem" v-validate="''" v-model="customers[`customer${i}`].selectedMarketCategoryAnswer"></md-input>
                        </md-field>

                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select v-if="marketCategory !== 'Χρήσης προϊόντος (user-rate)'"  name="productUsage" v-validate="''" v-model="customers[`customer${i}`].productUsage">
                                <md-optgroup>
                                    <md-option value="Υψηλή χρήση" >Υψηλή χρήση</md-option>
                                    <md-option value="Τακτική χρήση" >Τακτική χρήση</md-option>
                                    <md-option value="Πρώτη φορά" >Πρώτη φορά</md-option>
                                    <md-option value="Μή-χρήση">Μή χρήση</md-option>
                                    <md-option value="Δυνητική χρήση">Δυνητική χρήση</md-option>
                                </md-optgroup>
                            </md-select>
                            <md-input v-else name="productUsage" v-validate="''" v-model="customers[`customer${i}`].productUsage"></md-input>
                        </md-field>


                        <md-field>
                            <label>Επιθυμητό χαρακτηριστικό</label>
                            <md-input name="desiredFeature" v-validate="''" v-model="customers[`customer${i}`].desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select v-if="marketCategory !== 'Πιστότητα στη μάρκα (loyalty)'" name="brandFidelity" v-validate="''" v-model="customers[`customer${i}`].brandFidelity">
                                <md-optgroup>
                                    <md-option value="Πιστοί/ Ικανοποιημένοι" >Πιστοί/ Ικανοποιημένοι</md-option>
                                    <md-option value="Πρώιμοι πελάτες" >Πρώιμοι πελάτες</md-option>
                                    <md-option value="Ευκαιριακοί" >Ευκαιριακοί</md-option>
                                    <md-option value="Μη ικανοποιημένο">Μη ικανοποιημένο</md-option>
                                    <md-option value="Μη πληροφορημένοι">Μη πληροφορημένοι</md-option>
                                </md-optgroup>
                            </md-select>
                            <md-input v-else name="brandFidelity" v-validate="''" v-model="customers[`customer${i}`].brandFidelity"></md-input>
                        </md-field>

                        <md-field>
                            <label>Mέσo Ενημέρωσης</label>
                            <md-select v-if="marketCategory !== 'Μέσο ενημέρωσης'" name="communicationMeans" v-validate="''" v-model="customers[`customer${i}`].communicationMeans" >
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
                            <md-input v-else name="communicationMeans" v-validate="''" v-model="customers[`customer${i}`].communicationMeans"></md-input>
                        </md-field>

                        <md-field>
                            <label>Κανάλι διανομής</label>
                            <md-input name="distributionChannel" v-validate="''" v-model="customers[`customer${i}`].distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select v-if="marketCategory !== 'Τρόπου ζωής'" name="communicationMeans" v-validate="''" v-model="customers[`customer${i}`].lifeStyle" multiple >
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
                            <md-input v-else name="communicationMeans" v-validate="''" v-model="customers[`customer${i}`].lifeStyle"></md-input>
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
    import levelUpdate from './../../services/levelUpdate';

    export default {
        name: 'CustomerProfile',
        props: [

        ],
        data() {
            return {
                customers : this.$store.getters.customers,
                levels: this.$store.getters.levels,
                selectedMarket: this.$store.getters.selectedMarket,
                marketCategory: this.$store.getters.marketCategory,
                plainTextItems:  [
                    'Δημογραφικά',
                    'Χρήσης προϊόντος (user-rate)',
                    'Πιστότητα στη μάρκα (loyalty)',
                    'Μέσο ενημέρωσης',
                    'Τρόπου ζωής'
                ]
            }
        },
        components:{
            InformationBanner : InformationBanner
        },
        computed:{
            displayExtraOption() {
                return this.plainTextItems.indexOf(this.marketCategory) === -1;
            }
        },
        created() {
          this.customers.customer1.name = this.$store.getters.markets.market1.name;
          this.customers.customer2.name = this.$store.getters.markets.market2.name;
          this.customers.customer3.name = this.$store.getters.markets.market3.name;
        },
        methods: {
            nextPage(event) {

                this.$router.push('/market-focus');
            },
            saveCustomers(event) {
                event.preventDefault();
                this.levels.landscapeIdentification.subLevels.marketObjective.completed = true;
                this.levels.landscapeIdentification.subLevels.marketObjective.rating= 3;
                this.levels.landscapeIdentification.completed = true;
                this.levels.marketAssessment.locked = false;
                this.$store.dispatch('updateLevels', this.levels);
                levelUpdate.levelUpdate(this.$store, 'marketAssessment');
                this.$store.dispatch('updateCustomers', this.customers);
                this.$router.push('/game-navigation/landscapeIdentification');
            }
        }

    }
</script>

