import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

import auth from "./modules/auth";
import clients from "./modules/clients";
import socialTypes from "./modules/socialTypes";
import users from "./modules/users";

export default new Vuex.Store({
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false
  },
  mutations:{
    toggleSidebarDesktop (state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile (state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set (state, [variable, value]) {
      state[variable] = value
    }
  },
  modules: {
    auth,
    clients,
    socialTypes,
    users,
  },
});