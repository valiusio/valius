<template>
  <div id="app">
      <div class="logout-panel" v-if="loggedin" @click="logout">
          <div class="container container--exlg">
              <button>logout</button>
          </div>
      </div>
    <router-view/>
  </div>
</template>



<script>
import storeInitializator from './services/storeInitializator';

export default {
    name: 'App',
    props: {
    },
    data(){
        return {

        }
    },
    computed : {
        loggedin () {
            return this.$store.getters.isLoggedIn
        }
    },
    methods : {
        logout() {
            this.$store.dispatch('logout');
        }
    },
    created() {
        const token = localStorage.getItem('token');
        if (token) {
            this.$store.dispatch('auth_success', token).then( res => {
                storeInitializator(this.$store);
                this.$router.push('/game-map');
            });

        }
    }
}
</script>
<style lang="scss">
  @import "styles/style.scss";
</style>
