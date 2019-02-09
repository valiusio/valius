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

                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name"  v-validate="''" v-model="businesses.business1.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κλάδος</label>
                            <md-input name="category" v-validate="''" v-model="businesses.business1.category"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="businesses.business1.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="businesses.business1.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="businesses.business1.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="businesses.business1.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="businesses.business1.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Μέγεθος εταιρίας</label>
                            <md-select name="businessSize" v-validate="''" v-model="businesses.business1.businessSize" >
                                <md-option value="Πολυεθνική">Πολυεθνική</md-option>
                                <md-option value="Μεγάλη">Μεγάλη</md-option>
                                <md-option value="Μεσαία">Μεσαία</md-option>
                                <md-option value="Μικρή">Μικρή</md-option>
                                <md-option value="Πολύ-μικρή">Πολύ-μικρή</md-option>
                                <md-option value="Ελεύθερος επαγγελματίας">Ελεύθερος επαγγελματίας</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name"v-validate="''" v-model="businesses.business2.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κλάδος</label>
                            <md-input name="category" v-validate="''" v-model="businesses.business2.category"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="businesses.business2.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="businesses.business2.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="businesses.business2.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="businesses.business2.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="businesses.business2.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Μέγεθος εταιρίας</label>
                            <md-select name="businessSize" v-validate="''" v-model="businesses.business2.businessSize" >
                                <md-option value="Πολυεθνική">Πολυεθνική</md-option>
                                <md-option value="Μεγάλη">Μεγάλη</md-option>
                                <md-option value="Μεσαία">Μεσαία</md-option>
                                <md-option value="Μικρή">Μικρή</md-option>
                                <md-option value="Πολύ-μικρή">Πολύ-μικρή</md-option>
                                <md-option value="Ελεύθερος επαγγελματίας">Ελεύθερος επαγγελματίας</md-option>
                            </md-select>
                        </md-field>
                    </div>
                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''" v-model="businesses.business3.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κλάδος</label>
                            <md-input name="category" v-validate="''" v-model="businesses.business3.category"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="businesses.business3.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="businesses.business3.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="businesses.business3.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="businesses.business3.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="businesses.business3.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Μέγεθος εταιρίας</label>
                            <md-select name="businessSize" v-validate="''" v-model="businesses.business3.businessSize" >
                                <md-option value="Πολυεθνική">Πολυεθνική</md-option>
                                <md-option value="Μεγάλη">Μεγάλη</md-option>
                                <md-option value="Μεσαία">Μεσαία</md-option>
                                <md-option value="Μικρή">Μικρή</md-option>
                                <md-option value="Πολύ-μικρή">Πολύ-μικρή</md-option>
                                <md-option value="Ελεύθερος επαγγελματίας">Ελεύθερος επαγγελματίας</md-option>
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
        name: 'BusinessProfille',
        props: [

        ],
        data() {
            return {
                businesses : this.$store.getters.businesses,
                levels: this.$store.getters.levels,
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
                this.$store.dispatch('updateBusinesses', this.businesses);
                this.$store.dispatch('updateLevels', this.levels);
                this.$router.push('/game-navigation/landscapeIdentification');
            }
        }

    }
</script>

