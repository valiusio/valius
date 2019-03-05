const AttractivenessCriteria = {
    segmentFactors : {
        name: 'segmentFactors',
        label : 'segmentFactors',
        factors : [
            {
                name: 'size',
                label:'Μέγεθος (money, units or both)',
                placeholders: {
                    low: 'e.g. < €1Μ',
                    medium: 'e.g. €1Μ - €5Μ',
                    high: 'e.g. >€5Μ'
                }
            },
            {
                name: 'profitability',
                label:'Κερδοφορία',
                placeholders: {
                    low: 'e.g. <10%',
                    medium: 'e.g. 10-15%',
                    high: 'e.g. >15%'
                }
            },
            {
                name: 'priceSensitive',
                label:'Ευαισθησία ως προς την τιμή',
                placeholders: {
                    low: 'e.g. high price elasticity',
                    medium: 'e.g. medium price elasticity',
                    high: 'e.g. low price elasticity'
                }
            },
            {
                name: 'growthRate',
                label:'Ρυθμός ανάπτυξης',
                placeholders: {
                    low: 'e.g. GNP -2.5%',
                    medium: 'e.g. GNP',
                    high: 'e.g. +2.5%'
                }
            },
            {
                name: 'vulnerability',
                label:'Ευπάθεια',
                placeholders: {
                    low: 'e.g. high vulnerability',
                    medium: 'e.g. medium vulnerability',
                    high: 'e.g. low vulnerability'
                }
            },
            {
                name: 'accessibility',
                label:'Προσβασιμότητα',
                placeholders: {
                    low: 'e.g. not accessible',
                    medium: 'e.g. normal accessiblity',
                    high: 'e.g. easily accesible'
                }
            },
            {
                name: 'responseTense',
                label:'Τάση ανταπόκρισης στις ενέργειες μας',
                placeholders: {
                    low: 'e.g. low responsiveness',
                    medium: 'e.g. medium responsiveness',
                    high: 'e.g. high responsiveness'
                }
            },
            {
                name: 'negotiatingPower',
                label:'Διαπραγματευτική δύναμη',
                placeholders: {
                    low: 'e.g. weak power of buyers',
                    medium: 'e.g. normal power of buyers',
                    high: 'e.g. strong power of buyers'
                }
            },
            {
                name: 'differentiationSection',
                label:'Διαφοροποίηση τμήματος',
                placeholders: {
                    low: 'e.g. high differentiation',
                    medium: 'e.g. medium differentiation',
                    high: 'e.g. low differentiation'
                }
            },
            {
                name: 'seasonalShopping',
                label:'Εποχικότητα αγορών',
                placeholders: {
                    low: 'e.g. high cyclicality',
                    medium: 'e.g. medium cyclicality',
                    high: 'e.g. low cyclicality'
                }
            },
            {
                name: 'consumerTrends',
                label:'Τάση Καταναλωτισμού',
                placeholders: {
                    low: 'e.g. low share of wallet',
                    medium: 'e.g. medium share of wallet',
                    high: 'e.g. high share of wallet'
                }
            },
        ]
    },
    competitiveFactors: {
        name: 'socialFactors',
        label: 'socialFactors Factors',
        factors: [
            {
                name: 'intensityOfCompetition',
                label: 'Ένταση του ανταγωνισμού',
                placeholders: {
                    low: 'e.g. competition is high',
                    medium: 'e.g. competition is medium',
                    high: 'e.g. competition is low'
                }
            },
            {
                name: 'threatOfNewProducts',
                label: 'Απειλή από νέα προϊόντα',
                placeholders: {
                    low: 'e.g. high threat of new products',
                    medium: 'e.g. medium threat of new products',
                    high: 'e.g. low threat of new products'
                }
            },
            {
                name: 'threatOfNewTechnologies',
                label: 'Απειλή από νέες τεχνολογίες',
                placeholders: {
                    low: 'e.g. high threat of new technologies',
                    medium: 'e.g. medium threat of new technologies',
                    high: 'e.g. low threat of new technologies'
                }
            },
            {
                name: 'complexity',
                label: 'Πολυπλοκότητα',
                placeholders: {
                    low: 'e.g. high segment complexity',
                    medium: 'e.g. medium segment complexity',
                    high: 'e.g.low segment complexity'
                }
            },
            {
                name: 'variabilityTechnology',
                label: 'Μεταβλητότητα τεχνολογίας',
                placeholders: {
                    low: 'e.g. high volatility of technology',
                    medium: 'e.g. medium volatility of technology',
                    high: 'e.g. low volatility of technology'
                }
            },
            {
                name: 'usePartnerships',
                label: 'Χρήση συνεργασιών & partnerships',
                placeholders: {
                    low: 'e.g. few synergies/partnerships',
                    medium: 'e.g. some synergies/partnerships',
                    high: 'e.g. many synergies/partnerships'
                }
            },
            {
                name: 'changesToMarketShares',
                label: 'Αλλαγές στα μερίδια αγοράς',
                placeholders: {
                    low: 'e.g. high level of changes in share',
                    medium: 'e.g. medium level of changes in share',
                    high: 'e.g. low level of changes in share'
                }
            },
            {
                name: 'useOfLicenses',
                label: 'Χρήση αδειών',
                placeholders: {
                    low: 'e.g. not licensing needed',
                    medium: 'e.g. so-so licensing needed',
                    high: 'e.g. licensing needed'
                }
            },
            {
                name: 'maturityOfTechnology',
                label: 'Ωριμότητα τεχνολογίας',
                placeholders: {
                    low: 'e.g. high maturity of technology',
                    medium: 'e.g. medium maturity of technology',
                    high: 'e.g. low maturity of technology'
                }
            },
            {
                name: 'leverageFactors',
                label: 'Παράγοντες μόχλευσης (e.g οικονομίες κλίμακας, εμπειρία)',
                placeholders: {
                    low: 'e.g. low leveraging factors',
                    medium: 'e.g. medium leveraging factors',
                    high: 'e.g. high leveraging factors'
                }
            },
            {
                name: 'negotiatingPowerSuppliers',
                label: 'Διαπραγματευτική δύναμη προμηθευτών',
                placeholders: {
                    low: 'e.g. low leveraging factors',
                    medium: 'e.g. medium leveraging factors',
                    high: 'e.g. high leveraging factors'
                }
            },
        ]
    },
    socialFactors  : {
        name: 'competitiveFactors',
        label: 'competitiveFactors',
        factors: [
            {
                name:'socialBeliefs',
                label: 'Κοινωνικές Πεποιθήσεις (νόρμες)',
                placeholders: {
                    low: 'e.g. high level of norms',
                    medium: 'e.g. medium level of norms',
                    high: 'e.g. low level of norms'
                }
            },
            {
                name:'complexWayOfLife',
                label: 'Πολύπλοκος τρόπος ζωής',
                placeholders: {
                    low: 'e.g. high complexity of lifestyle',
                    medium: 'e.g. normal complexity of lifestyle',
                    high: 'e.g. low complexity of lifestyle'
                }
            },
            {
                name:'legislationAndRegulations',
                label: 'Νομοθεσίες & κανονισμοί',
                placeholders: {
                    low: 'e.g. low level of compliance',
                    medium: 'e.g. medium level of compliance',
                    high: 'e.g. high level of compliance'
                }
            },
            {
                name:'influenceFromTrends',
                label: 'Επιρροή από trends',
                placeholders: {
                    low: 'e.g. high influence of trends',
                    medium: 'e.g. normal influence of trends',
                    high: 'e.g. low influence of trends'
                }
            },
            {
                name:'influenceFromMKO',
                label: 'Επιρροή από MKO',
                placeholders: {
                    low: 'e.g. strongly affected by NGOs',
                    medium: 'e.g. affected normlaly by NGOs',
                    high: 'e.g. affected low by NGOs'
                }
            },
            {
                name:'socialAcceptance',
                label: 'Κοινωνική αποδοχή',
                placeholders: {
                    low: 'e.g. desire for social acceptrance',
                    medium: 'e.g. desire for social acceptrance',
                    high: 'e.g. desire for social acceptrance'
                }
            },
            {
                name:'influenceFromCommunities',
                label: 'Επιρροή από communities',
                placeholders: {
                    low: 'e.g. influenced by communities',
                    medium: 'e.g. so-so influenced by communities',
                    high: 'e.g. not influenced by communities'
                }
            },
            {
                name:'influenceFromThePoliticianSystem',
                label: 'Επιρροή από το πολιτικό σύστημα',
                placeholders: {
                    low: 'e.g. strong influence of political system',
                    medium: 'e.g. normal influence of political system',
                    high: 'e.g. strong influence of political system'
                }
            }
        ]
    }
};
const availableFactors = [
        ...AttractivenessCriteria.segmentFactors.factors,
        ...AttractivenessCriteria.socialFactors.factors,
        ...AttractivenessCriteria.competitiveFactors.factors,
];

export default { AttractivenessCriteria : AttractivenessCriteria ,availableFactors : availableFactors  }
