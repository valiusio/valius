<template>
    <div class="container container--exlg">
        <information-banner
            type="info"
        >
            <h1>Σας ευχαριστούμε</h1>
        </information-banner>
        <section>
            <img :src="logo">
            <h1>Η γνώμη σας μόλις συλλέχθηκε με επιτυχία!</h1>
            <p>Τα σχόλια σας έχουν σημασία για εμάς, και θα παραμείνουν
                ανώνυμα καθ’ όλη τη διάρκεια της έρευνας.
            </p>
            <h1>Θα χαρούμε να σας δούμε ξανά σε μια από της
                έρευνες μας στο μέλλον!
            </h1>
            <h1>Με εκτίμηση,</h1>
            <h1>Η ομάδα της {{state.brandName}}</h1>
        </section>
    </div>
</template>

<script>
    import informationBanner from './../components/InformationBanner';
    import clubLogo from '../assets/club.png';

    export default {
        name: 'welcome',
        components: {
            informationBanner
        },
        data() {
            return {
                state : this.$store.getters.state
            }
        },
        computed: {
            logo() {
                return clubLogo;
            }
        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    .information-banner {
        h1 {
            font-size: 35px;
        }
    }

    img {
        position: fixed;
        width: 150px;
        height: 150px;
        bottom: 10px;
        right: 10px;

    }

    section {
        margin: 50px auto 0 auto;
        width: 850px;

        h1 {
            color: #177cc5;
            font-weight: bold;
            font-size: 30px;
            margin: 0 0  50px 0;

            &:first-child {
                margin-bottom: 40px;
            }

            &:nth-of-type(2) {
                margin-top: 50px;
            }
        }

        p {
            font-size: 18px;
            font-weight: bold;
        }
    }
</style>
