<template>
    <div class="container container--exlg">
        <information-banner>
            <h1>Παρακαλούμε απαντήστε τις παρακάτω ερωτήσεις</h1>
        </information-banner>

        <div class="wrapper">
            <img  class="rocket" :src="rocketimg">
            <div v-for="question in Object.keys(state.questions)" class="question-raw" >
                <span
                    class="answer"
                    type="text"
                    v-html="state.questions[question].label">
                </span>
                <div v-if="state.questions[question].predefinedAnswers" class="samples">
                    <span v-for="testAnswer in state.questions[question].predefinedAnswers">
                        {{ testAnswer }}
                    </span>
                </div>
                <div v-if="state.questions[question].isTypeBoolean" class="prompt-answer">
                    <input type="checkbox"
                           v-model="state.questions[question].answer"
                           :checked="state.questions[question].answer"
                    >Ναι
                    <input type="checkbox"
                           :checked="!state.questions[question].answer"
                           @change="$event.target.checked ? (state.questions[question].answer = false) : (state.questions[question].answer = true)"
                    >Οχι
                </div>
                <div v-if="!state.questions[question].isTypeBoolean && !state.questions[question].isTypeSelect" class="textanswer">
                    <input type="text"
                           v-model="state.questions[question].answer">
                </div>
                <div v-if="state.questions[question].isTypeSelect" class="prompt-answer">
                    <select v-model="state.questions[question].answer">
                        <option v-for="option in state.questions[question].options" :value="option">{{option}}
                        </option>
                    </select>
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
    import rocketImg from '../assets/rocket.png';


    export default {
        name: 'questionnaire',
        components: {
            informationBanner: informationBanner
        },
        data() {
            return {
                state: this.$store.getters.state
            }
        },
        computed: {
            rocketimg() {
                return rocketImg;
            }
        },
        methods: {
            handleNoCheckboc(state, event) {
                event.target.checked ? (state = false) : (state = true);
            },
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
        font-size: 32px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 700px;
        margin: 100px auto 0 auto;
    }

    .rocket {
        width: 150px;
        height: 150px;
        position: fixed;
        left: 10px;
        bottom: 10px;
    }

    .question-raw {
        margin: 40px 0 0 0;
        display: flex;
        flex-direction: column;
        width: 80%;
        position: relative;

        &:before {
            content: "";
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            left: -50px;
            border: 8px solid #17B5F0;
        }

        .answer {
            width: 100%;
            padding: 10px;
            font-size: 18px;
            border-radius: 5px;
        }

        .samples {
            margin: 10px 0 0 0;

            span {
                background-color: coral;
                color: white;
                margin-right: 10px;
                padding: 2px 5px;
                border-radius: 4px;
            }
        }

        .prompt-answer {
            margin: 10px 0 0 0;


        }
        .textanswer {
            input {
                width: 100%;
                padding: 10px 10px;
                border-radius: 4px;
                outline: none;
                border: 1px solid gray;
            }

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
