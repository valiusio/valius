const AttractivenessCriteria = {
    segmentFactors : {
        name: 'segmentFactors',
        label : 'segmentFactors',
        factors : [
            {name: 'size', label:'Μέγεθος (money, units or both)'},
            {name: 'profitability', label:'Κερδοφορία'},
            {name: 'priceSensitive', label:'Ευαισθησία ως προς την τιμή'},
            {name: 'growthRate', label:'Ρυθμός ανάπτυξης'},
            {name: 'vulnerability', label:'Ευπάθεια'},
            {name: 'accessibility', label:'Προσβασιμότητα'},
            {name: 'responseTense', label:'Τάση ανταπόκρισης στις ενέργειες μας'},
            {name: 'negotiatingPower', label:'Διαπραγματευτική δύναμη'},
            {name: 'differentiationSection', label:'Διαφοροποίηση τμήματος'},
            {name: 'seasonalShopping', label:'Εποχικότητα αγορών'},
            {name: 'consumerTrends', label:'Τάση Καταναλωτισμού'},
        ]
    },
    socialFactors : {
        name: 'socialFactors',
        label: 'socialFactors Factors',
        factors: [
            {name: 'intensityOfCompetition', label: 'Ένταση του ανταγωνισμού'},
            {name: 'threatOfNewProducts', label: 'Απειλή από νέα προϊόντα'},
            {name: 'complexity', label: 'Πολυπλοκότητα'},
            {name: 'variabilityTechnology', label: 'Μεταβλητότητα τεχνολογίας'},
            {name: 'usePartnerships', label: 'Χρήση συνεργασιών & partnerships'},
            {name: 'changesToMarketShares', label: 'Αλλαγές στα μερίδια αγοράς'},
            {name: 'useOfLicenses', label: 'Χρήση αδειών'},
            {name: 'maturityOfTechnology', label: 'Ωριμότητα τεχνολογίας'},
            {name: 'leverageFactors', label: 'Παράγοντες μόχλευσης (e.g οικονομίες κλίμακας, εμπειρία)'},
            {name: 'negotiatingPowerSuppliers', label: 'Διαπραγματευτική δύναμη προμηθευτών'},
        ]
    },
    competitiveFactors : {
        name: 'competitiveFactors',
        label: 'competitiveFactors',
        factors: [
            {name:'socialBeliefs', label: 'Κοινωνικές Πεποιθήσεις (νόρμες)'},
            {name:'complexWayOfLife', label: 'Πολύπλοκος τρόπος ζωής'},
            {name:'legislationAndRegulations', label: 'Νομοθεσίες & κανονισμοί'},
            {name:'influenceFromTrends', label: 'Επιρροή από trends'},
            {name:'influenceFromMKO', label: 'Επιρροή από MKO'},
            {name:'socialAcceptance', label: 'Κοινωνική αποδοχή'},
            {name:'influenceFromCommunities', label: 'Επιρροή από communities'},
            {name:'influenceFromThePoliticianSystem', label: 'Επιρροή από το πολιτικό σύστημα'}
        ]
    }
};

export { AttractivenessCriteria }
