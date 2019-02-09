<template>
    <auth-template
        header="Login to your Valius Account"
    >
        <form class="valius-auth-page__login" v-on:submit="submit">
            <md-field class="valius-auth-page__input">
                <label>Email</label>
                <md-input name="email"  v-validate="'required|email'" v-model="user.email"></md-input>
                <span class="md-helper-text" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </md-field>

            <md-field class="valius-auth-page__input">
                <label>Password</label>
                <md-input name="password" type="password"  v-validate="'required|min:5'" v-model="user.password"></md-input>
                <span class="md-helper-text" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </md-field>

            <md-field class="valius-auth-page__login-buttons">
                <md-button class="md-default" type="submit">Login</md-button>
                <md-button class="md-default" @click="goToRegister" >Register</md-button>
            </md-field>

            <md-field class="valius-auth-page__forgot-password">
                <router-link to="/register">Forgot Password</router-link>
            </md-field>
        </form>

    </auth-template>
</template>



<script>

import router from "../../router";
import AuthTemplate from "../../components/AuthTemplate.vue";
import storeInitializator from './../../services/storeInitializator';

export default {
    name: 'Login',
    props: {

    },
    computed: {
        users() {

        }
    },
    data(){
        return {
            user:{
                email:'',
                password:''
            }
        }
    },
    components:{
        "AuthTemplate" : AuthTemplate
    },
    methods:{
        submit(event){
            event.preventDefault();
            this.$validator.validate().then(valid => {
                if(valid ) {
                    this.$store.dispatch('login', this.user).then( res => {
                        storeInitializator(this.$store).then();
                        this.$router.push('/welcome');
                    }).catch( err => {
                        alert('Wrong credentials. please try again');
                    });
                }

            });
        },
        goToRegister(){
            router.push("/register");
        }
    }
}
</script>

