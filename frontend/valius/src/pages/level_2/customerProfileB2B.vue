<template>

    <div class="customer-profile">
        <div class="container container--exlg">
            <information-banner
                type="danger"
            >
                <h1>Ας χτίσουμε το προφίλ των πελατών σου για κάθε τμήμα της αγοράς!</h1>
                <p>Συμπλήρωσε τα παρακάτω κενά ή επίλεξε την κατάλληλο στοιχείο.</p>
            </information-banner>
            <form>
            <div class="customer-profile__forms">

                    <div class="customer-profile__form-container">
                        <md-field>
                            <label>Όνομα τμήματος</label>
                            <md-input name="name" v-validate="''" v-model="department1.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="department1.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="department1.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="department1.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="department1.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="department1.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="department1.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="department1.lifeStyle" multiple >
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
                            <md-input name="name" v-validate="''" v-model="department2.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="department2.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="department2.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="department2.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="department2.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="department2.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="department2.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="department2.lifeStyle" multiple >
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
                            <md-input name="name" v-validate="''" v-model="department3.name"></md-input>
                        </md-field>
                        <md-field>
                            <label>Κύριο Δημογραφικό στοιχείο</label>
                            <md-input name="demographicItem" v-validate="''" v-model="department3.demographicItem"></md-input>
                        </md-field>
                        <md-field>
                            <label>Βαθμός χρήσης προϊόντος μας</label>
                            <md-select name="productUsage" v-validate="''" v-model="department3.productUsage">
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
                            <md-input name="desiredFeature" v-validate="''" v-model="department3.desiredFeature"></md-input>
                        </md-field>

                        <md-field>
                            <label>Πιστότητα στη μάρκα</label>
                            <md-select name="brandFidelity" v-validate="''" v-model="department3.brandFidelity">
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
                            <md-select name="communicationMeans" v-validate="''" v-model="department3.communicationMeans" multiple >
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
                            <md-input name="distributionChannel" v-validate="''" v-model="department3.distributionChannel"></md-input>
                        </md-field>
                        <md-field>
                            <label>Τρόπος ζωής</label>
                            <md-select name="communicationMeans" v-validate="''" v-model="department3.lifeStyle" multiple >
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
        data(){
            return {
                department1 : {
                    name : '',
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
                department2 : {
                    name : '',
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
                department3 : {
                    name : '',
                    demographicItem: '',
                    productUsage: '',
                    desiredFeature: '',
                    brandFidelity: '',
                    communicationMeans: [],
                    distributionChannel: '',
                    lifeStyle: []
                },
            }
        },
        components:{
            InformationBanner : InformationBanner
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

