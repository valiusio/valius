const usersData = [
    {
        brandName: "Pame Stasi",
        email: "pamestasi@test.com",
        industryName: "Pame Stasi",
        level: 1,
        questions: {
            1: {
                label: 'Χρησιμοποιείς υπηρεσίες Μεταφοράς;',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            2: {
                label: 'Γνωρίζεις κάποια απο τα παρακάτω brands ?',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: [
                    'Pame Stasi',
                    'OASA',
                    'Google Maps',
                    'Moovit',
                ],
                isTypeSelect: false,
                options: []
            },
            3: {
                label: 'Εχεις ποτε χρησιμοποιήσει το Pame Stasi?',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            4: {
                label: 'Που θα κατατάσσατε τον εαυτό σας ως προς το προφίλ σας;',
                answer: '',
                isTypeBoolean: false,
                predefinedAnswers: [],
                isTypeSelect: true,
                options: ['Εργαζόμενοι','Φοιτητές']
            }
        },
        marketProfileQuestions: {
            1: {
                label: 'Σε ποια από τις παρακάτω κατηγορίες ανήκετε',
                answer: ''
            },
            2: {
                label: 'Για ποιους λόγους αγοράζεται ένα προιόν σαν το Pame Stasi;',
                answers: {
                    1: '',
                    2: '',
                    3: '',
                }
            },
            3: {
                label: 'Πως θα περιγράφατε τον εαυτό σας ως προς τη χρήση του προϊόντος Pame Stasi;',
                answer: ''
            },
            4: {
                label: 'Ποιος είναι ο τρόπος που προτιμάτε τα brand να επικοινωνούν μαζί σας?',
                answer: ''
            },
            5: {
                label: 'Που αγοράζετε συνήθως προιόντα Pame stasi;',
                answer: ''
            }
        },
        productProfile: {
            headerQuestion: 'Πόσο σημαντικά είναι τα παρακάτω στοιχεία  για εσάς, όταν αγοράζετε προϊόντα σαν το Shopmind?',
            criteria: {
                1: {
                    label: 'Online Εμπειρία',
                    name: 'onlineXP',
                    value: '',
                    questionText:'Πόσο ελκυστική είναι για εσάς η online εμπειρία των  παρακάτω  προϊόντων; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'PameStasi',
                            value: 0
                        },
                        2: {
                            name: 'OASA',
                            value: 0
                        },
                        3: {
                            name: 'Google Maps',
                            value: 0
                        },
                        4: {
                            name: 'Moovit',
                            value: 0
                        }
                    }
                },
                2: {
                    label: 'Καινοτομία',
                    name: 'innovation',
                    value: '',
                    questionText:'Πόσο καινοτόμα είναι τα αυτά τα προϊόντα; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'PameStasi',
                            value: 0
                        },
                        2: {
                            name: 'OASA',
                            value: 0
                        },
                        3: {
                            name: 'Google Maps',
                            value: 0
                        },
                        4: {
                            name: 'Moovit',
                            value: 0
                        }
                    }
                },
                3: {
                    label: 'App',
                    name: 'appsSoftware',
                    value: '',
                    questionText:'Πόσο ικανοποιήμενοι είστε από την mobile εφαρμογή (app) των παρακάτω προϊόντων; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'PameStasi',
                            value: 0
                        },
                        2: {
                            name: 'OASA',
                            value: 0
                        },
                        3: {
                            name: 'Google Maps',
                            value: 0
                        },
                        4: {
                            name: 'Moovit',
                            value: 0
                        }
                    }
                },
                4: {
                    label: 'Εμπειρία του πελάτη',
                    name: 'customerExperience',
                    value: '',
                    questionText:'Πoιο από τα παρακάτω brand σας προσφέρει πιο ευχάριστη εμπειρία; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'PameStasi',
                            value: 0
                        },
                        2: {
                            name: 'OASA',
                            value: 0
                        },
                        3: {
                            name: 'Google Maps',
                            value: 0
                        },
                        4: {
                            name: 'Moovit',
                            value: 0
                        }
                    }
                }
            }
        }
    }
];


export { usersData };
