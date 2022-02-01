import 'core-js/stable'
import "regenerator-runtime";
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import CoreuiVue from '@coreui/vue';
import { iconsSet as icons } from './assets/icons/icons.js';

axios.defaults.baseURL = 'http://localhost:5000' // same as the Url the server listens to
Vue.prototype.$http = axios

import store from './store/store';
Vue.prototype.$store = store;

import PrimeVue from 'primevue/config';
Vue.use(PrimeVue);

import ConfirmationService from 'primevue/confirmationservice';
Vue.use(ConfirmationService);
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);


import InputText from 'primevue/inputtext';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup'; 
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

Vue.component('InputText', InputText);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('Button', Button);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('ConfirmDialog', ConfirmDialog);
Vue.component('Toast', Toast);

import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// set default config
Vue.$cookies.config('30d')

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

import notificacionHub from './hubs/notificacionHub';
Vue.use(notificacionHub);

import tasksHub from './hubs/tasksHub';
Vue.use(tasksHub);

router.beforeResolve((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    if (to.name) {
      //NProgress.start()
    }
    next()
  }
})

router.afterEach(() => {
  //NProgress.done()
})

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
