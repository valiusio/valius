<template>
    <div class="container container--exlg">
        <information-banner>
            <h1>Περιγραφή της διαδικασίας</h1>
        </information-banner>

        <div class="wrapper">
            <div class="img-container">
                <img src="./../assets/bottle.png">
            </div>
            <div>

                <p><img class="check" src="./../assets/check.png">
                    Η ολοκλήρωση της δραστηριότητας απαιτεί περίπου 2-3’
                    από το χρόνο σας
                </p>
                <p>
                    <img class="check" src="./../assets/check.png">
                    Δεν χρειάζεται κάποια συμπλήρωση προσωπικών
                    πληροφοριών</p>

                <p>
                    <img class="check" src="./../assets/check.png">
                    Να θυμάστε οι απαντήσεις σας είναι ανώνυμες</p>

                <p>
                    <img class="check" src="./../assets/check.png">
                    Για αυτό πείτε ελεύθερα τη γνώμη σας! Γίνετε δημιουργός
                    αξίας για το αγαπημένο σας προϊόν !</p>
            </div>

        </div>

        <button @click="next">
            Επόμενο
        </button>
    </div>
</template>

<script>
    import informationBanner from '../components/InformationBanner';

    export default {
        name: 'welcome',
        components: {
            informationBanner: informationBanner
        },
        computed: {},
        methods: {
            next() {
                this.$router.push('/map');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 32px;
    }

    .wrapper {
        display: flex;
        width: 800px;
        margin: 100px auto 0 auto;

        .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 150px;
            img {
                width: 200px;
                height: 200px;
            }
        }

        .check {
            display: inline-block;
            width: 30px;
            height: 30px;
        }

    }
    button {
        width: 200px;
        height: 50px;
        border-radius: 4px;
        background-color: #17B5F0;
        color: white;
        font-size: 18px;
        margin: 100px auto 0 auto;
        display: block;
    }
</style>
