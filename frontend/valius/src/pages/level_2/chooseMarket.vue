<template>

    <div class="market-focus">
    </div>

</template>



<script>

    export default {
        name: 'MarketFocus',
        props: [

        ],
        data(){
            return {
                levels : this.$store.getters.levels,
                currentLevel : this.$store.getters.currentLevel,
            }
        },
        components:{
            InformationBanner: InformationBanner
        },
        computed:{
        },
        methods: {
        }
    }
</script>

