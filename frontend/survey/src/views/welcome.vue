<template>
    <div class="container container--exlg">
        <information-banner
            type="blue"
        >
            <h1>Καλώς ήρθατε!</h1>
        </information-banner>

        <div class="welcome-wrapper">
            <div class="img-right">
                <img src="../assets/banners.png">
            </div>
            <h2>Έχετε επιλεγεί να συμμετάσχετε στο Exclusive Feedback Club της {{ industryName }} !!</h2>
            <p>Σκοπός του Club είναι να φέρει τους πελάτες στο επίκεντρo,
                δίνοντας τους τη δυνατότητα να αξιολογήσουν και να βελτιώνουν προϊόντα που χρησιμοποιούν!
            </p>
            <p>
                Με αυτή τη συμμετοχή σας μπορείτε:
            </p>
            <p>
                Να παίξετε ένα εικονικό παιχνίδι απατώντας κάποιες ερωτήσεις
            </p>
            <p>
                Να εκφράσετε την άποψη σας για τα διάφορα προϊόντα που χρησιμοποιείτε
            </p>
            <p>
                Να λάβετε μοναδικές εκπλήξεις στο τέλος της διαδικασίας!
            </p>
        </div>
        <div class="button-wrapper">
            <button @click="next">Ας ξεκινήσουμε</button>
        </div>
    </div>
</template>

<script>
    import informationBanner from './../components/InformationBanner';
    import { usersData } from '../usersData';

    export default {
        name: 'welcome',
        components: {
            informationBanner: informationBanner
        },
        created() {
            this.state = this.$store.getters.state;
            const email = this.$route.query['email'];
            const usersState = usersData.find(user => {
                return user.email === email
            });

            this.state['brandName'] = usersState['brandName'];
            this.state['industryName'] = usersState['industryName'];
            this.state['email'] = usersState['email'];
            this.state['level'] = usersState['level'];
            this.state['questions'] = usersState['questions'];
            this.state['marketProfileQuestions'] = usersState['marketProfileQuestions'];
            this.state['productProfile'] = usersState['productProfile'];

            this.$store.dispatch('state', this.state).then(() => {
            });

        },
        date() {
            return {
                state: this.$store.getters.state
            }
        },
        computed: {
            industryName() {
                return this.state.industryName;
            }
        },
        methods: {
            next() {
                this.$router.push('/description');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 32px;
    }

    .welcome-wrapper {
        width: 800px;
        margin: 50px auto 0 auto;

        h2 {
            font-size: 24px;
            color: #0070C0;
        }
    }

    .img-right {
        display: flex;
        height: 150px;

        img {
            margin-left: auto;
            width: 100px;
            height: 80px;
        }
    }

    .button-wrapper {
        margin: 100px 0 0 0;
        display: flex;
        justify-content: center;

        button {
            font-size: 20px;
            color: white;
            border-radius: 4px;
            padding: 10px;
            background-color: #17B5F0;
        }
    }

</style>
