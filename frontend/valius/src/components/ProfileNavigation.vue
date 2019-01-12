<template>
    <div class="profile-navigation"
        @click="goTouserProfile()"
    >
        <div class="profile-navigation__preview">
            <img :src="getTypeImg()" class="profile-navigation__type"/>
            <img :src="getRatingImg()" class="profile-navigation__rating"/>

            <img v-if="locked == true "
                 src="../assets/images/gameNavigation/locked.png"
                 class="profile-navigation__locked"/>
        </div>

        <div class="profile-navigation__label">
            {{ getLabel() }}
        </div>
    </div>
</template>



<script>

    import router from "../router";

    export default {
        name: 'ProfileNavigation',
        props: [
            "locked",
            "rating",
            "type",
            "link"
        ],
        data(){
            return {

            }
        },
        components:{
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
            getLabel() {
                switch (this.type){
                    case "user" :
                        return "Προφίλ Χρήστη";
                    break;
                    case "product" :
                        return "Περιγραφή Προιόντος";
                    break;
                    case "organization" :
                        return "Προφίλ Οργανισμού";
                    break;
                }
            },

            goTouserProfile() {
               !this.locked  && this.$router.push(`/${this.link}`);
            }
        }
    }
</script>

