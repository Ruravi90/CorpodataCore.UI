<template>
  <div class="c-app">
    <TheSidebar v-bind:role="role"/>
    <CWrapper>
      <TheHeader v-bind:itemsBreadcrumb="itemsBreadcrumb"/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import { EventBus } from '../utils/EventBus';
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  data() {
    return {
      role: "Any",
      itemsBreadcrumb: [
        {
          text: 'CompanyGroup',
          to: '/'
        },
      ],
    };
  },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  },
  mounted() {
    EventBus.$on('selectedClient',()=>{
      if(this.$store.getters.stateClient!=null){
        this.setBreadcrumb(this.$route,this.$store.getters.stateClient);
      }
    })
  },
  beforeCreate(){
    this.$notificationHub.startSignalR();
    this.$tasksHub.startSignalR();
  },
  watch: {
    '$route' (route) {
      if(this.$store.getters.stateClient != null ){
        this.setBreadcrumb(route,this.$store.getters.stateClient);
      }
      else{
        this.itemsBreadcrumb = [
          {
            text: route.name,
            to: route.path
          }
        ];
        this.$store.commit("setSingleClient",null);
        this.role = "Any";
      }
    }
  },
  methods: {
    async setBreadcrumb(route,client){
      this.role = "client";
      this.itemsBreadcrumb = [
        {
          text: 'CompanyGroup',
          to: '/'
        },
        {
          text: client.corporateName,
          to: '/CompanyGroup'
        }
      ];
      let that = this;
      route.matched.forEach(r=>{
        if(r.path !== ''){
          that.itemsBreadcrumb.push({
            text: r.name,
            to: r.path
          });
        }
      });
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
