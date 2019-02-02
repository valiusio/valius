<template>
    <div class="information-banner">
        <div
            class="information-banner__parallelogram"
            :class="type && 'information-banner__parallelogram--' + type"
        >
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
            "type"
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

