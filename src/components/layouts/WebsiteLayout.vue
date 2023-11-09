<style>
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0.1px;
  z-index: 2;
}

.v-toolbar__items.ittext a {
    color: aqua;
}
v-toolbar__items{
  margin-top: -4px;
}
</style>
<template>
    <div>
      <v-toolbar style="background-color:gray;" height="40px">
          <v-toolbar-title class="mb-3 ml-2" style="font-size: 12px; color:#fff;font-weight: 400;">
              <center>This is Testing ! hi i am !!!!!</center>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-tooltip left color="white">
                <template v-slot:activator="{ on, attrs }">
                  <router-link :to="{name: 'Login'}"> 
                  <v-btn  @click="aa" small v-bind="attrs" v-on="on" icon style="color:white" class="mr-2"><v-icon>mdi-login</v-icon></v-btn>
                    </router-link>
                </template>
                <span>Login</span>
              </v-tooltip>
        </v-toolbar>
        
      <v-toolbar
       class="fixed-bar"
        dark
        prominent
        height="50"
        color="#000" >
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" transition="hidden-md dialog-bottom-transition"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="mb-3 ml-2" style="font-size: 17px; color:#FFF;font-weight: 600;">
            Hi FYI SYSTEM
          </v-toolbar-title>
          <v-spacer></v-spacer>
            <v-sheet class="mx-auto">
              <v-slide-group center-active  mandatory
              style="background-color:black;"
                show-arrows>
                <v-slide-item
                  v-for="n in Item"
                  :key="n.name"
                  v-slot="{ active, toggle }">
                <router-link :to="{name: n.name}"> 
                  <v-btn
                  class="ma-2"
                  outlined
                  :color="active ? '#5544ff' : undefined"
                  @click="toggle"><v-icon>{{ n.icon }}</v-icon>
                  </v-btn>
                  </router-link>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          
      </v-toolbar>
        <v-app-bar style="background-color:gray;">
          
        </v-app-bar>
        <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
      >
      </v-navigation-drawer>
    
    <!-- <v-card
    max-width="100%"
  > -->
  
        <v-main>
            <slot/>  
    </v-main>
    <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
    small>
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
    <!-- </v-layout> -->
  <!-- </v-card> -->
</div>
  </template>
  
  <script>
//import VideoBackground from 'vue-responsive-video-background-player'
//import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
  export default {
    name: 'HelloWorld',
    components:{
        // VideoBackground
    },
    data (){
      return{
        sticky: false,
        drawer: false,
        model: null,
        watcher: true,
      group: null,
      Item:[
          {name:'FirstPage', icon:'mdi-video'},
          {name:'SecondPage',icon:'mdi-guitar-pick'},
          {name:'MapPage',icon:'mdi-google-maps'},
          {name:'Travel',icon:'mdi-car'},
          {name:'Contacts',icon:'mdi-cellphone-basic'},
          {name:'News',icon:'mdi-newspaper'},
          {name:'MapPage',icon:'mdi-home-map-marker'},
          {name:'Travel',icon:'mdi-car'},
          {name:'FirstPage',icon:'mdi-video'},
          {name:'SecondPage',icon:'mdi-guitar-pick'},
         
        ],
        options: {
        minScrollbarLength: 100,
      }
        
        
      }
    },
    
    methods:{
        
        changeOptions () {
      this.options.minScrollbarLength = this.options.minScrollbarLength + 100
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
  }
  
  </script>
  