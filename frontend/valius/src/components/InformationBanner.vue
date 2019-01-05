<template>
    <div class="information-banner">
        <div class="information-banner__parallelogram">
            <div class="information-banner__text">
                <slot></slot>
            </div>
        </div>
    </div>
</template>



<script>

    import router from "../router";

    export default {
        name: 'InformationBanner',
        props: [

        ],
        data(){
            return {
                displayed : true
            }
        },
        components:{
        },
        methods:{

        }
    }
</script>

