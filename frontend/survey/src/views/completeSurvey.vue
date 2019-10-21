<template>
    <div class="container container--exlg">
        <div class="button-wrapper">
            <img :src="fireCracks">
            <div>Τα καταφέρατε</div>
            <section>100% συμπλήρωση feedback</section>
            <button @click="next">Τέλος</button>
        </div>
    </div>
</template>

<script>
    import fireCracks from '../assets/firecracks.png';

    export default {
        name: 'welcome',
        components: {
        },
        computed: {
            fireCracks() {
                return fireCracks;
            }
        },
        methods: {
            next() {
                this.$router.push('/endSurvey');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container {
        display: flex;
        padding: 50px 0 0 0;
        flex-direction: column;
        align-items: center;

        div {
            font-size: 50px;
            color: blue;
            font-weight: bold;
            text-align: center;
        }

        section {
            font-size: 40px;
            color: gray;
            font-weight: bold;
        }

        button {
            width: 200px;
            height: 50px;
            border-radius: 4px;
            background-color: #17B5F0;
            color: white;
            font-size: 18px;
            margin: 20px auto 0 auto;
            display: block;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>
