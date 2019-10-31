const AttractivenessCriteria =
    [
            {
                name: 'size',
                label:'Μέγεθος (money, units or both)',
                category: "segmentFactors",
                defaultValue: {
                    low: '< €1Μ',
                    medium: '€1Μ - €5Μ',
                    high: '>€5Μ'
                }
            },
            {
                name: 'profitability',
                label:'Κερδοφορία',
                category: "segmentFactors",
                defaultValue: {
                    low: '<10%',
                    medium: '10-15%',
                    high: '>15%'
                }
            },
            {
                name: 'priceSensitive',
                label:'Τιμή',
                category: "segmentFactors",
                defaultValue: {
                    low: 'high price elasticity',
                    medium: 'medium price elasticity',
                    high: 'low price elasticity'
                }
            },
            {
                name: 'growthRate',
                label:'Ρυθμός ανάπτυξης',
                category: "segmentFactors",
                defaultValue: {
                    low: 'GNP -2.5%',
                    medium: 'GNP',
                    high: '+2.5%'
                }
            },
            {
                name: 'vulnerability',
                label:'Ευπάθεια',
                category: "segmentFactors",
                defaultValue: {
                    low: 'high vulnerability',
                    medium: 'medium vulnerability',
                    high: 'low vulnerability'
                }
            },
            {
                name: 'accessibility',
                label:'Προσβασιμότητα',
                category: "segmentFactors",
                defaultValue: {
                    low: 'not accessible',
                    medium: 'normal accessiblity',
                    high: 'easily accesible'
                }
            },
            {
                name: 'responseTense',
                label:'Τάση ανταπόκρισης στις ενέργειες μας',
                category: "segmentFactors",
                defaultValue: {
                    low: 'low responsiveness',
                    medium: 'medium responsiveness',
                    high: 'high responsiveness'
                }
            },
            {
                name: 'negotiatingPower',
                label:'Διαπραγματευτική δύναμη',
                category: "segmentFactors",
                defaultValue: {
                    low: 'weak power of buyers',
                    medium: 'normal power of buyers',
                    high: 'strong power of buyers'
                }
            },
            {
                name: 'differentiationSection',
                label:'Διαφοροποίηση τμήματος',
                category: "segmentFactors",
                defaultValue: {
                    low: 'high differentiation',
                    medium: 'medium differentiation',
                    high: 'low differentiation'
                }
            },
            {
                name: 'seasonalShopping',
                label:'Εποχικότητα αγορών',
                category: "segmentFactors",
                defaultValue: {
                    low: 'high cyclicality',
                    medium: 'medium cyclicality',
                    high: 'low cyclicality'
                }
            },
            {
                name: 'consumerTrends',
                label:'Τάση Καταναλωτισμού',
                category: "segmentFactors",
                defaultValue: {
                    low: 'low share of wallet',
                    medium: 'medium share of wallet',
                    high: 'high share of wallet'
                }
            },
            {
                name: 'intensityOfCompetition',
                label: 'Ένταση του ανταγωνισμού',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'competition is high',
                    medium: 'competition is medium',
                    high: 'competition is low'
                }
            },
            {
                name: 'threatOfNewProducts',
                label: 'Απειλή από νέα προϊόντα',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high threat of new products',
                    medium: 'medium threat of new products',
                    high: 'low threat of new products'
                }
            },
            {
                name: 'threatOfNewTechnologies',
                label: 'Απειλή από νέες τεχνολογίες',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high threat of new technologies',
                    medium: 'medium threat of new technologies',
                    high: 'low threat of new technologies'
                }
            },
            {
                name: 'complexity',
                label: 'Πολυπλοκότητα',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high segment complexity',
                    medium: 'medium segment complexity',
                    high: 'low segment complexity'
                }
            },
            {
                name: 'variabilityTechnology',
                label: 'Μεταβλητότητα τεχνολογίας',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high volatility of technology',
                    medium: 'medium volatility of technology',
                    high: 'low volatility of technology'
                }
            },
            {
                name: 'usePartnerships',
                label: 'Χρήση συνεργασιών & partnerships',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'few synergies/partnerships',
                    medium: 'some synergies/partnerships',
                    high: 'many synergies/partnerships'
                }
            },
            {
                name: 'changesToMarketShares',
                label: 'Αλλαγές στα μερίδια αγοράς',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high level of changes in share',
                    medium: 'medium level of changes in share',
                    high: 'low level of changes in share'
                }
            },
            {
                name: 'useOfLicenses',
                label: 'Χρήση αδειών',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'not licensing needed',
                    medium: 'so-so licensing needed',
                    high: 'licensing needed'
                }
            },
            {
                name: 'maturityOfTechnology',
                label: 'Ωριμότητα τεχνολογίας',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'high maturity of technology',
                    medium: 'medium maturity of technology',
                    high: 'low maturity of technology'
                }
            },
            {
                name: 'leverageFactors',
                label: 'Παράγοντες μόχλευσης (e.g οικονομίες κλίμακας, εμπειρία)',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'low leveraging factors',
                    medium: 'medium leveraging factors',
                    high: 'high leveraging factors'
                }
            },
            {
                name: 'negotiatingPowerSuppliers',
                label: 'Διαπραγματευτική δύναμη προμηθευτών',
                category: "competitiveFactors",
                defaultValue: {
                    low: 'low leveraging factors',
                    medium: 'medium leveraging factors',
                    high: 'high leveraging factors'
                }
            },
            {
                name:'socialBeliefs',
                label: 'Κοινωνικές Πεποιθήσεις (νόρμες)',
                category: "socialFactors",
                defaultValue: {
                    low: 'high level of norms',
                    medium: 'medium level of norms',
                    high: 'low level of norms'
                }
            },
            {
                name:'complexWayOfLife',
                label: 'Πολύπλοκος τρόπος ζωής',
                category: "socialFactors",
                defaultValue: {
                    low: 'high complexity of lifestyle',
                    medium: 'normal complexity of lifestyle',
                    high: 'low complexity of lifestyle'
                }
            },
            {
                name:'legislationAndRegulations',
                label: 'Νομοθεσίες & κανονισμοί',
                category: "socialFactors",
                defaultValue: {
                    low: 'low level of compliance',
                    medium: 'medium level of compliance',
                    high: 'high level of compliance'
                }
            },
            {
                name:'influenceFromTrends',
                label: 'Επιρροή από trends',
                category: "socialFactors",
                defaultValue: {
                    low: 'high influence of trends',
                    medium: 'normal influence of trends',
                    high: 'low influence of trends'
                }
            },
            {
                name:'influenceFromMKO',
                label: 'Επιρροή από MKO',
                category: "socialFactors",
                defaultValue: {
                    low: 'strongly affected by NGOs',
                    medium: 'affected normlaly by NGOs',
                    high: 'affected low by NGOs'
                }
            },
            {
                name:'socialAcceptance',
                label: 'Κοινωνική αποδοχή',
                category: "socialFactors",
                defaultValue: {
                    low: 'desire for social acceptrance',
                    medium: 'desire for social acceptrance',
                    high: 'desire for social acceptrance'
                }
            },
            {
                name:'influenceFromCommunities',
                label: 'Επιρροή από communities',
                category: "socialFactors",
                defaultValue: {
                    low: 'influenced by communities',
                    medium: 'so-so influenced by communities',
                    high: 'not influenced by communities'
                }
            },
            {
                name:'influenceFromThePoliticianSystem',
                label: 'Επιρροή από το πολιτικό σύστημα',
                category: "socialFactors",
                defaultValue: {
                    low: 'strong influence of political system',
                    medium: 'normal influence of political system',
                    high: 'strong influence of political system'
                }
            },
            {
                name:'onlineXP',
                label: 'Online Εμπειρία',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'innovation',
                label: 'Καινοτομία',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'appsSoftware',
                label: 'App',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'customerExperience',
                label: 'Εμπειρία του πελάτη',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'brand',
                label: 'Brand',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'status',
                label: 'Κύρος',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'content',
                label: 'Περιεχόμενο',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'trust',
                label: 'Εμπιστοσύνη',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'easyToUse',
                label: 'Ευχρηστία',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'maintenance',
                label: 'Συντήρηση',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'savingTime',
                label: 'Εξοικονόμιση χρόνου',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'reliability',
                label: 'Αξιοπιστία',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'quality',
                label: 'Ποιότητα',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },
            {
                name:'result',
                label: 'Αποτέλεσμα',
                category: "socialFactors",
                defaultValue: {
                    low: '',
                    medium: '',
                    high: ''
                }
            },

        ];

export default { AttractivenessCriteria : AttractivenessCriteria }
