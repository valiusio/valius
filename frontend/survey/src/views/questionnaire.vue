<template>
    <div class="container container--exlg">
        <information-banner>
            <h1>Παρακαλούμε απαντήστε τις παρακάτω ερωτήσεις</h1>
        </information-banner>

        <div class="wrapper">
            <div class="question-raw">
                <input class="answer" type="text">
                <div class="samples">
                    <span>asd</span>
                    <span>dasasd</span>
                    <span>asdasd</span>
                </div>
                <div class="promt-answer">
                    <input type="checkbox" disabled>Ναι<input type="checkbox" disabled>Οχι
                </div>
            </div>
            <div class="question-raw">
                <input class="answer" type="text">
                <div class="samples">
                    <span>asd</span>
                    <span>dasasd</span>
                    <span>asdasd</span>
                </div>
                <div class="promt-answer">
                    <input type="checkbox" disabled>Ναι<input type="checkbox" disabled>Οχι
                </div>
            </div>
            <div class="question-raw">
                <input class="answer" type="text">
                <div class="samples">
                    <span>asd</span>
                    <span>dasasd</span>
                    <span>asdasd</span>
                </div>
                <div class="promt-answer">
                    <input type="checkbox" disabled>Ναι<input type="checkbox" disabled>Οχι
                </div>
            </div>
            <div class="question-raw">
                <input class="answer" type="text">
                <div class="samples">
                    <span>asd</span>
                    <span>dasasd</span>
                    <span>asdasd</span>
                </div>
                <div class="promt-answer">
                    <input type="checkbox" disabled>Ναι<input type="checkbox" disabled>Οχι
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
        name: 'questionnaire',
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
        flex-direction: column;
        width: 500px;
        margin: 100px auto 0 auto;
    }

    .question-raw {
        margin: 10px 0 0 0;
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
            border: 1px solid gray;
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

        .promt-answer {
            margin: 10px 0 0 0;
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
