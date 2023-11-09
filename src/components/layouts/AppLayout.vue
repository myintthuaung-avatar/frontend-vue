<template>
    <v-app id="inspire" style="background-color:#c0c0c0;">
        <!-- <MainAppBar/> -->
        <MainDrawer/>
        <v-main class="mt-n6">
            <slot />
        </v-main>
        <v-footer style="background-color: whitesmoke;" app padless height="50">
            <v-col class="text-center" cols="12">
              <span
                >&copy; {{ new Date().getFullYear() }} —
                <strong>Test App System</strong></span>
            </v-col>
          </v-footer>
    </v-app>
</template>
<script>
// import MainAppBar from '../navigation/MainAppBar.vue';
import MainDrawer from "../../components/navigation/MainDrawer.vue"
export default {
    components:{
       // MainAppBar,
        MainDrawer,
    }

}
</script>
