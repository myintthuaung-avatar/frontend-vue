<style scoped>
.router-link{
  text-decoration: none;
}
</style>
<template>
  <div >
    <MainAppBar/>
    <v-navigation-drawer v-model="drawer" permanent style="background-color: whitesmoke;" :mini-variant.sync="mini"
    expand-on-hover app clipped left class="mr-6" >


<v-list dense>
<v-list-item-group v-model="model">
   <template v-for="item in items">
    <router-link v-if=item :key="item.id" :to="item.href" class="router-link">
    <v-list-item link 
    v-on="on" >
    <v-list-item-icon>
        <v-icon :color=item.color>{{ item.icon }}</v-icon>
      </v-list-item-icon>
    <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item-content>
    </v-list-item>
  </router-link>
   <v-list-group color="#dcdcdc"
            v-else-if="item.children.length > 0 && item.permissions.includes(getUserInfo.role) === true"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item.icon"
            append-icon="mdi-chevron-down"
            dense>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.href"
              dense>
              <v-list-item-action v-if="child.icon">
                <v-icon color="#000">{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
   </template>
 </v-list-item-group>
</v-list>
</v-navigation-drawer>
  </div>
</template>

  <script>
  import MainAppBar from './MainAppBar.vue';
export default {
  name: "App",
  components:{
    MainAppBar
  },
  data () {
     return {
     //drawer: true,
     drawer: null, // Hide mobile side menu by default
     items: [
      {id: 1, text:"Dashboard", href: "/dashboard", icon: "mdi-home", children: [], color:"#020202",
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 2, text:"Business", href: "/tabletwo", icon: "mdi-database", children: [],color:"#020202",
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 3, text:"Admin", href: "/table", icon: "mdi-account-tie", children: [], color:"#020202",
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 4, text:"Setting", href: "/userlist", icon: "mdi-decagram", children: [], color:"#020202",
    permissions:['ADMIN', 'VIP', 'USER' ]},
     ],
     mini: true,
     }
  },
  
}
</script>