<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="computedSidebar"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import { EventBus } from '../utils/EventBus';
import nav from './_nav';

export default {
  name: 'TheSidebar',
  props: ['role'],
  nav,
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow;
    },
    minimize () {
      return this.$store.state.sidebarMinimize;
    },
    currentItems() {
      return this.$options.nav.filter(item => {
        return !item.roles || item.roles.includes(this.role);
      });
    },
    computedSidebar() {
      return [
        {
          _name: "CSidebarNav",
          _children: this.currentItems
        }
      ];
    }
  }
}
</script>
