<style>
.theme--light.v-app-bar.v-toolbar.v-sheet {
   background-color: #0776df;
}
</style>
<template>
    <v-app id="inspire">

        <v-main>
          <slot />
        </v-main>
        <!-- <AlertDialog ref="AlertDialog"/> -->
    </v-app>
</template>
<script>
//import AlertDialog from '../../components/base/AlertDialog.vue';
import { EventBus } from '../store/eventbus.js';

export default {
  components: {
    //AlertDialog
  },

  created() {
    EventBus.$on('error', this.showAlert);
  },
  
  mounted() {
    //this.$root.AlertDialog = this.$refs.AlertDialog
  },

  methods: {
    showAlert(msg) {
      //this.$refs.AlertDialog.Show({ message: msg, color:"red" });
      if(msg === '401') {
          this.$router.push('/login');
      }
    }
  }
  
}
</script>