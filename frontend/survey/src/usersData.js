const usersData = [
    {
        brandName: "Pame Stasi",
        email: "pamestasi@test.com",
        level: 1,
        questions: {
            1: {
                label: 'Χρησιμοποιείται υπηρεσίες Transportation ?',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: []
            },
            2: {
                label: 'Γνωρίζεις τα brands ... ?',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: [
                    'Pame Stasi',
                    'OASA',
                    'Google Maps',
                    'Moovit',
                ]
            },
            3: {
                label: 'Εχεις ποτε συνεργαστεί με PameStasi ?',
                answer: '',
                isTypeBoolean: true,
                predefinedAnswers: []
            },
            4: {
                label: 'Που θα έβαζες τον εαυτό σου ως προς τη χρήση του προιόντος; ',
                answer: '',
                isTypeBoolean: false,
                predefinedAnswers: []
            }
        },
        marketProfileQuestions: {
            1: {
                label: 'Σε ποια από τις παρακάτω κατηγορίες ανήκετε',
                answer: ''
            },
            2: {
                label: 'Για ποιους λόγους αγοράζεται ένα προιόν σαν το PameStasi',
                answers: {
                    1: '',
                    2: '',
                    3: '',
                }
            },
            3: {
                label: 'Πως θα περιγράφατε τον εαυτό σου ως προς τη χρήση του προϊόντος PameStasi',
                answer: ''
            },
            4: {
                label: 'Ποιος είναι ο τρόπος που προτιμάτε τα brand να επικοινωνούν μαζί σας?',
                answer: ''
            },
            5: {
                label: 'Που αγοράζετε συνήθως προιόντα PameStasi',
                answer: ''
            }
        },
        productProfile: {
            criteria: {
                1: {
                    label: 'Online Εμπειρία',
                    name: 'onlineXP',
                    value: '',
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
