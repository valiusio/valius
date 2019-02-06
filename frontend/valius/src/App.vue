<template>
  <div id="app">
      <div class="logout-panel" v-if="displayLogout" @click="logout">
          <div class="container container--exlg">
              <button>logout</button>
          </div>
      </div>
    <router-view/>
  </div>
</template>



<script>
export default {
    name: 'App',
    props: {
    },
    data(){
        return {

        }
    },
    computed : {
        displayLogout() {
          return !(this.$route.fullPath === '/')
        }
    },
    methods : {
        logout() {
            this.$store.dispatch('logout').then(() => {
                this.$router.push('/');
            });
        }
    },
    created() {
        const token = localStorage.getItem('token');
        if (token) {
            setTimeout(()=>{

                this.$store.dispatch('auth_success', token);
            }, 5000)
        }
    }
}
</script>
<style lang="scss">
  @import "styles/style.scss";
</style>
