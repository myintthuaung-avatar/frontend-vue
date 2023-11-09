<style lang="postcss" scoped>
.h1 {
  margin: 300px auto;
  text-align: center;
  color: #040720;
  transition: 0.5s;
  font-size: 8em;
  font-family: Arial, Helvetica, sans-serif;
}

.h1:hover {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc,
      0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc,
      0 7px 0 #ccc, 0 8px 0 #ccc,
      0 9px 0 #ccc, 0 10px 0 #ccc,
      0 11px 0 #ccc, 0 12px 0 #ccc,
      0 20px 30px rgba(0, 0, 0, 0.5);
}
</style>
<template>
<!-- <div> -->
  <!-- <v-container> -->
    <v-system-bar color="black">
      <v-app-bar app clipped-left  class="">
        <v-toolbar-title class="text-uppercase subtitle-1 h1" style=""><h2>App System</h2></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu v-model="menu1" :close-on-content-click="false" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon size="35" v-bind="attrs" v-on="on" class="">mdi-account-circle</v-icon>
          </template>
  
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <center>
                    <router-link
                      :to="{ name: 'UserDetail', query: { userid: udata } }"
                    >
                      <v-avatar size="50" color="blue-grey lighten-1">
                        <v-img :src="`data:image/png;base64,${udata}`">
                        </v-img>
                      </v-avatar>
                    </router-link>
                    <v-list-item-title class="mt-5">
                      Login User
                    </v-list-item-title>
                    <v-list-item-subtitle class="pt-2">
                      Login User Role
                    </v-list-item-subtitle>
                  </center>
                </v-list-item-content>
              </v-list-item>
            </v-list>
  
            <v-divider></v-divider>
            <v-card-actions>
              <v-col cols="12" md="12" class="text-center">
                <v-btn small @click="Logout" outlined color="blue-grey">
                  <v-icon right>mdi-logout</v-icon>
                </v-btn> <span style="font-size: 15px;">Sign out</span>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-menu>
     </v-app-bar>
    </v-system-bar>
    
  </template>
  
  <script>
//import VideoBackground from 'vue-responsive-video-background-player'
//import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
  export default {
    name: 'HelloWorld',
    components:{
         //VideoBackground
    },
    data: () => ({
        sticky: false,
        drawer: false,
        value: 1,
        menu1:0,
        active: true,
      group: null,
      udata:[],
        options: {
        minScrollbarLength: 100,
        items:[
            "aa","bb"
        ],
        Item:[
            "What is Apple TV+?","How can I watch it?","What does it cost?","Can I share with my family?","Are there commercials? And can I watch on demand?",
            "Do I need an Apple TV 4K?"
        ]
        
      },
      watcher: true
    }),
    
    methods:{
        
        changeOptions () {
      this.options.minScrollbarLength = this.options.minScrollbarLength + 0
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 10;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    Logout() {
      this.$router.push({
        name: "Login",
      });
    },
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
  }
  
  </script>
  