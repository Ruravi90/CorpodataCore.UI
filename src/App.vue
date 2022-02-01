<template>
  <div>
    <ConfirmDialog></ConfirmDialog>
    <Toast :baseZIndex="2030"/>
    <router-view></router-view>
  </div>
  
</template>

<script>
import { EventBus } from './utils/EventBus';
export default {
  name: 'App',
  created() {
    EventBus.$on('logout',()=>{
      this.$cookie.delete('user_session');
      this.$cookie.delete('token_session');
      this.$router.push("/login");
    })
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
