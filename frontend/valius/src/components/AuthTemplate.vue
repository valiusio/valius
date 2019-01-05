<template>
    <div class="valius-auth-page">
        <div class="container">
            <img class="valius-logo" src="../assets/images/LoginView/valiuis-logo.png"/>
            <h3 class="valius-auth-page__header">{{ header }}</h3>
            <slot></slot>
        </div>
    </div>

</template>

<script>
    import router from "../router";

    export default {
        name: 'Login',
        props: {
            header: String
        },
        data(){
            return {
            }
        },
        methods:{

        }
    }
</script>

