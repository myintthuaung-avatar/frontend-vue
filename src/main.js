import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/index'
import VuetifyConfirm from 'vuetify-confirm'
//import store from './store/index'
import '@mdi/font/css/materialdesignicons.css'
import api from "./services/api" 
import axios from 'axios'
//import { EventBus } from './store/eventbus.js';
import UserService from './services/user.service' 

//require('./assets/css/index.css');

Vue.config.productionTip = false
Vue.config.silent = true

Vue.prototype.$http = api; 

api.interceptors.request.use(
  config => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      if(user.token) {        
        config.headers.common["Authorization"] = 'Bearer ' + user.token;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//     response => {
//       if (response.status === 200 || response.status === 201) {
//         return Promise.resolve(response);
//       } else {
//         return Promise.reject(response);
//       }
//     },

//     error => {
//       if(error.response){
//         if (error.response.status) {
//           switch (error.response.status) {
//             case 400:
//               EventBus.$emit('error', '400 error');
//                 break;
//             case 401:
//                 EventBus.$emit('error', '401');
//                 break;
//               case 403:
//                 EventBus.$emit('error', '403 Permission denied');
//                 break;
//             case 404:
//                 EventBus.$emit('error', '404 page not found');
//                 break;
//               case 500:
//                 EventBus.$emit('error', '500 error');
//                 break;
//             case 502:
//                 EventBus.$emit('error', '502 error');
//                 break;
//             }
//             return Promise.reject(error.response);

//         }else {
//           EventBus.$emit('error', 'no status');
//           return Promise.reject(error.response);
//         }
//       }else {
//         EventBus.$emit('error', 'No response from server');
//       }
//     }
//)


Vue.use(VuetifyConfirm, {
    buttonTrueText: 'Ok',
    buttonFalseText: 'Cancel',
    color: 'warning',
    icon: 'mdi-alert-decagram',
    title: 'Warning',
    width: 400,
    property: '$confirm',
    vuetify: vuetify
})

const uninterceptedAxiosInstance = axios.create();

let user = JSON.parse(localStorage.getItem("user"));
if (user) {
  if(user.token) {        
    uninterceptedAxiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
  }
}

UserService.GetLogInUserInfo(uninterceptedAxiosInstance).then((res)=> {
  if(res.data) { //For Refresh
   // store.commit('app/_SetUserInfo',res.data);
  }
  new Vue({
    vuetify,
    router,
    //store,
    render: h => h(App)
  }).$mount('#app') 

}).catch(error => {
  console.log(error.response)
  new Vue({
    vuetify,
    router,
    //store,
    render: h => h(App)
  }).$mount('#app') 
});
