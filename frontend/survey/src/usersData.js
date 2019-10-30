const usersData = [
    {
        brandName: "Pame Stasi",
        email: "pamestasi@test.com",
        industryName: "Pame Stasi",
        level: 1,
        questions: {
            1: {
                label: 'Χρησιμοποιείς υπηρεσίες Μεταφοράς;',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            2: {
                label: 'Γνωρίζεις κάποια απο τα παρακάτω brands ?',
                answer: true,
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
                answer: true,
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
            headerQuestion: 'Πόσο σημαντικά είναι τα παρακάτω στοιχεία  για εσάς, όταν αγοράζετε προϊόντα σαν το Pame Stasi?',
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
    },
    {
        brandName: "Mamakita",
        email: "mamakita@test.com",
        industryName: "Mamakita",
        level: 1,
        questions: {
            1: {
                label: 'Χρησιμοποιείς υπηρεσίες Τουρισμού;',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            2: {
                label: 'Γνωρίζεις κάποια απο τα παρακάτω brands ?',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [
                    'Mamakita',
                    'Kids Love Greece',
                    'Ciao Bambino'
                ],
                isTypeSelect: false,
                options: []
            },
            3: {
                label: 'Εχεις ποτε χρησιμοποιήσει το Mamakita;',
                answer: true,
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
                options: ['Ταξιδιώτης με Οικογένοια','Ανεξάρτητος Ταξιδιώτης','Αλλο']
            }
        },
        marketProfileQuestions: {
            1: {
                label: 'Σε ποια από τις παρακάτω κατηγορίες ανήκετε',
                answer: ''
            },
            2: {
                label: 'Για ποιους λόγους αγοράζεται ένα προιόν σαν το Mamakita',
                answers: {
                    1: '',
                    2: '',
                    3: '',
                }
            },
            3: {
                label: 'Πως θα περιγράφατε τον εαυτό σας ως προς τη χρήση του προϊόντος Mamakita;',
                answer: ''
            },
            4: {
                label: 'Ποιος είναι ο τρόπος που προτιμάτε τα brand να επικοινωνούν μαζί σας?',
                answer: ''
            },
            5: {
                label: 'Που αγοράζετε συνήθως προιόντα Mamakita;',
                answer: ''
            }
        },
        productProfile: {
            headerQuestion: 'Πόσο σημαντικά είναι τα παρακάτω στοιχεία  για εσάς, όταν αγοράζετε προϊόντα σαν το Mamakita;',
            criteria: {
                1: {
                    label: 'Brand',
                    name: 'brand',
                    value: '',
                    questionText:'Πόσο ελκυστική είναι για εσάς η εικόνα της μάρκας των προιόντων; Σε κλίμακα απο 1- 10 δώστε ενα σκορ για κάθε ένα απο αυτά',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Mamakita',
                            value: 0
                        },
                        2: {
                            name: 'Kids Love Greece',
                            value: 0
                        },
                        3: {
                            name: 'Ciao Bambino',
                            value: 0
                        },
                        4: {
                            name: 'Αλλο',
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
                            name: 'Mamakita',
                            value: 0
                        },
                        2: {
                            name: 'Kids Love Greece',
                            value: 0
                        },
                        3: {
                            name: 'Ciao Bambino',
                            value: 0
                        },
                        4: {
                            name: 'Αλλο',
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
                            name: 'Mamakita',
                            value: 0
                        },
                        2: {
                            name: 'Kids Love Greece',
                            value: 0
                        },
                        3: {
                            name: 'Ciao Bambino',
                            value: 0
                        },
                        4: {
                            name: 'Αλλο',
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
                            name: 'Mamakita',
                            value: 0
                        },
                        2: {
                            name: 'Kids Love Greece',
                            value: 0
                        },
                        3: {
                            name: 'Ciao Bambino',
                            value: 0
                        },
                        4: {
                            name: 'Αλλο',
                            value: 0
                        }
                    }
                }
            }
        }
    },
    {
        brandName: "Shopmind",
        email: "shopmind@test.com",
        industryName: "Shopmind",
        level: 1,
        questions: {
            1: {
                label: 'Χρησιμοποιείς υπηρεσίες Analytics;',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            2: {
                label: 'Γνωρίζεις κάποια απο τα παρακάτω brands ?',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [
                    'Shopmind',
                    'Nielsen',
                    'EY',
                    'IRI',
                ],
                isTypeSelect: false,
                options: []
            },
            3: {
                label: 'Εχεις ποτε χρησιμοποιήσει το Shopmind;',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            4: {
                label: 'Που θα κατατάσσατε τον εαυτό σας ως προς τον τομέα δραστηριοποίησης σας;',
                answer: '',
                isTypeBoolean: false,
                predefinedAnswers: [],
                isTypeSelect: true,
                options: ['Retailers','Suppliers','Consulting Companies']
            }
        },
        marketProfileQuestions: {
            1: {
                label: 'Σε ποια από τις παρακάτω κατηγορίες ανήκετε',
                answer: ''
            },
            2: {
                label: 'Για ποιους λόγους αγοράζεται ένα προιόν σαν το Shopmind',
                answers: {
                    1: '',
                    2: '',
                    3: '',
                }
            },
            3: {
                label: 'Πως θα περιγράφατε τον εαυτό σας ως προς τη χρήση του προϊόντος Shopmind;',
                answer: ''
            },
            4: {
                label: 'Ποιος είναι ο τρόπος που προτιμάτε τα brand να επικοινωνούν μαζί σας?',
                answer: ''
            },
            5: {
                label: 'Που αγοράζετε συνήθως προιόντα Shopmind;',
                answer: ''
            }
        },
        productProfile: {
            headerQuestion: 'Πόσο σημαντικά είναι τα παρακάτω στοιχεία  για εσάς, όταν αγοράζετε προϊόντα σαν το Shopmind;',
            criteria: {
                1: {
                    label: 'Εμπιστοσύνη',
                    name: 'trust',
                    value: '',
                    questionText:'Ποιο απο τα παρακάτω brand σας παρέχει καλύτερη αίσθηση εμπιστοσύνης; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Shopmind',
                            value: 0
                        },
                        2: {
                            name: 'Nielsen',
                            value: 0
                        },
                        3: {
                            name: 'EY',
                            value: 0
                        },
                        4: {
                            name: 'IRI',
                            value: 0
                        }
                    }
                },
                2: {
                    label: 'Ευχρηστία',
                    name: 'easyToUse',
                    value: '',
                    questionText:'Ποιο απο τα παρακάτω προιόντα έχει μεγαλύτερη ευχρηστία; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Shopmind',
                            value: 0
                        },
                        2: {
                            name: 'Nielsen',
                            value: 0
                        },
                        3: {
                            name: 'EY',
                            value: 0
                        },
                        4: {
                            name: 'IRI',
                            value: 0
                        }
                    }
                },
                3: {
                    label: 'Συντήρηση',
                    name: 'maintenance',
                    value: '',
                    questionText:'Πόσο ικονοποιημένοι είστε απο τη δυνατότητα συντήρησης των παρακάτω προιόντων; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Shopmind',
                            value: 0
                        },
                        2: {
                            name: 'Nielsen',
                            value: 0
                        },
                        3: {
                            name: 'EY',
                            value: 0
                        },
                        4: {
                            name: 'IRI',
                            value: 0
                        }
                    }
                },
                4: {
                    label: 'Εξοικονόμιση χρόνου',
                    name: 'savingTime',
                    value: '',
                    questionText:'Πόσο ικονοποιημένοι είστε απο την εξοικονόμιση χρόνου που σας παρέχουν τα παρακάτω προιόντα; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Shopmind',
                            value: 0
                        },
                        2: {
                            name: 'Nielsen',
                            value: 0
                        },
                        3: {
                            name: 'EY',
                            value: 0
                        },
                        4: {
                            name: 'IRI',
                            value: 0
                        }
                    }
                }
            }
        }
    },
    {
        brandName: "PeopleNet",
        email: "peoplenet@test.com",
        industryName: "PeopleNet",
        level: 1,
        questions: {
            1: {
                label: 'Είναι πρώτη σου φορά που ψάχνεις για δουλειά;',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [],
                isTypeSelect: false,
                options: []
            },
            2: {
                label: 'Γνωρίζεις κάποια απο τα παρακάτω brands ?',
                answer: true,
                isTypeBoolean: true,
                predefinedAnswers: [
                    'Get A Job',
                    'TUV',
                    'Πρόγραμμα Μαθητείας ΟΑΕΔ',
                    'Skywalker',
                ],
                isTypeSelect: false,
                options: []
            },
            3: {
                label: 'Εχεις ποτε χρησιμοποιήσει το GetAJob-Customer Services Certification;',
                answer: true,
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
                options: [
                    'Απόφοιτος ΙΕΚ/ΕΠΑΛ 18-24',
                    'Απόφοιτος TEI/AEI 18-24',
                    'Απόφοιτος ΙΕΚ/ΕΠΑΛ 25-30',
                    'Αλλο'
                ]
            }
        },
        marketProfileQuestions: {
            1: {
                label: 'Σε ποια από τις παρακάτω κατηγορίες ανήκετε',
                answer: ''
            },
            2: {
                label: 'Για ποιους λόγους αγοράζεται ένα προιόν σαν το GetAJob - Customer Services Certification',
                answers: {
                    1: '',
                    2: '',
                    3: '',
                }
            },
            3: {
                label: 'Πως θα περιγράφατε τον εαυτό σας ως προς τη χρήση του προϊόντος GetAJob - Customer Services Certification;',
                answer: ''
            },
            4: {
                label: 'Ποιος είναι ο τρόπος που προτιμάτε τα brand να επικοινωνούν μαζί σας?',
                answer: ''
            },
            5: {
                label: 'Που αγοράζετε συνήθως προιόντα GetAJob - Customer Services Certification;',
                answer: ''
            }
        },
        productProfile: {
            headerQuestion: 'Πόσο σημαντικά είναι τα παρακάτω στοιχεία  για εσάς, όταν αγοράζετε προϊόντα σαν το GetAJob - Customer Services Certification;',
            criteria: {
                1: {
                    label: 'Αξιοπιστία',
                    name: 'reliability',
                    value: '',
                    questionText:'Ποιο απο τα παρακάτω brand έχει μεγαλύτερη αξιοπιστία; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Get A Job',
                            value: 0
                        },
                        2: {
                            name: 'TUV',
                            value: 0
                        },
                        3: {
                            name: 'Πρόγραμμα Μαθητείας ΟΑΕΔ',
                            value: 0
                        },
                        4: {
                            name: 'Career Websites (ex. Skywalker)',
                            value: 0
                        }
                    }
                },
                2: {
                    label: 'Ευαισθησία ως προς την τιμή',
                    name: 'priceSensitive',
                    value: '',
                    questionText:'Πόσο ικανοποιημένοι είστε με την τιμή των παρακάτω προιόντων; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Get A Job',
                            value: 0
                        },
                        2: {
                            name: 'TUV',
                            value: 0
                        },
                        3: {
                            name: 'Πρόγραμμα Μαθητείας ΟΑΕΔ',
                            value: 0
                        },
                        4: {
                            name: 'Career Websites (ex. Skywalker)',
                            value: 0
                        }
                    }
                },
                3: {
                    label: 'Ποιότητα επιμόρφωσης',
                    name: 'quality',
                    value: '',
                    questionText:'Πόσο ικανοποιημένοι είστε με την ποιότητα επιμόρφωσης που σας παρέχουν τα παρακάτω προιόντα; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Get A Job',
                            value: 0
                        },
                        2: {
                            name: 'TUV',
                            value: 0
                        },
                        3: {
                            name: 'Πρόγραμμα Μαθητείας ΟΑΕΔ',
                            value: 0
                        },
                        4: {
                            name: 'Career Websites (ex. Skywalker)',
                            value: 0
                        }
                    }
                },
                4: {
                    label: 'Αποτέλεσμα',
                    name: 'result',
                    value: '',
                    questionText:'Πόσο ικανοποιημένοι είστε με τα αποτελέσματα που σας παρέχουν τα παρακάτω brands; Σε μια κλίμακα από 1 -10 δώστε ένα σκορ για κάθε ένα από αυτά.',
                    productsBrandsAttractiveness: {
                        1: {
                            name: 'Get A Job',
                            value: 0
                        },
                        2: {
                            name: 'TUV',
                            value: 0
                        },
                        3: {
                            name: 'Πρόγραμμα Μαθητείας ΟΑΕΔ',
                            value: 0
                        },
                        4: {
                            name: 'Career Websites (ex. Skywalker)',
                            value: 0
                        }
                    }
                }
            }
        }
    }
];


export { usersData };
