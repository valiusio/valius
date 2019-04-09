<template>
    <div class="customers-invitation">
        <div class="container container--exlg">
            <information-banner
                type="success"
            >
                <h1>Υπάρχουν διαφορετικοί τρόποι για να προσκαλέσεις ικανοποιητικό
                    δείγμα πελατών σου να δώσουν τη γνώμη τους!
                </h1>
                <p>Επίλεξε παρακάτω τον τρόπο που θα ήθελες να χρησιμοποιήσεις*</p>
            </information-banner>

            <div class="customers-invitation__container">
                <div class="row">
                    <div class="subscribe" @click="next">
                        <img :src="linkIcon">
                        <span>Χρήση link</span>
                    </div>
                    <div class="subscribe subscribe__disabled">
                        <img :src="emailIcon">
                        <span>Πρόσκληση μέσω email</span>
                    </div>
                    <div class="subscribe subscribe__disabled">
                        <img :src="socialMedia">
                        <span>Post στα Social Media</span>
                    </div>
                </div>
                <div class="row">
                    <div class="subscribe subscribe__disabled">
                        <img :src="dbIcon">
                        <span>Αποστολή σε database</span>
                    </div>
                    <div class="subscribe subscribe__disabled">
                        <img :src="recruitingPlatformsIcon">
                        <span>Χρήση Recruiting platforms</span>
                    </div>
                    <div class="subscribe subscribe__disabled">
                        <img :src="website">
                        <span>Πρόσκληση από το website σου</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    //TODO refactor this page and split components

    import InformationBanner from './../../components/InformationBanner';
    import dbIcon from './../../assets/images/subscriber/database.png';
    import emailIcon from './../../assets/images/subscriber/email.png';
    import linkIcon from './../../assets/images/subscriber/link.png';
    import recruitingPlatformsIcon from './../../assets/images/subscriber/recruitingPlatforms.png';
    import socialMedia from './../../assets/images/subscriber/socialMedia.png';
    import website from './../../assets/images/subscriber/website.png';
    import levelUpdate from './../../services/levelUpdate';

    export default {
        name: 'customersInvitation',
        props: [

        ],
        components: {
            InformationBanner : InformationBanner
        },
        computed : {

        },
        data(){
            return {
                dbIcon : dbIcon,
                emailIcon: emailIcon,
                linkIcon: linkIcon,
                recruitingPlatformsIcon: recruitingPlatformsIcon,
                socialMedia: socialMedia,
                website: website,

                levels: this.$store.getters.levels
            }
        },
        methods: {
            next() {
                this.levels.productAssessment.subLevels.customersFeedback.completed = true;
                this.levels.productAssessment.subLevels.customersFeedback.rating = 3;
                this.levels.productAssessment.completed = true;

                levelUpdate.levelUpdate(this.$store, 'readyToStrategize');
                this.$store.dispatch('updateLevels', this.levels);
                this.$router.push('game-navigation/productAssessment');
            }
        }
    }
</script>
<style lang="scss" scoped>
    .information-banner {
        h1 {
            font-size: 18px;
        }

        p {
            font-size: 14px;

        }
    }

    .customers-invitation {
        &__container {
            width: 850px;
            margin: 50px auto 0 auto;
            .row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
        }
    }

    .subscribe {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 270px;
        padding: 20px;
        background-color: #F1F1F2;
        border-radius: 10px;
        cursor: pointer;

        img {
            width: 100px;
            height: 100px;
        }

        span {
            margin-top: 10px;
            font-weight: 900;
        }

        &:hover {
            transform: scale(1.1);
        }
        &__disabled {
           background-color: black;
            cursor: not-allowed;
            opacity: 0.2;

            span {
                color: white;
            }

            &:hover {
                transform: scale(1);
            }
        }
    }
</style>
