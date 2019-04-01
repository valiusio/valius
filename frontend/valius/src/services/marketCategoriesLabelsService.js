const marketCategoriesLabels = {
    b2c:[
        {
            value:"Αντιλαμβανόμενα Οφέλη",
            label:"Αντιλαμβανόμενο Όφελος"
        },
        {
            value:"Κοινωνικό - Οικονομικό",
            label:"Κύριο Κοινωνικό-Οικονομικό Στοιχείο"
        },
        {
            value:"Γεωγραφικά",
            label:"Κύριο Γεωγραφικό στοιχείο"
        },
        {
            value:"Τρόπου ζωής",
            label:"Στοιχείο Τρόπου Ζωής"
        },
        {
            value:"Μέσο ενημέρωσης",
            label:"Κύριο Μέσο Ενημέρωσης"
        },
    ],
    b2b:[
        {
            value:"Πιστότητα στη μάρκα (loyalty)",
            label:"Πιστότητα στη μάρκα"
        },
        {
            value:"Χρήσης προϊόντος (user-rate)",
            label:"Χρήσης προϊόντος"
        },
        {
            value:"Ευαισθησία στην τιμή (sensitivity)",
            label:"Ευαισθησία στην τιμή"
        },
        {
            value:"Μέγεθος αγορών",
            label:"Μέγεθος αγορών"
        },
        {
            value:"Τομέας",
            label:"Τομέας"
        },
        {
            value:"Status Χρήστη",
            label:"Status Χρήστη"
        },
        {
            value:"Γεωγραφικά",
            label:"Κύριο Γεωγραφικό στοιχείο"
        },
        {
            value:"Μέγεθος εταιρίας",
            label:"Μέγεθος εταιρίας"
        },
        {
            value:"Πρόσωπα λήψης αποφάσεων (Key decision marker)",
            label:"Πρόσωπo λήψης αποφάσεων"
        }
    ]
}


const getMarketCategoryLabel = (category, option) => {

    const collection = marketCategoriesLabels[category].filter(el => {
       return  el.value === option
    });

    if(collection.length === 0) {
        return option
    }

    return collection[0].label
};

export default getMarketCategoryLabel;
