<template>

    <div class="customer-profile">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Σε ποια παράμετρο βασίστηκες για την τμηματοποίηση της αγοράς σου;</h1>
                <p>Επίλεξε μία από τις παρακάτω παραμέτρους.</p>
            </information-banner>
            <form @submit="saveCustomers">
                <div class="customer-profile__forms">
                    <div v-for="i in 3" class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name"  v-validate="''" v-model="businesses[`business${i}`].name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κλάδος</label>
                            <md-input name="category" v-validate="''" v-model="businesses[`business${i}`].category"></md-input>
                        </md-field>
                        <md-field v-if="displayExtraOption">
                            <label>{{ marketCategory }}</label>
                            <md-input name="category" v-validate="''" v-model="businesses[`business${i}`].selectedBusinessCategoryAnswer"></md-input>
                        </md-field>
                        <md-field>
                            <label>Χρήση προϊόντος</label>
                            <md-select v-if="marketCategory !== 'Χρήσης προϊόντος (user-rate)'" name="productUsage" v-validate="''" v-model="businesses[`business${i}`].productUsage">
                                <md-optgroup>
                                    <md-option value="Υψηλή χρήση" >Υψηλή χρήση</md-option>
                                    <md-option value="Τακτική χρήση" >Τακτική χρήση</md-option>
                                    <md-option value="Πρώτη φορά" >Πρώτη φορά</md-option>
                                    <md-option value="Μή-χρήση">Μή χρήση</md-option>
                                    <md-option value="Δυνητική χρήση">Δυνητική χρήση</md-option>
                                </md-optgroup>
                            </md-select>
                            <md-input v-else name="productUsage" v-validate="''" v-model="businesses[`business${i}`].productUsage"></md-input>
                        </md-field>
                        <md-field>
                            <label>Επιθυμητό χαρακτηριστικό</label>
                            <md-input name="desiredFeature" v-validate="''" v-model="businesses[`business${i}`].desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select v-if="marketCategory !== 'Πιστότητα στη μάρκα (loyalty)'" name="brandFidelity" v-validate="''" v-model="businesses[`business${i}`].brandFidelity">
                                <md-optgroup>
                                    <md-option value="Πιστοί/ Ικανοποιημένοι" >Πιστοί/ Ικανοποιημένοι</md-option>
                                    <md-option value="Πρώιμοι πελάτες" >Πρώιμοι πελάτες</md-option>
                                    <md-option value="Ευκαιριακοί" >Ευκαιριακοί</md-option>
                                    <md-option value="Μη ικανοποιημένο">Μη ικανοποιημένο</md-option>
                                    <md-option value="Μη πληροφορημένοι">Μη πληροφορημένοι</md-option>
                                </md-optgroup>
                            </md-select>
                            <md-input v-else name="brandFidelity" v-validate="''" v-model="businesses[`business${i}`].brandFidelity"></md-input>
                        </md-field>
                        <md-field>
                            <label>Mέσα επικοινωνίας</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="businesses[`business${i}`].communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="businesses[`business${i}`].distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Μέγεθος εταιρίας</label>
                            <md-select v-if="marketCategory !== 'Μέγεθος εταιρίας'" name="businessSize" v-validate="''" v-model="businesses[`business${i}`].businessSize" >
                                <md-option value="Πολυεθνική">Πολυεθνική</md-option>
                                <md-option value="Μεγάλη">Μεγάλη</md-option>
                                <md-option value="Μεσαία">Μεσαία</md-option>
                                <md-option value="Μικρή">Μικρή</md-option>
                                <md-option value="Πολύ-μικρή">Πολύ-μικρή</md-option>
                                <md-option value="Ελεύθερος επαγγελματίας">Ελεύθερος επαγγελματίας</md-option>
                            </md-select>
                            <md-input v-else name="businessSize" v-validate="''" v-model="businesses[`business${i}`].businessSize"></md-input>
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
        name: 'BusinessProfille',
        props: [

        ],
        data() {
            return {
                businesses : this.$store.getters.businesses,
                levels: this.$store.getters.levels,
                selectedMarket: this.$store.getters.selectedMarket,
                marketCategory: this.$store.getters.marketCategory,
                plainTextItems:  [
                    'Τομέας',
                    'Χρήσης προϊόντος (user-rate)',
                    'Πιστότητα στη μάρκα (loyalty)',
                    'Μέγεθος εταιρίας'
                ]
            }
        },
        computed:{
            displayExtraOption() {
                return this.plainTextItems.indexOf(this.marketCategory) === -1;
            }
        },
        components:{
            InformationBanner : InformationBanner
        },
        created(){
            this.businesses.business1.name = this.$store.getters.markets.market1.name,
            this.businesses.business2.name = this.$store.getters.markets.market2.name,
            this.businesses.business3.name = this.$store.getters.markets.market3.name
        },
        methods: {
            saveCustomers(event) {
                event.preventDefault();
                this.levels.landscapeIdentification.subLevels.marketObjective.completed = true;
                this.levels.landscapeIdentification.subLevels.marketObjective.rating= 3;
                this.levels.landscapeIdentification.completed = true;
                this.levels.marketAssessment.locked = false;
                this.$store.dispatch('updateBusinesses', this.businesses);
                levelUpdate.levelUpdate(this.$store, 'marketAssessment');
                this.$store.dispatch('updateLevels', this.levels);
                this.$router.push('/game-navigation/landscapeIdentification');
            }
        }
    }
</script>

