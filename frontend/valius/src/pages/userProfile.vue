<template>
    <div class="user-profile">

        <div class="container container--lg">
            <information-banner>
                <h2>Ας ξεκινήσουμε με το προφίλ σου</h2>
            </information-banner>
            <form class="user-profile__form" @submit="submitform()">
                <div class="user-profile__section">
                    <div class="user-profile__section--left">
                        <md-field class="input-field">
                            <label>Username</label>
                            <md-input name="username" v-validate="'required|min:5'" v-model="user.username"></md-input>
                            <span class="md-helper-text" v-show="errors.has('username')">{{ errors.first('username') }}</span>
                        </md-field>


                        <md-field class="input-field">
                            <label>Firstname</label>
                            <md-input name="firstname"  v-validate="'required|min:5'" v-model="user.firstname"></md-input>
                            <span class="md-helper-text" v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Lastname</label>
                            <md-input name="lastname"  v-validate="'required'" v-model="user.lastname"></md-input>
                            <span class="md-helper-text" v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Email</label>
                            <md-input name="email"  v-validate="'required|email'" v-model="user.email"></md-input>
                            <span class="md-helper-text" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Password</label>
                            <md-input name="password"  v-validate="'required'" v-model="user.password"></md-input>
                            <span class="md-helper-text" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                        </md-field>


                        <md-field class="input-field">
                            <label>Day phone & Extension</label>
                            <md-input name="phone"  v-validate="'required'" v-model="user.phone"></md-input>
                            <span class="md-helper-text" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Mobile phone</label>
                            <md-input name="mobile"  v-validate="'required'" v-model="user.mobile"></md-input>
                            <span class="md-helper-text" v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
                        </md-field>


                    </div>
                    <div class="user-profile__section--right">
                        <md-field class="input-field">
                            <label>Preferred Email</label>
                            <md-input name="backupemail"  v-validate="'required|email'" v-model="user.backupemail"></md-input>
                            <span class="md-helper-text" v-show="errors.has('backupemail')">{{ errors.first('backupemail') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Mailing Address</label>
                            <md-input name="address"  v-validate="'required'" v-model="user.address"></md-input>
                            <span class="md-helper-text" v-show="errors.has('address')">{{ errors.first('address') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>City</label>
                            <md-input name="city"  v-validate="'required'" v-model="user.city"></md-input>
                            <span class="md-helper-text" v-show="errors.has('city')">{{ errors.first('city') }}</span>
                        </md-field>
                        <md-field class="input-field">
                            <label>State</label>
                            <md-input name="state"  v-validate="'required'" v-model="user.state"></md-input>
                            <span class="md-helper-text" v-show="errors.has('state')">{{ errors.first('state') }}</span>
                        </md-field>
                        <md-field class="input-field">
                            <label>Employer</label>
                            <md-input name="employer"  v-validate="'required'" v-model="user.employer"></md-input>
                            <span class="md-helper-text" v-show="errors.has('employer')">{{ errors.first('employer') }}</span>
                        </md-field>
                        <md-field class="input-field">
                            <label>Title</label>
                            <md-input name="title"  v-validate="'required'" v-model="user.title"></md-input>
                            <span class="md-helper-text" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                        </md-field>

                        <md-field class="input-field">
                            <label>Employer Type</label>
                            <md-select v-model="user.typeofemployer" name="typeofemployer" required>
                                <md-option v-for="type in employertypes" @value="type">{{ type }}</md-option>
                            </md-select>
                        </md-field>
                    </div>
                </div>

                <div class="user-profile__form__button">
                    <button type="submit" class="user-profile__form__button">
                        SAVE
                    </button>
                </div>
            </form>

        </div>

    </div>
</template>



<script>

    import router from "../router";
    import InformationBanner from "../components/InformationBanner.vue";


    export default {
        name: 'userprofile',
        props: {

        },
        data(){
            return {
                user:{
                    username:'',
                    firstname:'',
                    lastname:'',
                    email:'',
                    backupemail:'',
                    employer:'',
                    title:'',
                    typeofemployer:'',
                    phone:'',
                    mobile:'',
                    maillingaddress:'',
                    city:'',
                    state:'',
                    prsa:false,
                    password:'',
                },
                employertypes:[
                    "agency",
                    "corporate",
                    "government",
                    "nonprofit",
                    "solo/boutique(1-15 staff)",
                    "association",
                    "media/journalist/blogger",
                    "academic",
                    "other",
                ]
            }
        },
        components:{
            "information-banner":InformationBanner
        },
        methods:{
            submitform(){
                event.preventDefault();
                this.$validator.validate().then(valid=>{
                    valid && this.router.push('/game-map');
                });
            }
        }
    }
</script>

