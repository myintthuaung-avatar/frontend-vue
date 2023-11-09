/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import LoginLayout from '../components/layouts/LoginLayout.vue';
import AppLayout from '../components/layouts/AppLayout.vue';
import SettingLayout from '../components/layouts/SettingLayout.vue';
import WebsiteLayout from '../components/layouts/WebsiteLayout.vue';
import Table from "../components/views/Table.vue";
import TableTwo from "../components/views/TableTwo.vue";
import Hello from "../components/HelloWorld.vue";
import Login from "../components/Login.vue";
import UserList from "../components/Settings/UserList";
import PasswordResetList from "../components/Settings/PasswordResetList.vue";
import Dashboard from "../components/views/Dashboard";
import FirstPage from "../components/views/Webpageone.vue";
import SecondPage from "../components/views/Webpagetwo.vue";
import MapPage from "../components/views/Mappage.vue";
import Travel from "../components/views/Travel.vue";
import News from "../components/views/News.vue"
import Optionone from "../components/Options/optionone.vue";
import Contacts from "../components/views/Contacts.vue";
import MinistrySlider from "../components/Settings/MinistrySlider";

import { isAuthenticated } from './route-check';

//import { component } from "vue/types/umd";
Vue.use(VueRouter)

const routes = [
    {
      path:"/",
      name:"FirstPage",
      component:FirstPage,
      meta:{id: 0, layout: WebsiteLayout}
    },
    {
      path:"/secondpage",
      name:"SecondPage",
      component:SecondPage,
      meta:{id: 0, layout: WebsiteLayout}
    },
    {
      path:"/mappage",
      name:"MapPage",
      component:MapPage,
      meta:{id: 0, layout: WebsiteLayout}
    },
    {
      path:"/travel",
      name:"Travel",
      component:Travel,
      meta:{id: 0, layout: WebsiteLayout}
    },
    {
      path:"/contacts",
      name:"Contacts",
      component:Contacts,
      meta:{id: 0, layout: WebsiteLayout}
    },
    {
      path:"/news",
      name:"News",
      component:News,
      meta:{id:0,layout:WebsiteLayout}
    },
    {
      path:"/login",
      name: "Login",
      component:Login,
      meta: { id: 1, layout: LoginLayout}
    },
    {
      path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { id: 2, layout: AppLayout}
    },
    {
    path: '/table',
    name: 'Table',
    component: Table,
    meta: { id: 2, layout: AppLayout}
    },
    {
      path:'/tabletwo',
      name:'TableTwo',
      component:TableTwo,
      meta:{id:3, layout:AppLayout}
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: { id: 4, layout: SettingLayout}
    },
    {
      path:'/userlist',
      name:'UserList',
      component:UserList,
      meta:{id:5, layout:SettingLayout}
    },
    {
      path:'/passwordreset',
      name:'PasswordResetList',
      component:PasswordResetList,
      meta:{id:5,layout:SettingLayout}
    },
    {
      path:'/ministryslider',
      name:'MinistrySlider',
      component:MinistrySlider,
      meta:{id:5,layout:SettingLayout}
    },
    {
      path:"/optionone",
      name:"Optionone",
      component:Optionone,
      meta:{id:5,layout:SettingLayout}
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

let isHomePageRouteRequired = function(route){
  var required = false;
  if(route.name === 'Login'){
    required = true;
  }
  return required;
};

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
      if (isAuthenticated(to.meta.roles)) {
          if (isHomePageRouteRequired(to)) {
              next('/login');
          } else {
              next();
          }
      } else {
          next('/login');
      }
  } else {
      next();
  }
});

export default router;
