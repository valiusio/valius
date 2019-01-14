<template>

    <div class="business-profile">
        <div class="container--lg">

            <information-banner>
                <h1>Πόσο καλά γνωρίζεις την επίχειρηση σου;</h1>
                <p>Aπάντησε στις ερωτήσεις που γνωρίζεις συμπληρώνοντας τα παρακάτω κενά.</p>
            </information-banner>

            <form class="valius-form" v-on:submit="register">
                <div class="business-profile__form-container">
                    <div class="business-profile__form-container__left">
                        <img class="business-profile__image" :src=" businessPick ">
                    </div>
                    <div class="business-profile__form-container__right">

                        <md-field
                            class="input-field"
                            :class="errors.has('business') && 'input-field--has-error' "
                        >
                            <label>Εταιρία</label>
                            <md-input name="business" v-validate="'required'" v-model="business.business"></md-input>
                            <span class="md-helper-text" v-show="errors.has('business')">{{ errors.first('business') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class="errors.has('profile') && 'input-field--has-error' "
                        >
                            <label>Προφίλ</label>
                            <md-input name="profile" v-validate="'required'" v-model="business.profile"></md-input>
                            <span class="md-helper-text" v-show="errors.has('profile')">{{ errors.first('profile') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class="errors.has('subject') && 'input-field--has-error' "
                        >
                            <label>Τομέας</label>
                            <md-input name="subject" v-validate="'required'" v-model="business.subject"></md-input>
                            <span class="md-helper-text" v-show="errors.has('subject')">{{ errors.first('subject') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class="errors.has('services') && 'input-field--has-error' "
                        >
                            <label>Προϊόντα και Υπηρεσίες</label>
                            <md-textarea name="services" v-validate="'required'" v-model="business.services"></md-textarea>
                            <span class="md-helper-text" v-show="errors.has('services')">{{ errors.first('services') }}</span>
                        </md-field>
                        <md-field
                            class="input-field"
                            :class="errors.has('vision') && 'input-field--has-error' "
                        >
                            <label>Όραμα της εταιρίας (Vision)</label>
                            <md-input name="vision" v-validate="'required'" v-model="business.vision"></md-input>
                            <span class="md-helper-text" v-show="errors.has('vision')">{{ errors.first('vision') }}</span>
                        </md-field>
                    </div>
                </div>


                <md-field class="valius-form__submit">
                    <button type="submit">
                        Save
                    </button>
                </md-field>
            </form>
        </div>
    </div>

</template>



<script>

    import router from "../../router";
    import InformationBanner from "../../components/InformationBanner.vue";
    import BusinessPick from "../../assets/images/business.png";

    export default {
        name: 'business-profile',
        components:{
            InformationBanner
        },
        props: {

        },
        data(){
            return {
                levels: this.$store.getters.levels,
                businessPick : BusinessPick,
                business: this.$store.getters.business
            }
        },
        methods:{
            register(event) {
                event.preventDefault();
                this.$validator.validate().then(valid=>{
                    if(valid){
                        this.$store.dispatch('updateBusiness', this.business);
                        this.levels[0].start.subLevels.organizationProfile.rating = 3;
                        this.levels[0].start.subLevels.productProfile.locked = false;
                        this.$store.dispatch('setLevels', this.levels);
                        router.push('/game-navigation');
                    }
                });
            }

        }
    }
</script>

