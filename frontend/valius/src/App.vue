<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<script>
import axiosInstance from './services/axiosService';
export default {
    name: 'App',
    props: {

    },
    created() {
        const token = window.localStorage.getItem('token');
        token && this.$store.dispatch('updateToken', token);
        this.$store.state.user = {}
    }
}
</script>
<style lang="scss">
  @import "styles/style.scss";
</style>
