<template>
    <div class="container container--exlg">
        <information-banner
            type="info"
        >
            <h1>Ας συνεχίσουμε με τα στοιχεία του αγοραστικού σας προφίλ!</h1>
        </information-banner>

        <div class="wrapper">
            <div class="column">
                <div class="input-field">
                    <label>{{ state.marketProfileQuestions[1].label }}</label>
                    <select v-model="state.marketProfileQuestions[1].answer">
                        <option v-for="(question, key) in userCategories" :value="question" :key="key">
                            {{ question }}
                        </option>
                    </select>
                </div>

                <div class="input-field">
                    <label>{{ state.marketProfileQuestions[2].label }}</label>
                    <input placeholder="1" v-model="state.marketProfileQuestions[2].answers[1]">
                    <input placeholder="2" v-model="state.marketProfileQuestions[2].answers[2]">
                    <input placeholder="3" v-model="state.marketProfileQuestions[2].answers[3]">
                </div>


                <div class="input-field">
                    <label>{{ state.marketProfileQuestions[3].label }}</label>
                    <select v-model="state.marketProfileQuestions[3].answer">
                        <option v-for="(answer, key) in productAcceptance" :value="answer" :key="key">
                            {{ answer }}
                        </option>
                    </select>
                </div>

            </div>
            <div class="column">
                <div class="input-field">
                    <label>{{ state.marketProfileQuestions[4].label }}</label>
                    <select v-model="state.marketProfileQuestions[4].answer">
                        <option v-for="(answer, key) in communicationOptions" :value="answer" :key="key">
                            {{ answer }}
                        </option>
                    </select>
                </div>

                <div class="input-field">
                    <label>{{ state.marketProfileQuestions[5].label }}</label>
                    <input v-model="state.marketProfileQuestions[5].answer">
                </div>
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
        name: 'marketProfile',
        components: {
            informationBanner: informationBanner
        },
        data() {
            return {
                state: this.$store.getters.state
            }
        },
        computed: {
            userCategories() {
                return [
                    "Φοιτητής",
                    "Απόφοιτος",
                    "Ελεύθερος Επαγγελματίας",
                    "Δημόσιος Υπάλληλος",
                    "Ιδιωτικός Υπάλληλος",
                    "Επιχειρηματίας",
                    "Άλλο",
                ]
            },
            productAcceptance() {
                return [
                    "Πολύ Ικανοποιημένος",
                    "Μέτρια Ικανοποιημένος",
                    "Μή Ικανοποιημένος",
                    "Ευκαιριακός χρήστης",
                    "Μή χρήστης",
                ];
            },
            communicationOptions() {
                return [
                  'Τηλεόραση',
                  'Ραδιόφωνο',
                  'Ιντερνετ',
                  'Social Media',
                  'Blogs',
                  'Περιοδικά',
                  'Εξωτερική διαφήμιση (π.χ.Σε δρόμους, κτίρια)',
                  'Μέσω Influencers',
                  'Μέσω εκδηλώσεων',
                  'Μέσω πωλητών'
                ];
            }
        },
        methods: {
            next() {
                this.state.level++;
                this.$store.dispatch('state', this.state);
                this.$router.push('/map');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner h1 {
        font-size: 25px;
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        width: 900px;
        margin: 100px auto 0 auto;
    }

    .input-field {
        margin: 0 0 50px 0;
        display: flex;
        flex-direction: column;

        label {
            color: #0070C0;
            font-size: 20px;
            margin: 0 0 10px 0;
        }

        select {
            width: 250px;
            text-align: center;
            padding: 5px;
            border-radius: 5px;
        }

        input {
            border: 1px solid gray;
            width: 300px;
            padding: 3px;
            border-radius: 4px;
            margin: 0 0 10px 0;
            font-size: 16px;
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
