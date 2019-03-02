<template>
    <div class="select-marketAssesments">
        <div class="container container--exlg">
            <information-banner
                type="info"
            >
                <h1>Ποια είναι τα κριτήρια ελκυστικότητας των τμημάτων της αγοράς σου;</h1>
                <p>Επέλεξε τους παράγοντες που θέλεις να εξετάσεις για την αξιολόγηση της ελκυστικότητας της αγοράς σου.</p>
            </information-banner>

            <div class="select-marketAssesments__container">
                <div class="select-marketAssesments__container"></div>
                <div class="select-marketAssesments__section"></div>
            </div>
        </div>
    </div>
</template>



<script>
    import InformationBanner from './../../components/InformationBanner'

    export default {
        name: 'SelectMarketAssessments',
        props: [

        ],
        components: {
            InformationBanner
        },
        data(){
            return {

            }
        },
        methods: {
            next() {

            }
        }
    }
</script>
