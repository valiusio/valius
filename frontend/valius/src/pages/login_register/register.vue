<template>
    <auth-template
        header="Create your Valius Account"
    >
        <form class="valius-auth-page__login" v-on:submit="register">
            <md-field class="valius-auth-page__input">
                <label>Username</label>
                <md-input name="username" v-validate="'required|min:5'" v-model="user.username"></md-input>
                <span class="md-helper-text" v-show="errors.has('username')">{{ errors.first('username') }}</span>
            </md-field>

            <md-field class="valius-auth-page__input">
                <label>Email</label>
                <md-input name="email"  v-validate="'required|email'" v-model="user.email"></md-input>
                <span class="md-helper-text" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </md-field>
            <md-field class="valius-auth-page__input">
                <label>Company</label>
                <md-input name="company"  v-validate="'required|min:3'" v-model="user.company"></md-input>
                <span class="md-helper-text" v-show="errors.has('company')">{{ errors.first('company') }}</span>
            </md-field>

            <md-field class="valius-auth-page__input">
                <label>Password</label>
                <md-input name="password"  v-validate="'required|min:5'" v-model="user.password"></md-input>
                <span class="md-helper-text" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </md-field>

            <md-field class="valius-auth-page__input">
                <label>Retype Password</label>
                <md-input name="password2"  v-validate="'required|min:5'" v-model="user.password2"></md-input>
                <span class="md-helper-text" v-show="errors.has('password2')">{{ errors.first('password2') }}</span>
            </md-field>
            <md-field class="accept-terms">
                <md-checkbox v-model="user.acceptTerms" v-validate="'required|min:5'"  />
                <span>By creating an account you agree yo Valius Terms of Service and Privacy Statemant</span>
            </md-field>

            <md-field class="valius-auth-page__login-buttons">
                <md-button class="md-default" type="submit">Register</md-button>
            </md-field>

            <md-field class="valius-auth-page__forgot-password">
                <router-link to="/register">Forgot Password</router-link>
            </md-field>
        </form>
    </auth-template>
</template>



<script>
    import AuthTemplate from "../../components/AuthTemplate.vue";

    export default {
        name: 'Register',
        props: {

        },
        components : {
            "AuthTemplate" : AuthTemplate
        },
        data(){
            return {
                user:{
                    username:'',
                    email:'',
                    company:'',
                    password:'',
                    password2:'',
                    acceptTerms:false
                }
            }
        },
        methods:{
            submit(event){
                event.preventDefault();
                this.$validator.validate().then(valid => {
                    if(valid) {

                    }
                });
            },
            register(event){
                event.preventDefault();
                this.$validator.validate().then(valid=>{

                });
            }

        }
    }
</script>
