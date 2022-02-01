<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">

    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumb :items="itemsBreadcrumb" class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import { EventBus } from '../utils/EventBus';
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  props: ['itemsBreadcrumb'],
  components: {
    TheHeaderDropdownAccnt
  },
  created (){
    this.$notificationHub.Opened(this.$store.getters.stateUser.instanceId);
    this.$notificationHub.getNotifications(this.$store.getters.stateUser.id);
    EventBus.$on('ReceiveNotifications',this.receiveNotifications);
  },
  methods: {
    async receiveNotifications(data){
      console.log('ReceiveNotifications',data);
    },
  },
}
</script>
