<template>

    <div class="testpage">
        <information-banner></information-banner>
    </div>

</template>



<script>

    import router from "../router";
    import InformationBanner from "../components/InformationBanner.vue";


    export default {
        name: 'testpage',
        props: {

        },
        data(){
            return {

            }
        },
        components:{
            "InformationBanner" : InformationBanner
        },
        methods:{

        }
    }
</script>

