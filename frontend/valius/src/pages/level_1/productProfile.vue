<template>

    <div class="product-profile">
        <div class="container--lg">
            <information-banner>
                <h1>Πόσο καλά γνωρίζεις την επίχειρηση σου;</h1>
                <p>Aπάντησε στις ερωτήσεις που γνωρίζεις συμπληρώνοντας τα παρακάτω κενά.</p>
            </information-banner>
            <form class="valius-form" @submit="register()">
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image">
                        <img :src=" brandIcon " class="product-profile__icon"/>
                    </div>
                    <div class="valius-form__column--right">
                        <md-field
                            class="input-field"
                            :class=" errors.has('brandName') && 'input-field--has-error' "
                        >
                            <label>Brand Name</label>
                            <md-input name="brandName" v-validate="'required'" v-model="product.brandName"></md-input>
                            <span class="md-helper-text" v-show="errors.has('brandName')">{{ errors.first('brandName') }}</span>
                        </md-field>
                    </div>
                </div>
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image">
                        <img :src="LightingIcon" class="product-profile__icon"/>
                    </div>
                    <div class="valius-form__column--right">

                        <md-field
                            class="input-field"
                            :class=" errors.has('offers') && 'input-field--has-error' "
                        >
                            <label>Τι προσφέρει (What it does)</label>
                            <md-input name="offers" v-validate="'required'" v-model="product.offers"></md-input>
                            <span class="md-helper-text" v-show="errors.has('offers')">{{ errors.first('offers') }}</span>
                        </md-field>
                    </div>
                </div>
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image">
                        <img :src=" brandIcon " class="product-profile__icon"/>
                    </div>
                    <div class="valius-form__column--right">
                        <md-field
                            class="input-field"
                            :class=" errors.has('targetMarket') && 'input-field--has-error' "
                        >
                            <label>Σε ποιούς απευθύνεται (Target Market)</label>
                            <md-input name="targetMarket" v-validate="'required'" v-model="product.targetMarket"></md-input>
                            <span class="md-helper-text" v-show="errors.has('targetMarket')">{{ errors.first('targetMarket') }}</span>
                        </md-field>
                    </div>
                </div>
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image"/>
                    <div class="valius-form__column--right">
                        <ul class="product-profile__actions-list product-profile__actions-list--strengths ">
                            <li v-for="strength in product.strengths">{{strength}}</li>
                        </ul>
                    </div>

                </div>
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image">
                        <img :src=" PlusIcon " class="product-profile__icon"/>
                    </div>
                    <div class="valius-form__column--right">
                        <md-field
                            class="input-field"
                            :class=" errors.has('strengths') && 'input-field--has-error' "
                        >
                            <label>Δυνατά σημέια (Strengths)</label>
                            <md-input name="services"  v-model="newstrength"></md-input>
                            <button class="product-profile__action-btn" @click="addNewStrength()">Add new strength</button>
                            <span class="md-helper-text" v-show="errors.has('strengths')">{{ errors.first('strengths') }}</span>
                        </md-field>
                    </div>
                </div>


                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image"/>
                    <div class="valius-form__column--right">
                        <ul class="product-profile__actions-list product-profile__actions-list--weaknesses">
                            <li v-for="weakness in product.weaknesses">{{weakness}}</li>
                        </ul>
                    </div>

                </div>
                <div class="valius-form__row">
                    <div class="valius-form__column--left valius-form__column--left--image">
                        <img :src="NegativeIcon" class="product-profile__icon"/>
                    </div>
                    <div class="valius-form__column--right">
                        <md-field
                            class="input-field"
                            :class=" errors.has('weaknesses') && 'input-field--has-error' "
                        >
                            <label>Αδύνατα σημεία (Weaknesses)</label>
                            <md-input name="weaknesses"  v-model="newweakness"></md-input>
                            <button class="product-profile__action-btn" @click="addNewWeakness()">Add new weakness</button>
                            <span class="md-helper-text" v-show="errors.has('weaknesses')">{{ errors.first('weaknesses') }}</span>
                        </md-field>
                    </div>
                </div>
                <md-field class="input-field">
                    <button type="submit" class="business-profile__form__submit">
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

    import BrandIcon from "../../assets/images/brand.png";
    import LightingIcon from "../../assets/images/lightning.png";
    import PlusIcon from "../../assets/images/plus.png";
    import NegativeIcon from "../../assets/images/negative.png";

    export default {
        name: 'product-profile',
        components:{
            InformationBanner
        },
        props: {

        },
        data(){
            return {
                levels: this.$store.getters.levels,
                product: this.$store.getters.product,

                brandIcon: BrandIcon,
                LightingIcon: LightingIcon,
                PlusIcon: PlusIcon,
                NegativeIcon: NegativeIcon,

                newstrength: '',
                newweakness:''
            }
        },
        methods:{
            register() {
                event.preventDefault();
                this.$validator.validate().then(valid=>{

                    if(valid){
                        this.$store.dispatch('updateProduct', this.product);
                        this.levels[0].start.subLevels.productProfile.rating = 3;
                        this.levels[0].landscapeIdentification.locked = false;
                        this.levels[0].landscapeIdentification.completed = true;
                        this.$store.dispatch('setCurrentLevel','landscapeIdentification');
                        this.$store.dispatch('setLevels', this.levels);
                        router.push('/game-navigation');
                    }

                });
            },
            addNewStrength() {
                event.preventDefault();
                if(this.newstrength.length >= 5) {
                    this.product.strengths.push(this.newstrength);
                    this.newstrength = '';
                }
            },

            addNewWeakness(){
                if(this.newweakness.length >= 5) {
                    event.preventDefault();
                    this.product.weaknesses.push(this.newweakness);
                    this.newweakness= '';
                }
            }

        }
    }
</script>

