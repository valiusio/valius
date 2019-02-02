<template>
    <div class="profile-navigation"
        @click="goToActionPage"
    >
        <div class="profile-navigation__preview">
            <img :src="getTypeImg()" class="md-image profile-navigation__type"/>
            <img :src="getRatingImg()" class="profile-navigation__rating"/>

            <img v-if="locked == true "
                 src="../assets/images/gameNavigation/locked.png"
                 class="profile-navigation__locked"/>
        </div>

        <div class="profile-navigation__label">
            {{ label }}
        </div>
    </div>
</template>



<script>
    import { ProfileNavigationNameMapping }from "../services/LocalizationMappingService";

    export default {
        name: 'ProfileNavigation',
        props: [
            "locked",
            "rating",
            "type",
        ],
        data(){
            return {

            }
        },
        components:{
        },
        computed : {

            label() {
                return ProfileNavigationNameMapping[this.type].name;
            }
        },
        methods:{
            getRating() {
              if(this.locked){
                  return '0';
              }
              return ''+this.rating;
            },
            getTypeImg() {
                return require('../assets/images/gameNavigation/type/' + this.type +'.png');
            },
            getRatingImg() {
                return require('../assets/images/gameNavigation/rating/' + this.getRating() +'.png');
            },

            goToActionPage() {
               !this.locked  && this.$router.push(ProfileNavigationNameMapping[this.type].link);
            }
        }
    }
</script>

