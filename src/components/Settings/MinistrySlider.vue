<template>
    <div class="mt-n1">
      <router-view ref="rv"></router-view>
    <v-sheet
    class="mx-auto"
    max-width="100%"
    color="blue-grey lighten-4"
  >
    <v-slide-group center-active  mandatory
      
      show-arrows
    >
      <v-slide-item
        v-for="n in 25"
        :key="n"
        v-slot="{ active, toggle }"
      >
      <router-link :to="{name: 'Optionone'}"> 
        <v-btn
        class="ma-2"
        
        :color="active ? 'rgb(165 251 255)' : undefined"
        @click="toggle">Options {{ n }}
        </v-btn>
        </router-link>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
        
    </div>
  </template>
<script>
export default{
  name: 'App',
    components:{
    },
    data(){
        return{
            model: null,
        }
    }
}
</script>
