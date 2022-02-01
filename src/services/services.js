import axios from "axios";
import qs from 'qs';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

import { EventBus } from '../utils/EventBus';
 /**
  *
  * parse error response
  */
 function parseError (messages) {
   // error
   if (messages) {
     if (messages instanceof Array) {
       return Promise.reject({ messages: messages })
     } else {
       return Promise.reject({ messages: [messages] })
     }
   } else {
     return Promise.reject({ messages: ['Se ha producido un error'] })
   }
 }
 
 /**
  * parse response
  */
 function parseBody (response) {
 //  if (response.status === 200 && response.data.status.code === 200) { // - if use custom status code
   if (response.status === 200) {    
     return response.data
   } else {
     return this.parseError(response.data.messages)
   }
 }
 
 /**
  * axios instance
  */
 let instance = axios.create({
   baseURL: `http://localhost:5000/api`,
   paramsSerializer: function (params) {
     return qs.stringify(params, { indices: false })
   }
 })
 
 // request header
 instance.interceptors.request.use((config) => {
   config.headers = { Authorization: ("Bearer " + Vue.$cookies.get("token_session")) || null }
   return config
 }, error => {
   return Promise.reject(error)
 })
 
 // response parse
 instance.interceptors.response.use((response) => {
   return parseBody(response)
 }, error => {
    console.warn('Error status', error.response.status)

    if(error.response.status === 401){
      debugger;
      EventBus.$emit('logout');
    }

    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
 })


export default instance;