<template>
    <div class="user-profile">
        <div class="container container--lg">
            <information-banner>
                <h2>Ας ξεκινήσουμε με το προφίλ σου</h2>
            </information-banner>

            <form class="valius-form" @submit="submitform">
                <div class="user-profile__section">
                    <div class="user-profile__section--left">
                        <md-field
                            class="input-field"
                            :class=" errors.has('username') && 'input-field--has-error' "
                        >
                            <label>Username</label>
                            <md-input name="username" v-validate="'required|min:5'" v-model="user.username"/>
                            <span class="md-helper-text" v-show="errors.has('username')">{{ errors.first('username') }}</span>
                        </md-field>


                        <md-field
                            class="input-field"
                            :class=" errors.has('firstname') && 'input-field--has-error' "
                        >
                            <label>Firstname</label>
                            <md-input name="firstname"  v-validate="'required|min:5'" v-model="user.firstname"/>
                            <span class="md-helper-text" v-show="errors.has('firstname')">{{ errors.first('firstname') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('lastname') && 'input-field--has-error' "
                        >
                            <label>Lastname</label>
                            <md-input name="lastname"  v-validate="'required'" v-model="user.lastname"/>
                            <span class="md-helper-text" v-show="errors.has('lastname')">{{ errors.first('lastname') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('email') && 'input-field--has-error' "
                        >
                            <label>Email</label>
                            <md-input name="email"  v-validate="'required|email'" v-model="user.email"/>
                            <span class="md-helper-text" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('password') && 'input-field--has-error' "
                        >
                            <label>Password</label>
                            <md-input name="password"  v-validate="'required'" v-model="user.password"/>
                            <span class="md-helper-text" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                        </md-field>


                        <md-field
                            class="input-field"
                            :class=" errors.has('phone') && 'input-field--has-error' "
                        >
                            <label>Day phone & Extension</label>
                            <md-input name="phone"  v-validate="'required'" v-model="user.phone"/>
                            <span class="md-helper-text" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('mobile') && 'input-field--has-error' "
                        >
                            <label>Mobile phone</label>
                            <md-input name="mobile"  v-validate="'required'" v-model="user.mobile"/>
                            <span class="md-helper-text" v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
                        </md-field>


                    </div>
                    <div class="user-profile__section--right">
                        <md-field
                            class="input-field"
                            :class=" errors.has('backupemail') && 'input-field--has-error' "
                        >
                            <label>Preferred Email</label>
                            <md-input name="backupemail"  v-validate="'required|email'" v-model="user.backupemail"/>
                            <span class="md-helper-text" v-show="errors.has('backupemail')">{{ errors.first('backupemail') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('maillingaddress') && 'input-field--has-error' "
                        >
                            <label>Mailing Address</label>
                            <md-input name="maillingaddress"  v-validate="'required'" v-model="user.maillingaddress"/>
                            <span class="md-helper-text" v-show="errors.has('maillingaddress')">{{ errors.first('maillingaddress') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('city') && 'input-field--has-error' "
                        >
                            <label>City</label>
                            <md-input name="city"  v-validate="'required'" v-model="user.city"/>
                            <span class="md-helper-text" v-show="errors.has('city')">{{ errors.first('city') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class=" errors.has('state') && 'input-field--has-error' "
                        >
                            <label>State</label>
                            <md-input name="state"  v-validate="'required'" v-model="user.state"/>
                            <span class="md-helper-text" v-show="errors.has('state')">{{ errors.first('state') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class=" errors.has('employer') && 'input-field--has-error' "
                        >
                            <label>Employer</label>
                            <md-input name="employer"  v-validate="'required'" v-model="user.employer"/>
                            <span class="md-helper-text" v-show="errors.has('employer')">{{ errors.first('employer') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class=" errors.has('title') && 'input-field--has-error' "
                        >
                            <label>Title</label>
                            <md-input name="title"  v-validate="'required'" v-model="user.title"/>
                            <span class="md-helper-text" v-show="errors.has('title')">{{ errors.first('title') }}</span>
                        </md-field>

                        <md-field
                            class="input-field"
                            :class=" errors.has('typeofemployer') && 'input-field--has-error' "
                        >
                            <label>Employer Type</label>
                            <md-select v-model="user.typeofemployer" name="typeofemployer" v-validate="'required'">
                                <md-optgroup>
                                    <md-option v-for="(type , key) in employertypes" :value="type" :key="key">{{ type }}</md-option>
                                </md-optgroup>
                            </md-select>
                            <span class="md-helper-text" v-show="errors.has('typeofemployer')">{{ errors.first('typeofemployer') }}</span>
                        </md-field>
                    </div>
                </div>

                <div class="valius-form__submit">
                    <button type="submit" class="user-profile__form__button">
                        SAVE
                    </button>
                </div>
            </form>

        </div>

    </div>
</template>



<script>

    import router from "../../router";
    import InformationBanner from "../../components/InformationBanner.vue";


    export default {
        name: 'userprofile',
        props: {

        },
        data(){
            return {
                user: this.$store.getters.user,
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
                ],
                levels: this.$store.getters.levels
            }
        },
        components:{
            "information-banner":InformationBanner
        },
        methods:{
            submitform(event){
                event.preventDefault();
                this.$validator.validate().then( valid => {
                     if(valid){
                         this.$store.dispatch('saveUser', this.user);
                         this.levels[0].start.subLevels.userProfile.rating = 3;
                         this.levels[0].start.subLevels.organizationProfile.locked = false;
                         this.$store.dispatch('setLevels', this.levels);
                         router.push('/game-navigation');
                     }
                });
            }
        }
    }
</script>

